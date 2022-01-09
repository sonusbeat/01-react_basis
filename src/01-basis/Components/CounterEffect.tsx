import { useEffect, useState } from "react";
import { gsap } from "gsap";

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

    gsap.to("h2", { y: -15, duration: 0.2, ease: "ease.out" }).then(() => {
      gsap.to("h2", { y: 0, duration: 0.5, ease: "bounce.out" })
    });

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
      <hgroup className="text-center">
        <h1 className="green display-1">Counter Effect</h1>
        <h2 className="purple display-2">{ counter }</h2>
      </hgroup>
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
