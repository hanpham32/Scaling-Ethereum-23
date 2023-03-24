import Image from "next/image";
import { TextField } from "@mui/material";
import StepArrowsIcons from "./StepArrowIcons";

// Interfaces
import { FamilyShareStepProps } from "@/interfaces/FamilyShareStepProps";

function StepThreeCreateFamilyShare(props: FamilyShareStepProps) {
    console.log(props.currentStep);
    return (
      <div className="flex flex-col h-128 bg-white rounded-xl relative">
        <div className="flex p-8 border-b-2">
          <Image
            src='icons/3Icon.svg'
            alt='step 1'
            width={30}
            height={30}
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-[#1B2C5D]">Owners & Confirmations</h2>
            <p className="text-[#1B2C5D]">Set the primary owners of this FamilyShare</p>
          </div>
        </div>
        <div className="grow flex flex-col justify-center p-8">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label htmlFor='Name' className="mb-2">
                Name
              </label>
              <TextField id="Name" label="Owner name" variant="outlined" className="max-w-sm mb-8"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor='Name' className="mb-2">
                Address
              </label>
              <TextField id="Name" label="Owner address" variant="outlined" className="max-w-md mb-8"/>
            </div>
          </div>
          <p className="mb-2">Add another owner</p>
          <div className="flex">
            <p>Any transaction requires the confirmation of: </p>
            <p>out of X owners(s)</p>
          </div>
        </div>
        <StepArrowsIcons currentStep={props.currentStep} setCurrentStep={props.setCurrentStep}/>
      </div>
    )
}

export default StepThreeCreateFamilyShare