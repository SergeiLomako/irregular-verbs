import Dexie from 'dexie';

const db = new Dexie('verbs');
db.version(1).stores({
  sounds: 'verb, blob'
});

export default db;
