import { Link, Separator } from "@heroui/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-green-50 pt-10 pb-6 my-10 border-t border-divider">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">

                    <div className="md:col-span-5">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-bold tracking-tight">
                                <span className="text-primary text-green-700">TILE</span>CANVAS
                            </h2>
                            <p className="text-default-500 text-small max-w-75">
                                Crafting digital experiences for physical spaces. Explore our curated
                                collection of premium tiles and geometric aesthetics.
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="text-medium font-bold mb-4">Contact Us</h3>
                        <ul className="flex flex-col gap-2 text-small text-default-500">
                            <li>Email: <Link size="sm" href="mailto:hello@tilecanvas.com">officialEmail@personal.com</Link></li>
                            <li>Support: +00-TILE</li>
                            <li>Studio: 123 Mosaic Ave, Design District</li>
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="md:col-span-3">
                        <h3 className="text-medium font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebookF />, href: "#" },
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <BsInstagram />, href: "#" },
                                { icon: <FaLinkedinIn />, href: "#" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    isExternal
                                    href={social.href}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-default-100 hover:bg-primary hover:text-primary-foreground transition-colors text-default-600"
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-2">
                    <p className="text-tiny text-default-400">
                        © {new Date().getFullYear()} Tile Canvas. Built for Excellence.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" size="tiny" className="text-default-400 hover:text-primary">Privacy Policy</Link>
                        <Link href="#" size="tiny" className="text-default-400 hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;