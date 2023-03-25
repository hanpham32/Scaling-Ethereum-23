import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Components
import StepArrowsIcons from "./StepArrowIcons";

// Interfaces
import { FamilyShareStepProps } from "@/interfaces/FamilyShareStepProps";

interface Props {
  index: number;
}

function PrimaryOwnersInput({ index }: Props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex flex-col">
        <label htmlFor={`Name${index}`} className="mb-2">
          Name
        </label>
        <TextField
          id={`Name${index}`}
          label="Owner name"
          variant="outlined"
          className="max-w-sm"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor={`Address${index}`} className="mb-2">
          Address
        </label>
        <TextField
          id={`Address${index}`}
          label="Owner address"
          variant="outlined"
          className="max-w-md"
          value={address}
          onChange={handleAddressChange}
        />
      </div>
    </div>
  );
}


function StepThreeCreateFamilyShare(props: FamilyShareStepProps) {  
  const [numberOfOwners, setNumberOfOwners] = useState(1);

  console.log(numberOfOwners);

  function createOwnerInputsList() {
    const inputs = []
    for (let i = 1; i <= numberOfOwners; i++) {
      inputs.push(
          <PrimaryOwnersInput key={i} index={i}/>)
    }
    return <>{inputs}</>
  }

  const ownersInputList = createOwnerInputsList();

  function createConfirmationLists() {
    const options = []
    for (let i = 1; i <= numberOfOwners; i++) {
      options.push(
        <option key={`confirmation ${i}`} value={i}>{i}</option>)
    }
    return <>{options}</>
  }

  const optionsList = createConfirmationLists();

  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col bg-white rounded-xl relative">
      <div className="flex p-8 border-b-2">
        <Image
          src='icons/3Icon.svg'
          alt='step 1'
          width={30}
          height={30}
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-primary-color">Owners & Confirmations</h2>
          <p className="text-primary-color">Set the primary owners of this FamilyShare</p>
        </div>
      </div>
      <div className="grow flex flex-col p-8">
        
        <form onSubmit={handleSubmit}>
          {ownersInputList}
          <button className="flex items-center mb-12" onClick={() => setNumberOfOwners((prev) => prev + 1)}>
            <Image
              src='icons/plusIcon.svg'
              alt='step 1'
              width={30}
              height={30}
            />
            <p className="text-lg ml-2 text-[#00CBCB]">Add another owner</p>
          </button>
          <div className="flex items-center mb-8">
            <p className="mr-2">Any transaction requires the confirmation of: </p>
              <div className="max-w-xs">
                <select id="example1" className="block w-full rounded-md border-primary-color border-2 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                  {optionsList}
                </select>
              </div>
            <p className="ml-2">out of X owners(s)</p>
          </div>
            <button type="submit" className="py-2 w-56 bg-[#1B2C5D] font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
              Create FamilyShare
            </button>
        </form>
      
      </div>
      {/* <StepArrowsIcons currentStep={props.currentStep} setCurrentStep={props.setCurrentStep}/> */}
    </div>
  )
}

export default StepThreeCreateFamilyShare