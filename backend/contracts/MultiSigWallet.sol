pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

/// @title MultiSigWallet - A contract for a multi-signature wallet
/// based on the Gnosis multisig wallet at https://github.com/gnosis/MultiSigWallet/blob/master/contracts/MultiSigWallet.sol
contract MultiSigWallet {

    /* EVENTS */
    event Confirmation(address indexed sender, uint256 indexed transactionId); // event for confirming a transaction
    event Revocation(address indexed sender, uint256 indexed transactionId); // event for revoking a confirmation
    event Submission(uint256 indexed transactionId); // event for submitting a transaction
    event Execution(uint256 indexed transactionId); // event for executing a transaction
    event ExecutionFailure(uint256 indexed transactionId);  // event for executing a failed transaction
    event Deposit(address indexed sender, uint256 value);   // event for depositing ether
    event OwnerAddition(address indexed owner); // event for adding an owner
    event OwnerRemoval(address indexed owner);  // event for removing an owner
    event RequirementChange(uint256 required);  // event for changing the number of required confirmations

    using SafeMath for uint256; // use SafeMath library for uint256
    using Address for address;  // use Address library for address

    /* CONSTANTS */
    uint constant public MAX_OWNER_COUNT = 3; // max number of owners

    /* STORAGE */
    mapping (uint => Transaction) public transactions; // transaction data
    mapping (uint => mapping (address => bool)) public confirmations; // confirmations for transactions
    mapping (address => bool) public isOwner; // list of owner by bool
    address[] public owners;  // list of owners
    uint public required;  // number of required confirmations
    uint public transactionCount;  // number of transactions

    // Holds transaction data
    struct Transaction {
        address destination;
        uint256 amount;
        bytes data;
        bool executed;
    }

    /* MODIFIERS */
    modifier onlyWallet() {
        require(msg.sender == address(this), "Only wallet can call this function.");
        _;
    }

    // check if owner exists
    modifier ownerDoesNotExist(address owner) {
        require(!isOwner[owner], "Owner already exists.");
        _;
    }
    
    modifier ownerExists(address owner) {
        require(isOwner[owner], "Owner does not exist.");
        _;
    }

    // check if transaction exists
    modifier transactionExists(uint transactionId) {
        require(transactions[transactionId].destination != address(0), "Transaction does not exist.");
        _;
    }

    // check if transaction is confirmed
    modifier confirmed(uint transactionId, address owner) {
        require(confirmations[transactionId][owner], "Transaction is not confirmed by owner.");
        _;
    }

    modifier notConfirmed(uint transactionId, address owner) {
        require(!confirmations[transactionId][owner], "Transaction is already confirmed by owner.");
        _;
    }

    // check if transaction is executed
    modifier notExecuted(uint transactionId) {
        require(!transactions[transactionId].executed, "Transaction is already executed.");
        _;
    }

    // check if address is valid
    modifier notNull(address _address) {
        require(_address != address(0), "Address is null.");
        _;
    }

    // check if requirements are met
    modifier validRequirement(uint ownerCount, uint _required) {
        require(ownerCount <= MAX_OWNER_COUNT && _required <= ownerCount && _required != 0 && ownerCount != 0, "Invalid requirement.");
        _;
    }

    /// @dev Fallback function allows to deposit ether.
    fallback()
        external
        payable
    {
    }

    /// @dev Receive function to handle plain Ether transfers.
    receive()
        external
        payable
    {
        if (msg.value > 0)
            emit Deposit(msg.sender, msg.value);
    }

    /* PUBLIC FUNCTIONS */
    /// @dev Contract constructor sets initial owners and required number of confirmations.
    /// @param _owners List of initial owners.
    /// @param _required Number of required confirmations.
    constructor(address[] memory _owners, uint _required)
        validRequirement(_owners.length, _required)
    {
        for (uint i=0; i<_owners.length; i++) {
            require(!isOwner[_owners[i]] && _owners[i] != address(0), "Invalid owner."); // check if owner is valid or already exists
            isOwner[_owners[i]] = true; // set owner to true
        }
        owners = _owners; // set owners
        required = _required; // set required
    }

    /// @dev Allows to add a new owner. Transaction has to be sent by wallet.
    /// @param owner Address of new owner.
    function addOwner(address owner)
        public
        onlyWallet
        ownerDoesNotExist(owner)
        notNull(owner)
        validRequirement(owners.length + 1, required)
    {
        isOwner[owner] = true; // set owner to true
        owners.push(owner); // add owner to owners list
        emit OwnerAddition(owner); // emit event
    }

    /// @dev Allows to remove an owner. Transaction has to be sent by wallet.
    /// @param owner Address of owner.
    function removeOwner(address owner)
        public
        onlyWallet
        ownerExists(owner)
    {
        isOwner[owner] = false; // set owner to false
        for (uint i=0; i<owners.length - 1; i++)
            if (owners[i] == owner) {
                owners[i] = owners[owners.length - 1];
                break;
            }
        owners.pop(); // remove owner from owners list
        if (required > owners.length)
            changeRequirement(owners.length); // change requirement if required is greater than owners
        emit OwnerRemoval(owner); // emit event
    }

    /// @dev Allows to replace an owner with a new owner. Transaction has to be sent by wallet.
    /// @param owner Address of owner to be replaced.
    /// @param owner Address of new owner.
    function replaceOwner(address owner, address newOwner)
        public
        onlyWallet
        ownerExists(owner)
        ownerDoesNotExist(newOwner)
    {
        for (uint i=0; i<owners.length; i++)
            if (owners[i] == owner) {
                owners[i] = newOwner;
                break;
            }
        isOwner[owner] = false; // set owner to false
        isOwner[newOwner] = true; // set new owner to true
        emit OwnerRemoval(owner); // emit event
        emit OwnerAddition(newOwner); // emit event
    }

    /// @dev Allows to change the number of required confirmations. Transaction has to be sent by wallet.
    /// @param _required Number of required confirmations.
    function changeRequirement(uint _required)
        public
        onlyWallet
        validRequirement(owners.length, _required)
    {
        required = _required; // set required
        emit RequirementChange(_required); // emit event
    }

    /// @dev Allows an owner to submit and confirm a transaction.
    /// @param destination Transaction target address.
    /// @param amount Transaction ether value.
    /// @param data Transaction data payload.
    /// @return transactionId Transaction ID.
    function submitTransaction(address destination, uint256 amount, bytes memory data)
        public
        returns (uint transactionId)
    {
        transactionId = addTransaction(destination, amount, data); // add transaction
        confirmTransaction(transactionId); // confirm transaction
    }

    /// @dev Allows an owner to confirm a transaction.
    /// @param transactionId Transaction ID.
    function confirmTransaction(uint transactionId)
        public
        ownerExists(msg.sender)
        transactionExists(transactionId)
        notConfirmed(transactionId, msg.sender)
    {
        confirmations[transactionId][msg.sender] = true; // set confirmation to true
        emit Confirmation(msg.sender, transactionId); // emit event
        executeTransaction(transactionId); // execute transaction
    }

    /// @dev Allows an owner to revoke a confirmation for a transaction.
    /// @param transactionId Transaction ID.
    function revokeConfirmation(uint transactionId)
        public
        ownerExists(msg.sender)
        confirmed(transactionId, msg.sender)
        notExecuted(transactionId)
    {
        confirmations[transactionId][msg.sender] = false; // set confirmation to false
        emit Revocation(msg.sender, transactionId); // emit event
    }

    /// @dev Allows anyone to execute a confirmed transaction.
    /// @param transactionId Transaction ID.
    function executeTransaction(uint transactionId)
        public
        ownerExists(msg.sender)
        confirmed(transactionId, msg.sender)
        notExecuted(transactionId)
    {
        if (isConfirmed(transactionId)) {
            Transaction storage txn = transactions[transactionId]; // get transaction
            txn.executed = true; // set executed to true
            if (external_call(txn.destination, txn.amount, txn.data.length, txn.data))
                emit Execution(transactionId); // emit event
            else { // if external call fails
                emit ExecutionFailure(transactionId); // emit event
                txn.executed = false;
            }
        }
    }

    /// @dev external call to execute transaction
    /// @param destination Transaction target address.
    /// @param value Transaction ether value.
    /// @param dataLength Transaction data payload length.
    /// @param  data Transaction data payload.
    function external_call(address destination, uint value, uint dataLength, bytes memory data)
        internal
        returns (bool)
    {
        bool result;
        assembly {
            let x := mload(0x40)   // "Allocate" memory for output (0x40 is where "free memory" pointer is stored by convention)
            let d := add(data, 32) // First 32 bytes are the padded length of data, so exclude that
            result := call(
                sub(gas(), 34710),   // 34710 is the value that solidity is currently emitting
                                   // It includes callGas (700) + callVeryLow (3, to pay for SUB) + callValueTransferGas (9000) +
                                   // callNewAccountGas (25000, in case the destination address does not exist and needs creating)
                destination,
                value,
                d,
                dataLength,        // Size of the input (in bytes) - this is what fixes the padding problem
                x,
                0                  // Output is ignored, therefore the output size is zero
            )
        }
        return result;
    }

    /// @dev Returns the confirmation status of a transaction.
    /// @param transactionId Transaction ID.
    /// @return Confirmation status.
    function isConfirmed(uint transactionId)
        public
        view
        returns (bool)
    {
        uint count = 0;
        for (uint i = 0; i<owners.length; i++) {
            if (confirmations[transactionId][owners[i]])
                count += 1;
            if (count == required)
                return true;
        }
        return false;
    }

    /* Internal functions */

    /// @dev Adds a new transaction to the transaction mapping, if transaction does not exist yet.
    /// @param destination Transaction target address.
    /// @param amount Transaction ether value.
    /// @param data Transaction data payload.
    /// @return transactionId Transaction ID.
    function addTransaction(address destination, uint256 amount, bytes memory data)
        internal
        notNull(destination)
        returns (uint transactionId)
    {
        transactionId = transactionCount; // set transaction id
        transactions[transactionId] = Transaction({ // add transaction to mapping
            destination: destination,
            amount: amount,
            data: data,
            executed: false
        });
        transactionCount += 1; // increment transaction count
        emit Submission(transactionId); // emit event
    }

    /* Web3 call functions */

    /// @dev  Returns number of confirmations of a transaction.
    /// @param transactionId Transaction ID.
    /// @return count Number of confirmations.
    function getConfirmationCount(uint transactionId)
        public
        view
        returns (uint count)
    {
        for (uint i = 0; i < owners.length; i++)
            if (confirmations[transactionId][owners[i]])
                count += 1;
    }

    /// @dev Returns total number of transactions after filters are applied.
    /// @param pending Include pending transactions.
    /// @param executed Include executed transactions.
    /// @return count Total number of transactions after filters are applied.
    function getTransactionCount(bool pending, bool executed)
        public
        view
        returns (uint count)
    {
        for (uint i = 0; i < transactionCount; i++)
            if (pending && !transactions[i].executed || executed && transactions[i].executed)
                count += 1;
    }

    /// @dev Returns list of owners.
    /// @return List of owner addresses
    function getOwners()
        public
        view
        returns (address[] memory)
    {
        return owners;
    }

    /// @dev Returns array with owner addresses, which confirmed transaction.
    /// @param transactionId Transaction ID.
    /// @return _confirmations Array of owner addresses.
    function getConfirmations(uint transactionId)
        public
        view 
        returns (address[] memory _confirmations)
    {
        address[] memory confirmationsTemp = new address[](owners.length);
        uint count = 0;
        uint i;
        for (i = 0; i < owners.length; i++)
        {
            if (confirmations[transactionId][owners[i]])
            {
                confirmationsTemp[count] = owners[i];
                count += 1;
            }
            _confirmations = new address[](count);
            for (i = 0; i < count; i++)
            {
                _confirmations[i] = confirmationsTemp[i];
            }
        }
    }

    /// @dev Returns list of transaction IDs in defined range.
    /// @param from Index start position of transaction array.
    /// @param to Index end position of transaction array.
    /// @param pending Include pending transactions.
    /// @param executed Include executed transactions.
    /// @return _transactionIds array of transaction IDs.
    function getTransactionIds(uint from, uint to, bool pending, bool executed)
        public
        view
        returns (uint[] memory _transactionIds)
    {
        uint[] memory transactionIdsTemp = new uint[](transactionCount);
        uint count = 0;
        uint i;
        for (i = 0; i < transactionCount; i++)
            if (pending && !transactions[i].executed || executed && transactions[i].executed)
            {
                transactionIdsTemp[count] = i;
                count += 1;
            }
        _transactionIds = new uint[](to - from);
        for (i = from; i < to; i++)
            _transactionIds[i - from] = transactionIdsTemp[i]; // copy transaction ids to return array
    }
}