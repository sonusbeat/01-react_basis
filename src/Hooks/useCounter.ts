import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";

type HooksProps = {
  initialValue?: number;
  maxCount?: number;
};

const useCounter = ({ initialValue = 15, maxCount = 10 }: HooksProps) => {
  const [ counter, setCounter ] = useState( initialValue );
  const elementToAnimate = useRef<any>( null );

  const timelineRef = useRef( gsap.timeline() );

  useLayoutEffect(() => {
    if( !elementToAnimate.current ) return;
    
    timelineRef.current
      .to( elementToAnimate.current, { y: -10, duration: 0.2, ease: "ease.out" } )
      .to( elementToAnimate.current, { y: 0, duration: 0.5, ease: "bounce.out" } )
      .pause();
  }, []);

  useEffect(() => {
    timelineRef.current.play( 0 );
  }, [ counter ]);

  const handleIncrement = (): void => {
    setCounter( previous => Math.min( previous + 1, maxCount ) );
  };

  const handleReset = (): void => {
    setCounter( initialValue );
  };

  const handleDecrement = (): void => {
    ( counter > 0 ) && setCounter( previous => previous - 1);
  };

  return {
    counter,
    elementToAnimate,
    handleIncrement,
    handleDecrement,
    handleReset
  };
};

export default useCounter;
