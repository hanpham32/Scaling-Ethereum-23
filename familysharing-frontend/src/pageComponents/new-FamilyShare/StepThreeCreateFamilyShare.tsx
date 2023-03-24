import Image from "next/image";
import { useState } from "react";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Components
import StepArrowsIcons from "./StepArrowIcons";

// Interfaces
import { FamilyShareStepProps } from "@/interfaces/FamilyShareStepProps";

function PrimaryOwnersInput() {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex flex-col">
        <label htmlFor='Name' className="mb-2">
          Name
        </label>
        <TextField id="Name" label="Owner name" variant="outlined" className="max-w-sm"/>
      </div>
      <div className="flex flex-col">
        <label htmlFor='Name' className="mb-2">
          Address
        </label>
        <TextField id="Name" label="Owner address" variant="outlined" className="max-w-md"/>
      </div>
  </div>
  )
}

function SelectConfirmations() {
  const [confirmations, setConfirmations] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setConfirmations(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-autowidth-label">{confirmations}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={confirmations}
          onChange={handleChange}
          autoWidth
          label="*"
        >
          <MenuItem value={1}>1</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function StepThreeCreateFamilyShare(props: FamilyShareStepProps) {  
  const [numberOfOwners, setNumberOfOwners] = useState(1);

  console.log(numberOfOwners);
  console.log(props.currentStep);

  const OwnersInputs = () => {
    const inputs = []
    for (let i = 1; i <= numberOfOwners; i++) {
      inputs.push(
          <PrimaryOwnersInput key={i}/>)
    }
    return <>{inputs}</>
  }

    return (
      <div className="flex flex-col min-h-128 bg-white rounded-xl relative">
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
        <div className="grow flex flex-col p-8">
          {OwnersInputs()}
          <button className="flex items-center mb-12" onClick={() => setNumberOfOwners((prev) => prev + 1)}>
            <Image
              src='icons/plusIcon.svg'
              alt='step 1'
              width={30}
              height={30}
            />
            <p className="text-lg ml-2 text-[#00CBCB]">Add another owner</p>
          </button>
          <div className="flex items-center">
            <p>Any transaction requires the confirmation of: </p>
            <SelectConfirmations />
            <p>out of X owners(s)</p>
          </div>
        </div>
        <StepArrowsIcons currentStep={props.currentStep} setCurrentStep={props.setCurrentStep}/>
      </div>
    )
}

export default StepThreeCreateFamilyShare