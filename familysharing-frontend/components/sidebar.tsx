import Image from 'next/image'

import FamilyIcon from "./logos/family-logo"

function Sidebar() {
    return (
        <div className="flex flex-col fixed top-0 left-0 h-screen border-r-2 pt-6 px-4">
            <div className="flex flex-col items-center">
                <FamilyIcon />
                <h1 className="font-semibold mt-2">FAMILY SHARE</h1>
            </div>
            <SidebarAccount />
        </div>
    )
}

function SidebarAccount() {
    return (
        <div className="flex flex-col items-center">
            <p className="mb-2">Accounts</p>
            <div className="flex items-center justify-center w-20 h-20 border-2 border-slate-100 rounded-2xl">
                <Image 
                    src="/account1.svg"
                    alt='account logo'
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}

export default Sidebar