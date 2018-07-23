pragma solidity ^0.4.19;

contract Owned {
    address public ownerAddr;

    modifier onlyOwner(){
        require(msg.sender == ownerAddr);
        _;
    }

    function Owned() internal {
        ownerAddr = msg.sender;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        require(_newOwner != address(0));

        ownerAddr = _newOwner;
    }

}
