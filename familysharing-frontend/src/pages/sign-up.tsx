import Navbar from "@/components/navbar"
import { TextField } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

function SignUp() {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
            <div className="items-center max-w-7xl m-auto">
            <div className='px-6 py-16'>
                <h1 className="text-3xl font-bold text-primary-color mb-6">New Account</h1>
                <div className="h-128 bg-white rounded-xl relative">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-4 mb-6 p-8 text-primary-color">
                            <div className="flex gap-4 ">
                                <div className="flex flex-col">
                                    <label htmlFor='Name' className="mb-2">
                                        Name
                                    </label>
                                    <TextField id="Name" label="Vitalik Buterin" variant="outlined" className="max-w-sm"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor='Name' className="mb-2">
                                        Email
                                    </label>
                                    <TextField id="Name" label="vitalik@gmail.com" variant="outlined" className="max-w-md"/>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor='Name' className="mb-2">
                                        Password
                                    </label>
                                    <TextField id="Name" variant="outlined" className="max-w-sm"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor='Name' className="mb-2">
                                        Confirm Password
                                    </label>
                                    <TextField id="Name" variant="outlined" className="max-w-md"/>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row mt-6">
                                <p className="text-primary-color mr-6">Are you a parent or child?</p>
                                <div className="flex gap-4">
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" id="parentRadio" checked name="radioGroup1" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                        <label htmlFor="parentRadio" className="text-sm font-medium text-gray-700">Parent</label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <input type="radio" id="childRadio" name="radioGroup1" className="h-4 w-4 rounded-full border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                        <label htmlFor="childRadio" className="text-sm font-medium text-gray-700">Child</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mr-12">
                            <div className="">
                                <Image 
                                    src='/happyFruits.png'
                                    alt='happy fruits'
                                    width={300}
                                    height={300}
                                    className='rounded-3xl hidden md:block'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <Link href='sign-up'>
                            <button className="py-2 w-32 bg-[#1B2C5D] font-semibold rounded-xl text-lg text-white hover:opacity-80 hover:scale-110 ease-in duration-200">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp