import React from "react";
import { Chat, AccountCircle, Menu }  from "@mui/icons-material";

const Navbar = () => {
    return (
        <div className="">
            <nav className="bg-background_light shadow-md px-2 sm:px-4 py-2.5 rounded">
                <div className="flex items-center justify-between mx-auto">
                    <Menu className="hover:opacity-60 hover:scale-110 active:scale-100"/>
                    <a href="http://localhost:3000/" className="flex items-center">
                    <Chat className="h-6 mr-3 sm:h-9" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Shitty chat app</span>
                    </a>
                    <AccountCircle />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;