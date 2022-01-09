import { useEffect, useState } from "react";

const CounterEffect = (): JSX.Element => {
  const initialValue = 10;
  const MAXIMUM_COUNT = 20;
  const [ counter, setCounter ] = useState( initialValue );

  useEffect(() => {
    if (counter < 20) return undefined;

    console.log(
      "%cCounter reached maximum value",
      "color: yellow; background-color: #111; padding: 5px;"
    );

  }, [ counter ]);

  const handleIncrement = (): void => {
    setCounter( previous => Math.min( previous + 1, MAXIMUM_COUNT ) );
  };

  const handleReset = (): void => {
    setCounter( initialValue );
  };

  const handleDecrement = (): void => {
    ( counter > 0 ) && setCounter( previous => previous - 1);
  };

  return (
    <>
      <h1 className="text-center green display-1">Counter Effect: { counter }</h1>
      <hr />

      <section className="text-center mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={ handleIncrement }
        >+</button>

        <button
          className="btn btn-outline-primary mx-3"
          onClick={ handleReset }
        >reset</button>

        <button
          className="btn btn-outline-primary"
          onClick={ handleDecrement }
        >-</button>
      </section>
    </>
  );
};

export default CounterEffect;
