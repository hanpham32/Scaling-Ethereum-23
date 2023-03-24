
import { useRouter } from "next/router";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

// Interfaces
import { FamilyShareStepProps } from "@/interfaces/FamilyShareStepProps";

function StepArrowsIcons(props: FamilyShareStepProps) {
    const router = useRouter();
    const currentStep = props.currentStep;

    function handleArrowClick(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.id === "back-button") {
        if (currentStep <= 1) {
            router.push('/onboarding')
        }
        props.setCurrentStep(currentStep - 1)
        } else {
        props.setCurrentStep(currentStep + 1)
        }
    }

    return(
        <div className="flex gap-4 absolute bottom-6 right-6">
        <button id="back-button" onClick={handleArrowClick}>
            <ArrowBackIosNew className="w-8 h-8"/>
        </button>
        <button id="forward-button" onClick={handleArrowClick}>
            <ArrowForwardIos className="w-8 h-8"/>
        </button>
        </div>
    )
}

export default StepArrowsIcons