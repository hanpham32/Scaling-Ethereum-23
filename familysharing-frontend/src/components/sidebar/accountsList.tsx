import Image from 'next/image'

// Temporary Data
const accounts = [
    {
        "name": "Seb",
        "profileImg": "icons/account1.svg"
    },
    {
        "name": "Han",
        "profileImg": "icons/account2.svg"
    },
    {
        "name": "Kimlong",
        "profileImg": "icons/account3.svg"
    },
    {
        "name": "Matt",
        "profileImg": "icons/account4.svg"
    }
]

type AccountProps = {
    name: string
    profileImg: string
}

function SidebarAccount(props: AccountProps) {
    return (
        <div className="flex flex-col items-center">
            <p className="mb-2 font-semibold">{props.name}</p>
            <div className="flex items-center justify-center w-20 h-20 border-2 border-slate-100 rounded-2xl hover:bg-[#effff4] shadow">
                <Image 
                    src={props.profileImg}
                    alt={props.name + ' logo'}
                    width={50}
                    height={50}
                />
            </div>
        </div>
    )
}

function AccountsList() {
    return (
        <div className='flex flex-col gap-8 my-10'>
            {accounts.map((account) => {
                return (
                    <SidebarAccount 
                        key={account.name} 
                        name={account.name} 
                        profileImg={account.profileImg}
                    />
                )
            })}
        </div>
    )
}

export default AccountsList