import Image from "next/image";
import { TextField } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import StepArrowsIcons from "./StepArrowIcons";

// Interfaces
import { FamilyShareStepProps } from "@/interfaces/FamilyShareStepProps";

function StepTwoCreateFamilyShare(props: FamilyShareStepProps) {
    console.log(props.currentStep);
    return (
      <div className="flex flex-col h-128 bg-white rounded-xl relative">
        <div className="flex p-8 border-b-2">
          <Image
            src='icons/2Icon.svg'
            alt='step 1'
            width={30}
            height={30}
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-primary-color">Name</h2>
            <p className="text-primary-color">A name for your FamilyShare</p>
          </div>
        </div>
        <div className="grow flex flex-col p-8">
          <label htmlFor='Name' className="mb-2">
            Name of new FamilyShare
          </label>
          <TextField id="Name" label="My Family Share" variant="outlined" className="max-w-md mb-8"/>
          <p className="mb-2">The FamilyShare will be on:</p>
          <ConnectButton showBalance={false} accountStatus="avatar"/>
        </div>
        <StepArrowsIcons currentStep={props.currentStep} setCurrentStep={props.setCurrentStep}/>
      </div>
    )
}

export default StepTwoCreateFamilyShare