import { Link } from "react-router";
import { useTheme } from "../../Utils/theming";


const Sidebar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div
                className="sidebar-menu overflow-y-auto fixed left-0 top-0 w-60 h-full bg-white px-4 z-50 -translate-x-full xl:translate-x-0 sidebar-menu-xl duration-200 border-r-2 border-black/10 dark:bg-bgDark dark:border-white/10">
                <div className="flex items-center gap-2 border-b-2 border-black/10 dark:border-white/10">
                    <a href="#" className="ml-4 py-4 flex items-center gap-2">
                        <img src="/img/logo-2.svg" className="w-[20%] mr-1" alt="" />
                        <span className="text-xl font-bold">FlowKas</span>
                    </a>
                    <div className="flex">
                        <button onClick={toggleTheme} className="dark-mode-toggle xl:hidden">
                            {theme === 'dark' ? (
                                <img src="/img/white_toggle-flowkas.svg" alt="Dark Mode" className="w-7 lg:w-9 2xl:w-11" />
                            ) : (
                                <img src="/img/dark_toggle-flowkas.svg" alt="Light Mode" className="w-7 lg:w-9 2xl:w-11" />
                            )}
                        </button>
                    </div>
                </div>
                <ul className="mt-6 xl:mt-4">
                    <li className="mb-1 flex items-center">
                        <Link to="/dashboard" className="flex items-center py-4 px-4 rounded-lg">
                            <img src="" alt="" className="mr-4" />
                            <span className="text-sm xl:text-sm font-semibold">Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-1 flex items-center">
                        <Link to="/dashboard" className="flex items-center py-4 px-4 rounded-lg">
                            <img src="" alt="" className="mr-4" />

                            <span className="text-sm xl:text-sm font-semibold">Transaksi</span>
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 hidden xl:hidden sidebar-overlay"></div>
        </>

    )
}

export default Sidebar