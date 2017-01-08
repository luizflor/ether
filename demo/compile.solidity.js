var fs = require('fs');
var solc = require('solc');
var Web3 = require('web3');
var ethereumUrl = "http://localhost:8080"
module.exports = {
    compileSolidity: function (path, inputfile, contract) {
        var source = fs.readFileSync(path+"/"+inputfile, 'utf-8');
        var compile = solc.compile(source, 1);

        for(var contractName in compile.contracts) {
            delete(compile.contracts[contractName].assembly);
        }
        var abi = compile.contracts[contract]['interface'];
        var bin = compile.contracts[contract]['bytecode'];

        fs.writeFileSync(path+"/"+contract+".abi", JSON.stringify(abi, null, 4), 'utf8');
        fs.writeFileSync(path+"/"+contract+".bin", JSON.stringify(bin, null, 4), 'utf8');
    },
    deploySolidity : function(binFile, abiFile, contract) {
        var web3 = new Web3(new Web3.providers.HttpProvider(ethereumUrl));
        var account= web3.eth.accounts[0];
        web3.eth.defaultAccount = account;
        var deployAccount ="0x37344f1d790f4ae23797245c3132f784ff213957";
        console.log("Account: "+ account);
       

        var abiString  = fs.readFileSync(abiFile,"utf8");
        var bin = fs.readFileSync(binFile, "utf8");
        var abi = JSON.parse(JSON.parse(abiString));

        var Contract = web3.eth.contract(abi);
         var r =web3.personal.unlockAccount(account,"password", 5);

        var deployed = Contract.new({
            from: web3.eth.accounts[account],
            data: bin,
            gas: 1000000,
            gasPrice: 1
        }, (error,result) =>
        {   
            if(error){
                console.log(error);
                process.exit(1);
            }
            console.log("Transaction: "+result.transactionHash);
            console.log("Contract Addess: "+result.address);
            console.log("done");
        });     
    }
};