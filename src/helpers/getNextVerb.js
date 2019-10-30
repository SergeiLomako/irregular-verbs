
export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const getNextVerb = (verbs, shownVerbs) => {
  let actualVerbs = verbs;
  if (shownVerbs.length && shownVerbs.length !== verbs.length) {
    actualVerbs = verbs.filter(({ title }) => !shownVerbs.includes(title))
  }
  return actualVerbs[getRandomInt(actualVerbs.length)];
};
