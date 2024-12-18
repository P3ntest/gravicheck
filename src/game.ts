export type PieceType =
  | "king"
  | "queen"
  | "bishop"
  | "knight"
  | "rook"
  | "pawn";
export type PieceColor = "white" | "black";
export type Piece = {
  type: PieceType;
  color: PieceColor;

  // metadata to save pawn's first move
  hasMoved?: boolean;
};

export type Field = {
  piece: Piece | null;
};

export type Board = Field[][];

export function createInitialBoard() {
  const width = 12;
  const height = 6;

  const board: Board = new Array(height)
    .fill(null)
    .map(() => new Array(width).fill(null).map(() => ({ piece: null })));

  board[5][0].piece = { type: "king", color: "black" };
  board[4][0].piece = { type: "queen", color: "black" };
  board[3][0].piece = { type: "bishop", color: "black" };
  board[5][1].piece = { type: "rook", color: "black" };
  board[4][1].piece = { type: "knight", color: "black" };
  board[5][2].piece = { type: "pawn", color: "black", hasMoved: false };
  board[4][2].piece = { type: "pawn", color: "black", hasMoved: false };
  board[3][2].piece = { type: "pawn", color: "black", hasMoved: false };

  return board;
}

export function findLegalMoves(board: Board, x: number, y: number) {
  const field = board[y][x];
  if (!field.piece) {
    return [];
  }

  switch (field.piece.type) {
    case "king":
      return findLegalMovesForKing(board, x, y);
    case "queen":
      return findLegalMovesForQueen(board, x, y);
    case "bishop":
      return findLegalMovesForBishop(board, x, y);
    case "knight":
      return findLegalMovesForKnight(board, x, y);
    case "rook":
      return findLegalMovesForRook(board, x, y);
    case "pawn":
      return findLegalMovesForPawn(board, x, y);
  }
}
