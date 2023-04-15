import Image from 'next/image'

const links = [
    {
        "name": "Dashboard",
        "profileImg": "icons/dashboardIcon.svg"
    },
    {
        "name": "Accounts",
        "profileImg": "icons/accountsIcon.svg"
    },
    {
        "name": "Transactions",
        "profileImg": "icons/transactionIcon.svg"
    },
    {
        "name": "Settings",
        "profileImg": "icons/settingIcon.svg"
    },
]

type AccountProps = {
    name: string
    profileImg: string
}

function SidebarAccount(props: AccountProps) {
    return (
        <div className="flex flex-col items-center">
            <p className="mb-2 font-semibold">{props.name}</p>
            <button className="flex items-center justify-center w-20 h-20 border-2 border-slate-100 rounded-2xl bg-[#F0FCFF] hover:bg-[#bef2ff]">
                <Image 
                    src={props.profileImg}
                    alt={props.name + ' logo'}
                    width={50}
                    height={50}
                />
            </button>
        </div>
    )
}

function NavList() {
    return (
        <div className='flex flex-col gap-8 my-10'>
            {links.map((link) => {
                return (
                    <SidebarAccount 
                        key={link.name} 
                        name={link.name} 
                        profileImg={link.profileImg}
                    />
                )
            })}
        </div>
    )
}

export default NavList