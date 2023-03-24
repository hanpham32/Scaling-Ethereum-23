import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import { Login, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

// Components
import Navbar from "../../components/navbar";
type FamilyShareStepProps = {
  currentStep: number
  setCurrentStep: (step: number) => void
}


function StepArrowsIcons(props: FamilyShareStepProps) {

  const currentStep = props.currentStep;

  return(
    <div className="flex gap-4 absolute bottom-6 right-6">
      <button onClick={() => props.setCurrentStep(currentStep - 1)}>
        <ArrowBackIosNew className="w-8 h-8"/>
      </button>
      <button onClick={() => props.setCurrentStep(currentStep + 1)}>
        <ArrowForwardIos className="w-8 h-8"/>
      </button>
    </div>
  )
}

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
          <h2 className="text-2xl font-bold text-[#1B2C5D]">Name</h2>
          <p className="text-[#1B2C5D]">A name for your FamilyShare</p>
        </div>
      </div>
      <div className="grow flex flex-col justify-center p-8">
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


function NewFamilyShare() {
  const [createFamilyShareStep, setCreateFamilyShareStep] = useState(1);
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      setCreateFamilyShareStep(2);
    }
  }, [isConnected]);

  const createFamilyShareCard = determineCardToRender();

  function setCurrentStep(step: number) {
    setCreateFamilyShareStep(step)
  }
  
  function determineCardToRender() {
    if (createFamilyShareStep === 1) {
      return (<StepOneCreateFamilyShare currentStep={1} setCurrentStep={setCurrentStep}/>);
    } else if (createFamilyShareStep === 2) {
      return (<StepTwoCreateFamilyShare currentStep={2} setCurrentStep={setCurrentStep}/>);
    } 
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
        <div className="items-center max-w-7xl m-auto">
          <div className='px-6 py-16'>
            <h1 className="text-3xl font-bold text-[#1B2C5D] mb-6">Create new FamilyShare</h1>
            {createFamilyShareCard}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewFamilyShare;
