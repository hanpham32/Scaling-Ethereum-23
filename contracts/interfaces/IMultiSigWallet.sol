pragma solidity ^0.8.0;

/**
 * @title IMultiSigWallet.
 * @dev Interface for MultiSigWallet.
 */
interface IMultiSigWallet {
    /// @dev Submit a new transaction.
    /// @param destination Transaction target address.
    /// @param amount Transaction ether value.
    /// @param data Transaction data payload.
    function submitTransaction(
        address destination, 
        uint amount, 
        bytes calldata data) external returns (uint transactionId);

    /// @dev Confirm a transaction.
    function confirmTransaction(uint transactionId) external;

    /// @dev Revoke a confirmation for a transaction.
    /// @param transactionId Transaction ID.
    function revokeConfirmation(uint transactionId) external;

    /// @dev Execute a confirmed transaction.
    /// @param transactionId Transaction ID.
    function executeTransaction(uint transactionId) external payable;

    /// @dev Returns the confirmation status of a transaction.
    /// @param transactionId Transaction ID.
    /// @return count Confirmation count.
    function getConfirmationCount(uint transactionId) external view returns (uint count);

    /// @dev Returns the total number of transactions after filters are applied.
    /// @param pending Include pending transactions.
    /// @param executed Include executed transactions.
    /// @return count Total transaction count.
    function getTransactionCount(
        bool pending, 
        bool executed) external view returns (uint count);

    /// @dev Returns list of owners.
    /// @return owners List of owner addresses.
    function getOwners() external view returns (address[] memory);

    /// @dev Returns array with owner addresses, which confirmed transaction.
    /// @param transactionId Transaction ID.
    /// @return confirmations Returns array of owner addresses that confirmed the transaction.
    function getConfirmations(uint transactionId) external view returns (address[] memory);

    /// @dev Returns list of transaction IDs in defined range.
    /// @param from Index start position of transaction array.
    /// @param to Index end position of transaction array.
    /// @param pending Include pending transactions.
    /// @param executed Include executed transactions.
    /// @return transactionIds Returns array of transaction IDs.
    function getTransactionIds(uint from, uint to, bool pending, bool executed) external view returns (uint[] memory);

    /// @dev Returns details of a transaction by ID.
    /// @param transactionId Transaction ID.
    /// @return destination Transaction target address.
    /// @return value Transaction ether value.
    /// @return data Transaction data payload.
    /// @return executed Transaction status.
    function getTransaction(uint transactionId) external view returns (address destination, uint value, bytes memory data, bool executed);

    /// @dev Holds transaction data.
    struct Transaction {
        address destination;
        uint amount;
        bytes data;
        bool executed;
    }
}