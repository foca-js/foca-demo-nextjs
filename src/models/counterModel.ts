import { defineModel } from 'foca';
import { fetchCount } from '../pages/counter/counterAPI';

const initialState: {
  value: number;
} = {
  value: 0,
};

export const counterModel = defineModel('counter', {
  initialState,
  actions: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, amount: number) {
      state.value += amount;
    },
  },
  effects: {
    async incrementAsync(amount: number) {
      const response = await fetchCount(amount);
      this.setState((state) => {
        state.value += response.data;
      });
    },
    incrementIfOdd(amount: number) {
      if (this.state.value % 2 === 1) {
        this.incrementByAmount(amount);
      }
    },
  },
});
