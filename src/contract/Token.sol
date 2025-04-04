// use Remix IDE
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CipherCoin is ERC20, Ownable {
    // Set the initial supply to 1,000,000 tokens with 18 decimals
    uint256 private constant INITIAL_SUPPLY = 1_000_000 * 10 ** 18;

    constructor() ERC20("CipherCoin", "CPC") Ownable(msg.sender) {
        // Mint the initial supply to the contract deployer
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    // Allow the owner to mint additional tokens if needed
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Allow anyone to burn their own tokens
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
