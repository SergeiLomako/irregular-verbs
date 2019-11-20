import { getFromDatabase, addToDatabase } from './db';
import { fetchAudio } from './files';

export const getSound = async (verb) => {
  let blob;
  const existSound = await getFromDatabase(verb);
  if(existSound) {
    blob = existSound.blob
  } else {
    blob = await fetchAudio(verb);
    await addToDatabase(verb, blob);
  }
  return blob;
};

export const rewriteSound = async (verb) => {
  const blob = await fetchAudio(verb);
  await addToDatabase(verb, blob);
  return blob;
};

