var compile = require('./compile.solidity');
compile.compileSolidity("./contracts","SimpleStorage.sol","SimpleStorage");
console.log("compiled...");
compile.deploySolidity("./contracts/SimpleStorage.bin","./contracts/SimpleStorage.abi","SimpleStorage");
console.log("deployed...");