import useCounter from '../../Hooks/useCounter';
const CounterHook = (): JSX.Element => { 

  const {
    counter,
    elementToAnimate,
    handleIncrement,
    handleDecrement,
    handleReset
  } = useCounter({
    initialValue: 15,
    maxCount: 20
  });

  return (
    <>
      <hgroup className="text-center">
        <h1 className="green display-1">Counter Hook</h1>
        <h2 ref={ elementToAnimate } className="purple display-2">{ counter }</h2>
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

export default CounterHook;
