import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUM_COUNT = 20;
const initialValue = 15;

const useCounter = () => {
  const [ counter, setCounter ] = useState( initialValue );
  const counterElement = useRef<HTMLHeadingElement>( null );

  useEffect(() => {
    if ( counter < 20 ) return undefined;

    console.log(
      "%cCounter reached maximum value",
      "color: yellow; background-color: #111; padding: 5px;"
    );

    const timeline = gsap.timeline();

    timeline
      .to( counterElement.current, { y: -15, duration: 0.2, ease: "ease.out" } )
      .to( counterElement.current, { y: 0, duration: 0.5, ease: "bounce.out" } );

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

  return {
    counter,
    counterElement,
    handleIncrement,
    handleDecrement,
    handleReset
  };
};

export default useCounter;
