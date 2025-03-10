"use client";

import ChessGame from "@/components/chess/chess-game";
import FormCard from "../register/form-card";

function ChessPage() {
  return (
    <div className="bg-charcoal-1 flex h-full w-full items-center justify-center">
      <div className="flex h-full w-full max-w-[80rem] py-10">
        <FormCard title="">
          <ChessGame callback={() => {}} />
        </FormCard>
      </div>
    </div>
  );
}
export default ChessPage;
