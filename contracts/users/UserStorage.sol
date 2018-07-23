pragma solidity ^0.4.19;

import "../helpers/BaseStorage.sol";

contract UserStorage is BaseStorage{

    struct Profile{
        uint id;
        bytes32 username;
    }
    
    address ownerAddr;
    address controllerAddr;

    function setControllerAddr(address _controllerAddr) public onlyOwner{
        controllerAddr = _controllerAddr;
    }

    mapping(uint => Profile) public profiles;

    uint latestUserId = 0;

    function createUser(bytes32 _username) public onlyController returns(uint) {
        latestUserId++;
        profiles[latestUserId] = Profile(latestUserId,_username);
        return latestUserId;
    }

}