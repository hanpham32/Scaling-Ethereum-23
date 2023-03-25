import Image from "next/image";
import Link from "next/link";

function Onboarding() {
    return (
        <div className="flex items-center min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
            <div className="flex justify-center items-center max-w-7xl m-auto">
                <div className='px-6 py-32'>
                    <div>
                        <h1 className="text-5xl font-bold text-primary-color mb-2">Welcome to FamilyShare</h1>
                        <p className="text-xl ">A family centered multisignature wallet utilizing account abstraction.</p>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row gap-8 mt-16">
                        <div className="max-w-xl bg-white rounded-xl p-8">
                            <Image 
                                src='icons/plusIcon.svg'
                                alt='Add Icon'
                                width={60}
                                height={60}
                            />
                            <div className="mt-10 mb-6">
                                <h2 className="text-2xl font-bold text-primary-color">Create a FamilyShare</h2>
                                <p className="text-primary-color">A new Safe that is controlled by one or multiple owners.</p>
                            </div>
                            <Link href='new-familyShare'>
                                <button className="py-2 px-4 bg-primary-color font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
                                    Create new FamilyShare
                                </button>
                            </Link>
                        </div>
                        <div className=" max-w-xl bg-white rounded-xl p-8">
                            <Image 
                                src='icons/northEastArrowIcon.svg'
                                alt='Arrow Icon'
                                width={60}
                                height={60}
                            />
                            <div className="mt-10 mb-6">
                                <h2 className="text-2xl font-bold text-primary-color">Add existing FamilyShare</h2>
                                <p className="text-primary-color">Already have a Safe? Add your Safe using your Safe address.</p>
                            </div>
                            <button className="py-2 px-4 text-primary-color border-2 border-primary-color font-semibold rounded-xl text-lg hover:bg-slate-200 hover:scale-110 ease-in duration-200">
                                Add existing FamilyShare
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding