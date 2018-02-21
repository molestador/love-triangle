/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let c = 0;
  for (let i = 0; i < preferences.length; i++) {
    for (let j = 0; j < preferences.length; j++) {
      for (let k = 0; k < preferences.length; k++) {
        if (i === preferences[j] - 1 && j === preferences[k] - 1 && k === preferences[i] - 1) {
          c++;
        }
      }
    }
  }
  return Math.floor(c / 3);
}
