import db from '../db';

export const getFromDatabase = async (verb) => db.sounds.get(verb);

export const addToDatabase = (verb, blob) => db.sounds.put({ verb, blob });
