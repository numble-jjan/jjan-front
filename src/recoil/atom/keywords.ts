import { atom, atomFamily } from 'recoil';

export const drinkKeywords = atomFamily({
  key: 'todo',
});
export const selectedDrinkKeywordsState = atom({ key: 'todo' });
