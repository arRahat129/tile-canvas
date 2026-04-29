import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import logoImg from "@/assets/logo.png"
import Link from "next/link";

const Navbar = () => {

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

                <ul className="flex items-center justify-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-tiles"}>All Tiles</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

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