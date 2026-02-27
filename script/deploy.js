import { ethers } from "hardhat";

async function main() {
  const TARGET_ADDRESS = "0xFfb6505912FCE95B42be4860477201bb4e204E9f"; // Receiver address
  const Forwarder = await ethers.getContractFactory("EthForwarder");
  const forwarder = await Forwarder.deploy(TARGET_ADDRESS);

  await forwarder.deployed();
  console.log("EthForwarder deployed to:", forwarder.address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
