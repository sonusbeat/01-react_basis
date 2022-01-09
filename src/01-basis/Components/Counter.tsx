import { useState } from "react";

interface Props {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: Props): JSX.Element => {
  const [ counter, setCounter ] = useState( initialValue );

  const handleIncrement = (): void => {
    setCounter( previous => previous + 1);
  };

  const handleReset = (): void => {
    setCounter( initialValue );
  };

  const handleDecrement = (): void => {
    ( counter > 0 ) && setCounter( previous => previous - 1);
  };

  return (
    <>
      <h1 className="text-center green display-1">Counter: { counter }</h1>
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

export default Counter;
