const path = require('path')
const currentPath = __dirname


console.log(currentPath)
console.log(path.join(currentPath, '..')) // before 1 folter
console.log(path.join(currentPath, '..', '..')) // before 2 folter
console.log(path.join(currentPath, 'nested'))
console.log(path.join(currentPath, '..', 'restApi')) // before 1 folter and then go to restApi folder