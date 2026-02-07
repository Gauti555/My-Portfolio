"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const Header = () => {
    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Work", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Hobbies", href: "#hobbies" },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-16 items-center gap-12 rounded-full border border-white/10 bg-[#0a0a0a]/80 px-10 backdrop-blur-md shadow-lg shadow-primary/10"
            >
                <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <span className="font-bold text-[#0a0a0a] text-lg">G</span>
                    </div>
                    <span className="hidden font-bold text-white sm:block text-lg">Gautam</span>
                </div>

                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-base font-medium text-white/70 transition-colors hover:text-white"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="#contact"
                    className="flex h-11 items-center rounded-full bg-primary px-6 text-base font-bold text-[#0a0a0a] transition-transform hover:scale-105"
                >
                    Let&apos;s Talk ↗
                </Link>
            </motion.nav>
        </header>
    );
};
