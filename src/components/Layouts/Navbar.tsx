import VectorNavbar from '../../assets/Vector-navbar.svg';
import Hamburger from '../../assets/hamburger.svg';
import '../../index.css';
import { useEffect, useRef } from 'react';


const Navbar = () => {

    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const navMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                hamburgerRef.current &&
                navMenuRef.current &&
                !hamburgerRef.current.contains(e.target as Node) &&
                !navMenuRef.current.contains(e.target as Node)
            ) {
                navMenuRef.current.classList.add('hidden');
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    const toggleMenu = () => {
        navMenuRef.current?.classList.toggle('hidden');
    };


    return (
        <header className="absolute top-0 w-full items-center">
            <div className="container mx-auto min-w-[75%]">
                <div className="relative mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={VectorNavbar} alt="" className="w-[15%]" />
                        <a href="" className="block py-6 text-base font-extrabold text-primary lg:text-xl">Pet Haven.</a>
                    </div>
                    <div className="flex items-center">
                        <button ref={hamburgerRef}
                            id="hamburger"
                            onClick={toggleMenu}
                            type="button" className="absolute right-2 block md:hidden">
                            <img src={Hamburger} alt="" className="invert filter" />
                        </button>
                        <nav ref={navMenuRef} id="nav-menu"
                            className="absolute right-4 top-full z-50 hidden w-52 rounded-lg bg-body py-4 shadow-lg md:static md:block md:w-full md:rounded-none md:bg-opacity-0 md:text-xs md:shadow-none xl:md:text-sm">
                            <ul className="block md:flex md:font-semibold">
                                <li className="group">
                                    <a href="#home" className="nav-class">Beranda</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="nav-class">Profil</a>
                                </li>
                                <li className="group">
                                    <a href="#produk" className="nav-class">Produk</a>
                                </li>
                                <li className="group">
                                    <a href="#service" className="nav-class">Layanan</a>
                                </li>
                                <li className="group">
                                    <a href="#gallery" className="nav-class">Galeri</a>
                                </li>
                                <li className="group">
                                    <a href="#testimoni" className="nav-class">Review</a>
                                </li>
                                <div className="hidden gap-4 font-bold xl:flex">
                                    <a href="https://wa.me/6281246336063?text=Hai%20saya%20ingin%20berbelanja%20di%20PetHaven."
                                        target="_blank"
                                        className="scale self-center rounded-md border-2 border-primary px-3 py-[6px] font-extrabold text-primary">Hubungi
                                        Kami
                                    </a>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar