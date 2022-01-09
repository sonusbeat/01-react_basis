import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

const CounterBy = ({ initialValue = 10 }: Props): JSX.Element => {
  const [{ counter, clicks }, setCounterState ] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleIncrement = ( value: number ): void => {
    setCounterState( ({ counter, clicks }) => ({
        counter: counter + value,
        clicks: clicks + 1
    }));
  };

  const handleReset = (): void => {
    setCounterState(() => ({
      counter: initialValue,
      clicks: 0
    }));
  };

  const handleDecrement = ( value: number ): void => {
    if ( counter > 0 ) {
      setCounterState( ({ counter, clicks }) => ({
        counter: counter - value,
        clicks: clicks + 1
      }));
    }
  };

  return (
    <>
      <h1 className="text-center green display-1">Counter By: { counter }</h1>
      <h2 className="text-center green display-1">Clicks: { clicks }</h2>
      <hr />

      <section className="text-center mt-4">

        <button
          className="btn btn-outline-primary me-3"
          onClick={ () => handleIncrement( 10 ) }
        >+ 10</button>

        <button
          className="btn btn-outline-primary"
          onClick={ () => handleIncrement( 1 ) }
        >+</button>

        <button
          className="btn btn-outline-primary mx-3"
          onClick={ handleReset }
        >reset</button>

        <button
          className="btn btn-outline-primary me-3"
          onClick={ () => handleDecrement( 1 ) }
        >-</button>

        <button
          className="btn btn-outline-primary"
          onClick={ () => handleDecrement( 10 ) }
        >- 10</button>
      </section>
    </>
  );
};

export default CounterBy;
