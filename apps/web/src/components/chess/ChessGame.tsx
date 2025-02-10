"use client";

import { cn } from "@/libs/utils";
import { useCallback, useState } from "react";
import Bishop from "./Bishop";
import Board from "./Board";
import Knight from "./Knight";
import Rook from "./Rook";

const BOARD_SIZE = 8;
const CELL_SIZE = 100;

interface Position {
  x: number;
  y: number;
}

interface GameState {
  currentPosition: Position;
  currentPiece: "knight" | "bishop" | "rook";
  moveHistory: string[];
  score: number;
  noDeductionMoves: number;
  nextMultiplier: number;
  visitedSquares: Set<string>;
}

const YELLOW_SQUARES: Record<string, number> = {
  a3: 100,
  a5: 300,
  a7: 200,
  b8: 600,
  c1: 200,
  c3: 100,
  c5: 100,
  d2: 100,
  d4: 200,
  d6: 100,
  d8: 600,
  f2: 200,
  f4: 300,
  f6: 200,
  f8: 600,
  g1: 100,
  g7: 200,
  h2: 200,
  h4: 200,
  h8: 600,
};

const ORANGE_SQUARES: Record<string, number> = {
  a1: 70,
  b2: 20,
  b6: 30,
  c7: 20,
  e1: 30,
  e3: 20,
  e5: 30,
  e7: 30,
  g5: 20,
  h6: 30,
};

const LIGHT_GREEN_SQUARES = new Set([
  "b1",
  "b5",
  "c2",
  "c4",
  "c6",
  "e2",
  "f5",
  "g2",
  "h3",
]);

const BLUE_SQUARES: Record<string, number> = {
  a2: 3,
  a4: 2,
  b7: 3,
  d3: 2,
  d5: 2,
  f1: 2,
  g4: 3,
  h7: 2,
};

const PINK_SQUARES: Record<string, number> = {
  a6: 2,
  b3: 2,
  e6: 2,
  f3: 2,
  f7: 3,
  h1: 3,
  h5: 2,
};

const toChessNotation = (pos: Position) => {
  const file = String.fromCharCode(97 + pos.x);
  const rank = BOARD_SIZE - pos.y;
  return `${file}${rank}`;
};

const fromChessNotation = (notation: string) => {
  const x = notation.charCodeAt(0) - 97;
  const y = BOARD_SIZE - parseInt(notation[1]);
  return { x, y };
};

const isKnightMove = (from: Position, to: Position) => {
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
};

const isBishopMove = (from: Position, to: Position) => {
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);
  return dx === dy;
};

const isRookMove = (from: Position, to: Position) => {
  return from.x === to.x || from.y === to.y;
};

const isValidMove = (
  from: Position,
  to: Position,
  pieceType: "knight" | "bishop" | "rook",
) => {
  if (to.x < 0 || to.x >= BOARD_SIZE || to.y < 0 || to.y >= BOARD_SIZE) {
    return false;
  }

  switch (pieceType) {
    case "knight":
      return isKnightMove(from, to);
    case "bishop":
      return isBishopMove(from, to);
    case "rook":
      return isRookMove(from, to);
    default:
      return false;
  }
};

const getValidMoves = (
  pos: Position,
  pieceType: "knight" | "bishop" | "rook",
): Position[] => {
  const moves: Position[] = [];

  if (pieceType === "knight") {
    const possibleMoves = [
      [-2, -1],
      [-2, 1],
      [2, -1],
      [2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
    ];
    for (const [dx, dy] of possibleMoves) {
      const newX = pos.x + dx;
      const newY = pos.y + dy;
      if (newX >= 0 && newX < BOARD_SIZE && newY >= 0 && newY < BOARD_SIZE) {
        moves.push({ x: newX, y: newY });
      }
    }
  } else if (pieceType === "bishop") {
    const directions = [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1],
    ];
    for (const [dx, dy] of directions) {
      for (let i = 1; i < BOARD_SIZE; i++) {
        const newX = pos.x + dx * i;
        const newY = pos.y + dy * i;
        if (newX >= 0 && newX < BOARD_SIZE && newY >= 0 && newY < BOARD_SIZE) {
          moves.push({ x: newX, y: newY });
        } else {
          break;
        }
      }
    }
  } else if (pieceType === "rook") {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dx, dy] of directions) {
      for (let i = 1; i < BOARD_SIZE; i++) {
        const newX = pos.x + dx * i;
        const newY = pos.y + dy * i;
        if (newX >= 0 && newX < BOARD_SIZE && newY >= 0 && newY < BOARD_SIZE) {
          moves.push({ x: newX, y: newY });
        } else {
          break;
        }
      }
    }
  }

  return moves;
};

const isTransformSquare = (pos: Position) => {
  const notation = toChessNotation(pos);
  if (["b4", "e4", "g3"].includes(notation)) return "bishop";
  if (["d1", "d7", "g6"].includes(notation)) return "rook";
  return null;
};

const isEndSquare = (pos: Position) => {
  const notation = toChessNotation(pos);
  return ["a8", "c8", "e8", "g8"].includes(notation);
};

const ChessGame = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentPosition: fromChessNotation("b1"),
    currentPiece: "knight",
    moveHistory: ["b1"],
    score: 0,
    noDeductionMoves: 0,
    nextMultiplier: 1,
    visitedSquares: new Set(["b1"]),
  });

  const handleMove = useCallback(
    (toPos: Position) => {
      if (
        !isValidMove(gameState.currentPosition, toPos, gameState.currentPiece)
      ) {
        return;
      }

      setGameState((prev) => {
        let newScore = prev.score;
        const notation = toChessNotation(toPos);
        const isVisited = prev.visitedSquares.has(notation);

        if (
          prev.noDeductionMoves === 0 &&
          !LIGHT_GREEN_SQUARES.has(notation) &&
          !isEndSquare(toPos)
        ) {
          newScore = Math.round(newScore * 0.9);
        }

        if (!isVisited || LIGHT_GREEN_SQUARES.has(notation)) {
          if (YELLOW_SQUARES[notation]) {
            newScore += YELLOW_SQUARES[notation] * prev.nextMultiplier;
          } else if (ORANGE_SQUARES[notation]) {
            const bonus = Math.round(
              newScore * (ORANGE_SQUARES[notation] / 100),
            );
            newScore += bonus;
          }
        }

        const newMoveHistory = [...prev.moveHistory, notation];
        const specialPiece = isTransformSquare(toPos);
        const newVisited = new Set(prev.visitedSquares).add(notation);

        return {
          currentPosition: toPos,
          currentPiece: specialPiece || "knight",
          moveHistory: newMoveHistory,
          score: newScore,
          noDeductionMoves:
            BLUE_SQUARES[notation] || Math.max(0, prev.noDeductionMoves - 1),
          nextMultiplier: PINK_SQUARES[notation] || 1,
          visitedSquares: newVisited,
        };
      });
    },
    [gameState.currentPosition, gameState.currentPiece],
  );

  const handleClick = useCallback(
    (x: number, y: number) => {
      handleMove({ x, y });
    },
    [handleMove],
  );

  const handleReset = useCallback(() => {
    setGameState({
      currentPosition: fromChessNotation("b1"),
      currentPiece: "knight",
      moveHistory: ["b1"],
      score: 0,
      noDeductionMoves: 0,
      nextMultiplier: 1,
      visitedSquares: new Set(["b1"]),
    });
  }, []);

  const canSubmit = isEndSquare(gameState.currentPosition);

  const handleSubmit = useCallback(() => {
    if (!canSubmit) return;
    alert(
      `Game completed!\nMoves: ${gameState.moveHistory.join("-")}\nFinal Score: ${gameState.score}`,
    );
  }, [canSubmit, gameState.moveHistory, gameState.score]);

  const validMoves = getValidMoves(
    gameState.currentPosition,
    gameState.currentPiece,
  );
  const isValidMoveSquare = (x: number, y: number) =>
    validMoves.some((move) => move.x === x && move.y === y);

  const PieceComponent = {
    knight: Knight,
    bishop: Bishop,
    rook: Rook,
  }[gameState.currentPiece];

  return (
    <div className="relative">
      <div
        className="relative inline-block"
        style={{
          width: BOARD_SIZE * CELL_SIZE,
          height: BOARD_SIZE * CELL_SIZE,
        }}
      >
        <div className="relative">
          <Board />

          <div
            className="absolute"
            style={{
              left: gameState.currentPosition.x * CELL_SIZE,
              top: gameState.currentPosition.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <PieceComponent />
          </div>

          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-8 grid-rows-8">
            {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, i) => {
              const x = i % BOARD_SIZE;
              const y = Math.floor(i / BOARD_SIZE);
              const isValid = isValidMoveSquare(x, y);
              return (
                <div
                  key={i}
                  onClick={() => handleClick(x, y)}
                  className={cn(
                    "group flex items-center justify-center transition-colors duration-200",
                    isValid && "cursor-pointer",
                  )}
                >
                  {isValid && (
                    <div className="bg-black/10 rounded-full size-[90px] transition-all duration-200 group-hover:bg-black/20 group-active:bg-black/30 group-active:scale-95" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xl font-bold text-center">
        Current Piece:{" "}
        {gameState.currentPiece.charAt(0).toUpperCase() +
          gameState.currentPiece.slice(1)}
      </div>

      <div className="mt-2 text-xl font-bold text-center">
        Score: {gameState.score}
        {gameState.noDeductionMoves > 0 && (
          <span className="ml-2 text-blue-500">
            (No deduction: {gameState.noDeductionMoves} moves)
          </span>
        )}
        {gameState.nextMultiplier > 1 && (
          <span className="ml-2 text-pink-500">
            (Next bonus x{gameState.nextMultiplier})
          </span>
        )}
      </div>

      <div className="mt-4 flex gap-4 justify-center">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleReset}
        >
          Reset Game
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-100 rounded max-w-[800px]">
        <h3 className="font-bold mb-2">Move History:</h3>
        <p className="text-wrap">{gameState.moveHistory.join(" > ")}</p>
      </div>
    </div>
  );
};

export default ChessGame;
