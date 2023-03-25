import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import LoginIcon from "@mui/icons-material/Login";
import { TextField } from "@mui/material";

// Components
import Navbar from "../../components/navbar";

function StepOneConnectWalletCard() {
  return (
    <div className="flex flex-col h-96 bg-white rounded-xl">
      <div className="flex p-8 border-b-2">
        <Image src="icons/1Icon.svg" alt="step 1" width={30} height={30} />
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-[#1B2C5D]">Connect Wallet</h2>
          <p className="text-[#1B2C5D]">
            The connected wallet will pay the network fees for the Safe
            creation.
          </p>
        </div>
      </div>
      <div className="grow flex flex-col justify-center items-center">
        <LoginIcon className="w-12 h-12 my-8" />
        <div className="mb-8">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

function StepTwoConnectWalletCard() {
  return (
    <div className="flex flex-col h-96 bg-white rounded-xl">
      <div className="flex content-center p-8 border-b-2">
        <Image src="icons/1Icon.svg" alt="step 1" width={30} height={30} />
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-[#1B2C5D]">
            Name your FamilyShare
          </h2>
        </div>
      </div>
      <div className="grow flex flex-col justify-center items-center">
        <TextField
          className="my-4"
          label="Family Wallet Name"
          defaultValue="My FamilySafe"
        />
        <TextField
          className="my-4"
          label="Parent Wallet Owner"
          defaultValue="Parent Name"
        />
        <div className="flex">
          <button className="my-4 mx-4 py-2 px-4 bg-[#1B2C5D] font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
            Submit
          </button>
        </div>
        <div className="mb-8"></div>
      </div>
    </div>
  );
}

function NewFamilyShare() {
  const { isConnected } = useAccount();
  console.log(isConnected);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
        <div className="items-center max-w-7xl m-auto">
          <div className="px-6 py-16">
            <h1 className="text-3xl font-bold text-[#1B2C5D] mb-6">
              Create new FamilyShare
            </h1>
            {!isConnected ? (
              <StepOneConnectWalletCard />
            ) : (
              <StepTwoConnectWalletCard />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFamilyShare;
