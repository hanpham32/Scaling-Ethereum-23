import Image from "next/image"
import Link from "next/link"

function Navbar() {
    return (
    <div className="flex py-3 px-6 bg-white shadow">
      <Link href='/'>
        <div className="flex">
          <Image 
            src='/icons/homeIcon.svg'
            alt='home Icon'
            width={36}
            height={36}
          />
          <p className="text-2xl font-semibold ml-4">FamilyShare</p>
        </div>
      </Link>
    </div>
    )
}

export default Navbar