import { useState } from "react";
import { BoardComponent } from "./Board";
import { Board, createInitialBoard } from "./game";

export function App() {
  const [board, setBoard] = useState<Board>(createInitialBoard());

  return <BoardComponent board={board} />;
}
