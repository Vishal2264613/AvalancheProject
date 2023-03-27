// The configuration specifies where the contract artifacts are placed in the project, and the network the contract is deployed to.
// Specify Solidity version, path for the contract artifacts, and network information for Fuji.
// Before deployment, include 2 environment variables in .env →
// Navigate to the MetaMask Wallet extension and copy your private key. Set it to the PRIVATE_KEY variable.
// Next, visit the QuickNode dashboard and copy the HTTP provider URL for your endpoint. Paste the URL into your .env file to connect // to the C-Chain. This chain is an instance of the Ethereum Virtual Machine that allows for creating smart contracts with the
// C-Chain’s API.

// hardhat.config.js

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.6",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    fuji: {
      url: process.env.QUICKNODE_URL,
      accounts: [`0x` + process.env.PRIVATE_KEY],
      chainId: 43113,
    },
  },
};
