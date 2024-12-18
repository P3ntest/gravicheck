import { PieceComponent } from "./Piece";
import { Board, Field } from "./game";

export function BoardComponent({ board }: { board: Board }) {
  return (
    <div className="flex flex-col">
      {Array.from({ length: board.length }).map((_, y) => (
        <div className="flex" key={y}>
          {Array.from({ length: board[0].length }).map((_, x) => (
            <FieldComponent x={x} y={y} key={x} field={board[y][x]} />
          ))}
        </div>
      ))}
    </div>
  );
}

function FieldComponent({
  x,
  y,
  field,
}: {
  x: number;
  y: number;
  field: Field;
}) {
  return (
    <div
      className=""
      style={{
        width: 70,
        height: 70,
        backgroundColor: (x + y) % 2 === 0 ? "#ffdd80" : "#5c9621",
      }}
    >
      {field.piece && <PieceComponent piece={field.piece} />}
    </div>
  );
}
