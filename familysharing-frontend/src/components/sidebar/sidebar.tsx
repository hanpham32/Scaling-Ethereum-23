import Image from "next/image"
import Link from "next/link"

import NavList from "./navList"

function Sidebar() {
    return (
        <div className="flex flex-col fixed top-0 left-0 h-screen border-r-2 pt-6 px-4">
            <div className="flex flex-col items-center">
            <Link href='/dashboard'>
                <Image
                    src='/familyShareLogo.svg' 
                    width={100}
                    height={50}
                    alt='Family Share'
                />
            </Link>
            </div>
            <NavList />
        </div>
    )
}

export default Sidebar