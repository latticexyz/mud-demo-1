import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    components: { Position },
    systemCalls: { move },
    network: { playerEntity },
  } = useMUD();

  const position = useComponentValue(Position, playerEntity);

  if (!position) {
    return <button onClick={() => move(1, 1)}>Spawn</button>;
  }

  const { x, y } = position;

  return (
    <>
      <div>
        Position:
        <span>
          {x}/{y}
        </span>
      </div>
      <button onClick={() => move(x - 1, y)}>Left</button>
      <button onClick={() => move(x + 1, y)}>Right</button>
      <button onClick={() => move(x, y - 1)}>Up</button>
      <button onClick={() => move(x, y + 1)}>Down</button>
    </>
  );
};
