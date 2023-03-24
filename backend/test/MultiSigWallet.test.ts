import { expect } from "chai";
import { ethers } from "hardhat";
import { MultiSigWallet } from "../typechain-types/MultiSigWallet";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";
import { ContractFactory } from "ethers";

describe("MultiSigWallet", () => {
    /* VARIABLES DECLARATION */
    let MultiSigWallet: ContractFactory;
    let multiSigWallet: MultiSigWallet;
    let owner1: SignerWithAddress;
    let owner2: SignerWithAddress;
    let owner3: SignerWithAddress;
    let nonOwner: SignerWithAddress;

    /* TESTS */
    beforeEach(async () => {
        MultiSigWallet = await ethers.getContractFactory("MultiSigWallet"); // Get the contract factory
        [owner1, owner2, owner3, nonOwner] = await ethers.getSigners(); // Get the signers
        multiSigWallet = (await MultiSigWallet.deploy([owner1.address, owner2.address, owner3.address], 2)) as MultiSigWallet; // Deploy the contract
        await multiSigWallet.deployed(); // Wait for the contract to be deployed
    });

    // Test the deployment
    describe("Deployment", () => {
        it("should set the correct owners and required confirmations", async () => {
          expect(await multiSigWallet.getOwners()).to.deep.equal([owner1.address, owner2.address, owner3.address]); 
          expect(await multiSigWallet.required()).to.equal(2);
        });
    });

    // Test the transactions
    describe("Transactions", () => {
        let transactionId: number;
        let destination: string;
        let amount: BigNumber;
        let data: string;

        beforeEach(async () => {
            destination = nonOwner.address;
            amount = ethers.utils.parseEther("1");
            data = "0x";
            transactionId = await (await multiSigWallet.submitTransaction(destination, amount, data)).value.toNumber();
        });

        it("should submit a transaction and emit a Submission event", async () => {
            expect(transactionId).to.equal(0);
            await expect(multiSigWallet.submitTransaction(destination, amount, data)).to.emit(multiSigWallet, "Submission").withArgs(1);
        });

        it("should confirm a transaction and emit a Confirmation event", async () => {
            await multiSigWallet.connect(owner2).confirmTransaction(transactionId);
            expect(await multiSigWallet.confirmations(transactionId, owner2.address)).to.be.true;
            await expect(multiSigWallet.connect(owner3).confirmTransaction(transactionId)).to.emit(multiSigWallet, "Confirmation").withArgs(owner3.address, transactionId);
        });
    });
})