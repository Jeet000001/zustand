import { useCounterStore } from "../store/counderStore.js";
import CounterValue from "./CounterValue.jsx";

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div>
      <CounterValue />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
