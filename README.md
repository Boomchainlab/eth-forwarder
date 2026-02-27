# ETH Forwarder - All-in-One

This project contains a smart contract that **automatically forwards any ETH it receives** to a specified recipient address.

---

## Contract: `EthForwarder.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract EthForwarder {
    address payable public recipient;

    constructor(address payable _recipient) {
        recipient = _recipient;
    }

    receive() external payable {
        _forward();
    }

    fallback() external payable {
        _forward();
    }

    function _forward() internal {
        uint256 balance = address(this).balance;
        if (balance > 0) {
            (bool sent, ) = recipient.call{value: balance}("");
            require(sent, "Forward failed");
        }
    }

    function changeRecipient(address payable _recipient) external {
        recipient = _recipient;
    }
}
