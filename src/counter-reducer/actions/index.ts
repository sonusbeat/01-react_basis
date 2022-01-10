export type CounterAction =
  | { type: "increaseBy"; payload: { value: number; } }
  | { type: "decreaseBy"; payload: { value: number; } }
  | { type: "reset"; };