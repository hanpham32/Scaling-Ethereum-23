import Image from "next/image"
import Link from "next/link"

function index() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
        <div className="py-3 px-6">
            <Image 
              src='/icons/homeIcon.svg'
              alt='home Icon'
              width={36}
              height={36}
              className=''
            />
        </div>
        <div className="flex justify-center items-center max-w-7xl m-auto">
            <div className='flex flex-col md:flex-row md:items-center gap-12 px-8 py-24'>
                <div>
                    <div className="flex flex-col items-center md:items-start mb-8">
                        <h1 className="text-5xl md:text-6xl font-bold text-primary-color mb-2">FamilyShare</h1>
                        <p className="text-xl text-center md:text-left">Share your next generation wallet with loved ones</p>
                    </div>
                    <div className="flex justify-center md:justify-start gap-4">
                        <Link href='sign-up'>
                            <button className="py-2 w-32 bg-[#1B2C5D] font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
                                Sign Up
                            </button>
                        </Link>
                        <Link href='dashboard' className="shrink-0">
                            <button className="py-2 px-4 text-primary-color border-2 border-primary-color font-semibold rounded-xl text-lg bg-white hover:bg-slate-200 hover:scale-110 ease-in duration-200">
                                Got to Dashboard
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image 
                        src='/parentDashboard.png'
                        alt='parent dashboard'
                        width={1000}
                        height={512}
                        className=''
                    />
                </div>
            </div>
        </div>
                
    </div>
  )
}

export default index