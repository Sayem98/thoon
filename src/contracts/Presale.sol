/**
 *Submitted for verification at BscScan.com on 2024-03-09
*/

/**
 *Submitted for verification at BscScan.com on 2024-03-09
*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

interface IERC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function decimals() external view returns (uint8);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

}

contract Presale {
    
    IERC20 immutable public token ;

    bool public paused; 

    address public owner;

    uint256 public perDollarPrice; 

    uint256 public Usdtobnb;

    mapping (address => mapping (address => bool)) public referral;

    

    uint public totalSold;
    uint public perticipents;

    modifier onlyOwner {
        require(owner == msg.sender,"Caller must be Ownable!!");
        _;
    }

    constructor(uint256 _price,address _presaleToken , uint _perUsdtobnb){
        owner = msg.sender;
        perDollarPrice = _price;
        token = IERC20(_presaleToken);
        Usdtobnb = _perUsdtobnb;

    }
    
    //per dollar price in decimals
    function setTokenPrice(uint _price) public onlyOwner{
        perDollarPrice = _price;
    }

    //per dollar price in decimals of bnb
    function setbnbPrice(uint _price) public onlyOwner{
        Usdtobnb = _price;
    }

    function setPause(bool _value) public onlyOwner{
        paused = _value;
    }

    function buyFromNative(address ref) public payable {

        require(!paused,"Presale is Paused!!");

        uint check = 1;   

        if(ref == address(0) || ref == msg.sender || referral[msg.sender][ref]){}
        else{
            referral[msg.sender][ref] = true;
            check = 2;
        }

        uint value = msg.value;

        uint equaltousd = value* Usdtobnb;

        uint multiplier = (perDollarPrice * equaltousd)/(1000000000000000000*10**18);

        token.transfer(msg.sender, multiplier);
        totalSold += multiplier;
        perticipents++;

        if(check == 2){
            uint per5 = ( value * 10 ) / 100;
            uint per95 = ( value * 90 ) / 100;
            payable(ref).transfer(per5);
            payable(owner).transfer(per95);
        }
        else{
            payable(owner).transfer(value);
        }

    }

    function RescueFunds() public onlyOwner {
        payable(msg.sender).transfer( address(this).balance );
    }

    function RescueTokens(IERC20 _add,uint _amount,address _recipient) public onlyOwner{
        _add.transfer(_recipient,_amount);
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }

}