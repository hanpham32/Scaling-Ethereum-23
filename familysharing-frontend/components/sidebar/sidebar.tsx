import FamilyIcon from "../logos/family-logo"

import AccountsList from "./accountsList"

function Sidebar() {
    return (
        <div className="flex flex-col fixed top-0 left-0 h-screen border-r-2 pt-6 px-4">
            <div className="flex flex-col items-center">
                <FamilyIcon />
                <h1 className="font-semibold mt-2">FAMILY SHARE</h1>
            </div>
            <AccountsList />
        </div>
    )
}

export default Sidebar