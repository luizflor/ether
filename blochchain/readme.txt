# run the following commands
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum

# first run
run the command ./seed-blockchain-first.sh
after the message Welcome to the Geth JavaScript console!
enter the following command
personal.newAccount("password")

copy the account should be something like 
"0x793ef7f776359d992625a4452ef1cf6f676bd536"

#then run the command
./seed-blockchain.sh
and change the account in the lab-seed.json and in the file start-blockchain.sh

#second run
run the command./start-blockchain.sh

it will generate DAG wait till it says Done generating DAG for epoch 0
then it will start mining