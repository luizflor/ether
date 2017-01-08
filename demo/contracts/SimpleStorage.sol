pragma solidity ^0.4.2;
contract SimpleStorage {
    uint storedData;

    function SimpleStorage(uint x){
        storedData = x;
    }

    function get() returns (uint retVal) {
        return storedData;
    }
}