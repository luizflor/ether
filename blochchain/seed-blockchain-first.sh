#!/bin/bash
geth --identity "luiz" --rpc --rpcport "8080" --rpccorsdomain "*"  --port "2402" --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "db,eth,net,web3" --networkid 1001201 --datadir "chains/devtest" --autodag --nat "any" console init lab-seed-first.json

#eth --datadir chains/devtest

