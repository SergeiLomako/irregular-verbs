import { TYPES } from '../env';

export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getNextVerb = (verbs, shownVerbs) => {
  let actualVerbs = verbs;
  if (shownVerbs.length && shownVerbs.length !== verbs.length) {
    actualVerbs = verbs.filter(({ verb }) => !shownVerbs.includes(verb))
  }
  return actualVerbs[getRandomInt(actualVerbs.length)];
};

export const generateRandomVisibleType = () => TYPES[getRandomInt(TYPES.length)];
