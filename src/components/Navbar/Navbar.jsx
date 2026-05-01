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
            <nav className="max-w-7xl mx-auto w-full py-3
    flex flex-col items-center gap-5 md:gap-0
    md:flex-row md:justify-between md:items-center">
                <Link href={'/'} className="flex justify-center md:justify-start">
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