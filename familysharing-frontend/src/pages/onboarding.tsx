import Image from "next/image";

function Onboarding() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
            <div className="flex justify-center items-center max-w-7xl m-auto">
                <div className='px-6 py-32'>
                    <div>
                        <h1 className="text-5xl font-bold text-[#1B2C5D] mb-4">Welcome to FamilyShare</h1>
                        <p className="text-xl ">A family centered multisignature wallet utilizing account abstraction.</p>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row gap-8 mt-16">
                        <div className="h-80 w-[500px] bg-white rounded-xl p-8">
                            <Image 
                                src='/plusIcon.svg'
                                alt='Add Icon'
                                width={60}
                                height={60}
                            />
                            <div className="mt-10 mb-6">
                                <h2 className="text-2xl font-bold text-[#1B2C5D]">Create a FamilyShare</h2>
                                <p className="text-[#1B2C5D]">A new Safe that is controlled by one or multiple owners.</p>
                            </div>
                            <button className="h-12 w-64 bg-[#1B2C5D] font-semibold rounded-xl text-lg text-white hover:opacity-80 ease-in duration-200">
                                Create new FamilyShare
                            </button>
                        </div>
                        <div className="h-80 w-[500px] bg-white rounded-xl p-8">
                            <Image 
                                src='/northEastArrowIcon.svg'
                                alt='Arrow Icon'
                                width={60}
                                height={60}
                            />
                            <div className="mt-10 mb-6">
                                <h2 className="text-2xl font-bold text-[#1B2C5D]">Add existing FamilyShare</h2>
                                <p className="text-[#1B2C5D]">Already have a Safe? Add your Safe using your Safe address.</p>
                            </div>
                            <button className="h-12 w-64 border-[#1B2C5D] border-2 font-semibold rounded-xl text-lg text-[#1B2C5D] hover:bg-slate-200 ease-in duration-200">
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