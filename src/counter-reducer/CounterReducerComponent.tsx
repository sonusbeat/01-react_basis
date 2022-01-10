import { useReducer } from "react";
import { CounterState } from "./interfaces";
import counterReducer from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  counter:  0,
  previous: 0,
  changes:  0
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
      <h1 className="text-center display-5 green">
        Counter Reducer Segmented
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
