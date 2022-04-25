import { useState } from 'react';
import styles from './Counter.module.css';
import { useLoading, useModel } from 'foca';
import { counterModel } from '../../models/counterModel';

function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(2);
  const count = useModel(counterModel, (state) => state.value);
  const loading = useLoading(counterModel.incrementAsync);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={counterModel.decrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={counterModel.increment}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value) || 0)}
        />
        <button
          className={styles.button}
          onClick={() => counterModel.incrementByAmount(incrementAmount)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => counterModel.incrementAsync(incrementAmount)}
        >
          {loading ? 'Waiting.....' : 'Add Async'}
        </button>
        <button
          className={styles.button}
          onClick={() => counterModel.incrementIfOdd(incrementAmount)}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

export default Counter;
