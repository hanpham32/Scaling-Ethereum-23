import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';

// Components
import Navbar from "../../components/navbar";

function NewFamilyShare() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
            <div className="items-center max-w-7xl m-auto">
                <div className='px-6 py-16'>
                  <h1 className="text-3xl font-bold text-[#1B2C5D] mb-6">Create new FamilyShare</h1>
                  <div className="bg-white rounded-xl p-8">
                      <div className="flex mb-10">
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
                      <ConnectButton />
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default NewFamilyShare