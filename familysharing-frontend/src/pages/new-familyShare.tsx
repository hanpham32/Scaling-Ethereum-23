import { useAccount } from "wagmi";
import { useState, useEffect } from "react";

// Components
import Navbar from "../components/navbar";
import StepOneCreateFamilyShare from "@/pageComponents/new-FamilyShare/StepOneCreateFamilyShare";
import StepTwoCreateFamilyShare from "@/pageComponents/new-FamilyShare/StepTwoCreateFamilyShare";
import StepThreeCreateFamilyShare from "@/pageComponents/new-FamilyShare/StepThreeCreateFamilyShare";

function NewFamilyShare() {
  const [createFamilyShareStep, setCreateFamilyShareStep] = useState(1);
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      setCreateFamilyShareStep(2);
    }
  }, [isConnected]);

  function setCurrentStep(step: number) {
    setCreateFamilyShareStep(step)
  }
  
  const createFamilyShareCard = determineCardToRender();

  function determineCardToRender() {
    if (createFamilyShareStep === 1) {
      return (<StepOneCreateFamilyShare currentStep={createFamilyShareStep} setCurrentStep={setCurrentStep}/>);
    } else if (createFamilyShareStep === 2) {
      return (<StepTwoCreateFamilyShare currentStep={createFamilyShareStep} setCurrentStep={setCurrentStep}/>);
    } else if (createFamilyShareStep === 3) {
      return (<StepThreeCreateFamilyShare currentStep={createFamilyShareStep} setCurrentStep={setCurrentStep}/>)
    } else {
      return (
        <div>
          <div className="flex items-center justify-center h-128 bg-white rounded-xl relative">
            <h1 className="text-3xl font-bold text-[#1B2C5D] mb-6">Under construction, come back soon!</h1>
          </div>
        </div>
      )
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
