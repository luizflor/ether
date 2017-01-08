#!/bin/bash

geth --rpc --rpcaddr "0.0.0.0" --rpcport "8080" --rpccorsdomain "*" --datadir "chains/devtest" --port "2402" --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "db,eth,net,web3, personal" --networkid 1001201 --mine 2 --etherbase=0x8d529cd4e34aa205f29a210113cf3edc0bbdbaa1

#geth --datadir chains/devtest 
