// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MoonshooterNFT is
    AccessControlEnumerable,
    ERC1155Pausable,
    ERC1155Burnable
{
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdTracker;

    modifier onlyMinter {
        require(hasRole(MINTER_ROLE, msg.sender), "MoonshooterNFT: must have minter role");
        _;
    }

    modifier onlyPauser {
        require(hasRole(MINTER_ROLE, msg.sender), "MoonshooterNFT: must have pauser role");
        _;
    }

    /**
     * @dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE`, and `PAUSER_ROLE`
     * to the account that deploys the contract.
     */
    constructor(string memory uri) ERC1155(uri) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
        _setupRole(PAUSER_ROLE, msg.sender);
    }

    /**
     * @dev Creates new tokens for `to`, of token type `id`.
     * Requirements:
     * - the caller must have the `MINTER_ROLE`.
     */
    function mintShip(address to) public onlyMinter {
        _mint(to, _tokenIdTracker.current(), 1, "");
        _tokenIdTracker.increment();
    }

    /**
     * @dev Creates new tokens for `to`, of token type `id`.
     * Requirements:
     * - the caller must have the `MINTER_ROLE`.
     */
    function mintShips(address to, uint256 amount) public onlyMinter {
        uint256[] memory ids = new uint256[](amount);
        uint256[] memory amounts = new uint256[](amount);

        for (uint256 i = 0; i < amount; i++) {
            amounts[i] = 1;
            ids[i] = _tokenIdTracker.current();
            _tokenIdTracker.increment();
        }

        _mintBatch(to, ids, amounts, "");
    }

    /**
     * @dev Pauses all token transfers.
     * Requirements:
     * - the caller must have the `PAUSER_ROLE`.
     */
    function pause() external onlyPauser {
        _pause();
    }

    /**
     * @dev Unpauses all token transfers.
     * Requirements:
     * - the caller must have the `PAUSER_ROLE`.
     */
    function unpause() external onlyPauser {
        _unpause();
    }

    function tokensOwned(address account) external view returns (uint256[] memory) {
        uint256 numTokens = 0;
        for (uint256 i = 0; i < _tokenIdTracker.current(); i++) {
            if (balanceOf(account, i) > 0) {
                numTokens++;
            }
        }

        uint256[] memory tokenIds = new uint256[](numTokens);
        uint256 counter = 0;
        for (uint256 i = 0; i < _tokenIdTracker.current(); i++) {
            if (balanceOf(account, i) > 0) {
                tokenIds[counter] = i;
                counter++;
            }
        }

        return tokenIds;
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(AccessControlEnumerable, ERC1155)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal override(ERC1155, ERC1155Pausable) {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}
