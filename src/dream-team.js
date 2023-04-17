const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  if (!Array.isArray(members)) return false

  let result = ''
  for (let name of members) {
    if (typeof name === 'string') {
      if (name[0] === ' ') {
        let i = 0
        while (name[i] === ' ') {
          if (name[i+1] !== ' ') {
            result += name[i+1]
            break
          }

          i++
        }
      } else result += name[0] 
    }
  }

  return result.toUpperCase() 
                  .split('')
                  .sort()
                  .join('')
}

module.exports = {
  createDreamTeam
};
