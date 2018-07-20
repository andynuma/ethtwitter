pragma solidity ^0.4.19;

contract UserStorage{

    struct Profile{
        uint id;
        bytes32 username;
    }

    mapping(uint => Profile) profiles;

    uint latestUserId = 0;

    function createUser(bytes32 _username) public returns(uint){
        
        latestUserId++;
        profiles[latestUserId] = Profile(latestUserId,_username);
        return latestUserId;
    }

}