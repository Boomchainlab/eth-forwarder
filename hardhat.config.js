import "@nomicfoundation/hardhat-toolbox";

const MAINNET_URL = "https://eth-mainnet.g.alchemy.com/v2/mEaeaviMZAJ1PVDZWrWWdKyHqwbpcdpH";
const ANKR_RPC = "https://rpc.ankr.com/multichain/be37b14c1896485857f04eccd8ae89a9cf3b6f09b4c09f58b6adbfd35a548ef3";
// Don’t commit your private key — use an .env file
const PRIVATE_KEY = process.env.PRIVATE_KEY;

export default {
  solidity: "0.8.21",
  networks: {
    mainnet: {
      url: MAINNET_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    },
    ankr: {
      url: ANKR_RPC,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
