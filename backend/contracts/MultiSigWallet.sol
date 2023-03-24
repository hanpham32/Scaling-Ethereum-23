pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract MultiSigWallet {

    using SafeMath for uint256;
    using Address for address;

    address[] private _owners; // superusers
    uint256 private _required;

    // a transaction
    struct Transaction {
        address destination;
        uint256 amount;
        bytes data;
        bool executed;
    }

    mapping(uint256 => Transaction) public transaction; // record of transactions
    mapping(uint256 => mapping(address => bool)) public confirmations;
    uint256 public transactionCount; // # of transactions made

}