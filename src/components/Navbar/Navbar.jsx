import Image from "next/image";
import logoImg from "@/assets/logo.png"
import ActiveNav from "./ActiveNav";
import Authentication from "./Authentication";
import Link from "next/link";

const Navbar = () => {

    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "All Tiles", path: "/all-tiles" },
        { id: 3, name: "Profile", path: "/my-profile" }
    ];

    return (
        <div className="border-b px-2">
            <nav className="grid grid-cols-3 py-3 max-w-7xl mx-auto w-full">
                <Link href={'/'} className="justify-start">
                    <div className="flex gap-2 items-center">
                        <Image
                            src={logoImg}
                            alt="logo"
                            loading="eager"
                            width={50}
                            height={50}
                            className="object-cover h-auto w-auto"
                        />
                    </div>
                </Link>

                <ActiveNav navItems={navItems} />

                <Authentication />
            </nav>
        </div>
    );
};

export default Navbar;