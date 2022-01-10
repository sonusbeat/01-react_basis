import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter:  0,
  previous: 0,
  changes:  0
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number; } }
  | { type: "decreaseBy"; payload: { value: number; } }
  | { type: "reset"; };

const counterReducer = ( state: CounterState, action: CounterAction ): CounterState => {
  const { counter, changes } = state;

  switch ( action.type ) {
    case "reset":
      return {
        counter:  0,
        previous: 0,
        changes:  0
      };

    case "increaseBy":
      return {
        changes:  changes + 1,
        counter:  counter + action.payload.value,
        previous: counter
      };

    default:
      return state;
  }
};

const CounterReducerComponent = (): JSX.Element => {
  const [ counterState, dispatch ] = useReducer( counterReducer, INITIAL_STATE );

  function handleReset(): void {
    dispatch({ type: "reset", });
  }

  function handleIncrement( value: number ): void {
    dispatch({
      type: "increaseBy",
      payload: { value }
    });
  }

  return (
    <>
      <h1 className="text-center display-1 green">
        Counter Reducer
      </h1>
      <hr />

      <pre className="h3 orange mb-4">
        { JSON.stringify( counterState, null, 2 ) }
      </pre>

      <div className="text-center">
        <button
          className="btn btn-primary me-3"
          onClick={ () => handleIncrement( 1 ) }
        >+1</button>

        <button
          className="btn btn-primary me-3"
          onClick={ () => handleIncrement( 5 ) }
        >+5</button>

        <button
          className="btn btn-primary me-3"
          onClick={ () => handleIncrement( 10 ) }
        >+10</button>

        <button
          className="btn btn-primary me-3"
          onClick={ handleReset }
        >Reset</button>
      </div>
    </>
  );  
};

export default CounterReducerComponent;
