"use client";

import ChessGame from "@/components/chess/chess-game";

function ChessPage() {
  return (
    <div className="bg-charcoal-1 h-full w-full pt-12">
      <ChessGame callback={() => {}} />
    </div>
  );
}
export default ChessPage;
