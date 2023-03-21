import Navbar from "../../components/navbar"

function NewFamilyShare() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-[#1DEED5] to-[#00EBFF] ">
            <div className="items-center max-w-7xl m-auto">
                <div className='px-6 py-16'>
                  <h1 className="text-3xl font-bold text-[#1B2C5D] mb-6">Create new FamilyShare</h1>
                  <div className="max-w-xl bg-white rounded-xl p-8">
                      <div className="mb-6">
                          <h2 className="text-2xl font-bold text-[#1B2C5D]">Connect Wallet</h2>
                          <p className="text-[#1B2C5D]">The connected wallet will pay the network fees for the Safe creation.</p>
                      </div>
                      <button className="py-2 px-4 bg-[#1B2C5D] font-semibold rounded-xl text-lg text-white hover:opacity-80 ease-in duration-200">
                        Connect
                      </button>
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default NewFamilyShare