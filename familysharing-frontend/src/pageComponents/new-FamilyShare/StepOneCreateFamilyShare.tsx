
import Image from "next/image";
import { Login } from "@mui/icons-material";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import StepArrowsIcons from "./StepArrowIcons";

// Interfaces
import { FamilyShareStepProps } from "@/interfaces/FamilyShareStepProps";

function StepOneCreateFamilyShare(props: FamilyShareStepProps) {
    console.log(props.currentStep);
    return (
      <div className="flex flex-col h-128 bg-white rounded-xl relative">
        <div className="flex p-8 border-b-2">
          <Image
            src='icons/1Icon.svg'
            alt='step 1'
            width={30}
            height={30}
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-[#1B2C5D]">Connect Wallet</h2>
            <p className="text-[#1B2C5D]">The connected wallet will pay the network fees for the Safe creation.</p>
          </div>
        </div>
        <div className="grow flex flex-col justify-center items-center">
          <Login className="w-12 h-12 my-8"/>
          <div className="mb-8">
            <ConnectButton />
          </div> 
        </div>
        <StepArrowsIcons currentStep={props.currentStep} setCurrentStep={props.setCurrentStep}/>
      </div>
    )
}

export default StepOneCreateFamilyShare