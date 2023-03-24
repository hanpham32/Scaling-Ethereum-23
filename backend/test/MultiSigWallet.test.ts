import { expect } from "chai";
import { ethers } from "hardhat";
import { MultiSigWallet } from "../typechain-types/MultiSigWallet";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { ethers } from "ethers";

describe("MultiSigWallet", () => {
    let MultiSigWallet;
    let multiSigWallet: MultiSigWallet;
    let owner1: SignerWithAddress;
    let owner2: SignerWithAddress;
    let owner3: SignerWithAddress;
    let nonOwner: SignerWithAddress;

    beforeEach(async () => {
        MultiSigWallet = await ethers.getContractFactory("MultiSigWallet");
        [owner1, owner2, owner3, nonOwner] = await ethers.getSigners();
        multiSigWallet = (await MultiSigWallet.deploy([owner1.address, owner2.address, owner3.address], 2)) as MultiSigWallet;
        await multiSigWallet.deployed();
    });

    describe("Deployment", () => {
        it("should set the correct owners and required confirmations", async () => {
          expect(await multiSigWallet.getOwners()).to.deep.equal([owner1.address, owner2.address, owner3.address]); 
          expect(await multiSigWallet.required()).to.equal(2);
        });
    });
})