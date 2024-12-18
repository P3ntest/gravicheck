import { Piece } from "./game";

import black_bishop from "./assets/chess/black_bishop.png";
import black_king from "./assets/chess/black_king.png";
import black_knight from "./assets/chess/black_knight.png";
import black_pawn from "./assets/chess/black_pawn.png";
import black_queen from "./assets/chess/black_queen.png";
import black_rook from "./assets/chess/black_rook.png";
import white_bishop from "./assets/chess/white_bishop.png";
import white_king from "./assets/chess/white_king.png";
import white_knight from "./assets/chess/white_knight.png";
import white_pawn from "./assets/chess/white_pawn.png";
import white_queen from "./assets/chess/white_queen.png";
import white_rook from "./assets/chess/white_rook.png";

const pieceImages = {
  white: {
    pawn: white_pawn,
    rook: white_rook,
    knight: white_knight,
    bishop: white_bishop,
    queen: white_queen,
    king: white_king,
  },
  black: {
    pawn: black_pawn,
    rook: black_rook,
    knight: black_knight,
    bishop: black_bishop,
    queen: black_queen,
    king: black_king,
  },
};

export function PieceComponent({ piece: { color, type } }: { piece: Piece }) {
  return <img src={pieceImages[color][type]} alt="piece" />;
}
