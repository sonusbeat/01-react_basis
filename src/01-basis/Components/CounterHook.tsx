import useCounter from '../../Hooks/useCounter';
const CounterHook = (): JSX.Element => { 

  const {
    counter,
    counterElement,
    handleIncrement,
    handleDecrement,
    handleReset
  } = useCounter();

  return (
    <>
      <hgroup className="text-center">
        <h1 className="green display-1">Counter Hook</h1>
        <h2 ref={ counterElement } className="purple display-2">{ counter }</h2>
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
