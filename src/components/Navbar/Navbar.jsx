import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import logoImg from "@/assets/logo.png"
import Link from "next/link";
import ActiveNav from "./ActiveNav";

const Navbar = () => {

    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "All Tiles", path: "/all-tiles" },
        { id: 3, name: "Profile", path: "/profile" }
    ];

    return (
        <div className="border-b px-2">
            <nav className="grid grid-cols-3 py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center justify-start">
                    <Image
                        src={logoImg}
                        alt="logo"
                        loading="eager"
                        width={50}
                        height={50}
                        className="object-cover h-auto w-auto"
                    />
                </div>

                <ActiveNav navItems={navItems} />

                <div className="flex gap-4 justify-end">
                    <Link href={'/signin'}>
                        <Button>
                            Sign In
                        </Button>
                    </Link>
                    <Link href={'/signup'}>
                        <Button>
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;