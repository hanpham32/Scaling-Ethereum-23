import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

async function main() {
  let owner1 = `0x6E2EfaAb4aFE34e3b6AA7db9fAFaF822508AAeC9`;
  let owner2 = `0xe720DF46FA5d85C6b481559F29F8E0264272A9fc`;
  // [owner1, owner2] = await ethers.getSigners();
  const list_owners= [
    owner1,
    owner2,
  ]
  const MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
  const wallet = await MultiSigWallet.deploy(list_owners, 2);

  await wallet.deployed();

  console.log (`deployd to ${wallet.address}`)

  // console.log(
    // `Lock with ${ethers.utils.formatEther(lockedAmount)}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
