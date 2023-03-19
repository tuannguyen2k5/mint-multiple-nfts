pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract NFT is ERC721 {
    constructor() ERC721("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}