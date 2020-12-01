// linking file system
const fs = require('fs');
// linking file path
const path = require('path');

//filtering zookeepers
function filterByQuery(query, zookeepers) {
  let filteredResults = zookeepers;

  if (query.age) {
    filteredResults = filteredResults.filter(zookeeper => zookeeper.age === query.age);
  }
  if (query.favoriteAnimal) {
    filteredResults = filteredResults.filter(
      zookeeper => zookeeper.favoriteAnimal === query.favoriteAnimal
    );
  }
  if (query.name) {
    filteredResults = filteredResults.filter(zookeeper => zookeeper.name === query.name);
  }
  return filteredResults;
}


// filtering zookeepers by id
function findById(id, zookeepers) {
  const result = zookeepers.filter(zookeeper => zookeeper.id === id)[0];
  return result;
}

// adding new zookeeper
function createNewZookeeper(body, zookeepers) {
  const zookeeper = body;
  zookeepers.push(zookeeper);
  fs.writeFileSync(
    path.join(__dirname, '../data/zookeepers.json'),
    JSON.stringify({ zookeepers }, null, 2)
  );
  return zookeeper;
}

// checking if all input query requests are satisfied. 
function validateZookeeper(zookeeper) {
  if (!zookeeper.name || typeof zookeeper.name !== 'string') {
    return false;
  }
  if (!zookeeper.age || typeof zookeeper.age !== 'number') {
    return false;
  }
  if (!zookeeper.favoriteAnimal || typeof zookeeper.favoriteAnimal !== 'string') {
    return false;
  }
  return true;
}


// export to allow fuctions to be available for the rest of the project. 
module.exports = {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
};
