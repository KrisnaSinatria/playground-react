import { useEffect, useState } from 'react';

//untuk dark/light mode
export const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (
            storedTheme === 'dark' ||
            (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    return {
        theme,
        toggleTheme,
    };
};

//tombol sidebar
export const useSidebar = () => {
    useEffect(() => {
        const sidebarToggle = document.querySelector('.sidebar-toggle') as HTMLElement;
        const sidebarOverlay = document.querySelector('.sidebar-overlay') as HTMLElement;
        const sidebarMenu = document.querySelector('.sidebar-menu') as HTMLElement;
        const main = document.querySelector('.main') as HTMLElement;

        if (!sidebarToggle || !sidebarOverlay || !sidebarMenu || !main) {
            console.warn('Some sidebar elements not found');
            return;
        }

        const handleToggle = (e: Event) => {
            e.preventDefault();
            main.classList.toggle('active');
            sidebarOverlay.classList.toggle('hidden');
            sidebarMenu.classList.toggle('-translate-x-full');
            sidebarMenu.classList.toggle('xl:translate-x-0');
            sidebarMenu.classList.toggle('xl:-translate-x-full');
        };

        const handleOverlay = (e: Event) => {
            e.preventDefault();
            main.classList.add('active');
            sidebarOverlay.classList.add('hidden');
            sidebarMenu.classList.add('-translate-x-full');
        };

        const handleDropdownToggle = (e: Event, item: Element) => {
            e.preventDefault();
            const parent = item.closest('.group');
            if (!parent) return;

            if (parent.classList.contains('selected')) {
                parent.classList.remove('selected');
            } else {
                document.querySelectorAll('.sidebar-dropdown-toggle').forEach((i) => {
                    const dropdownParent = i.closest('.group');
                    dropdownParent?.classList.remove('selected');
                });
                parent.classList.add('selected');
            }
        };

        sidebarToggle.addEventListener('click', handleToggle);
        sidebarOverlay.addEventListener('click', handleOverlay);

        const dropdownToggles = document.querySelectorAll('.sidebar-dropdown-toggle');
        dropdownToggles.forEach((item) => {
            item.addEventListener('click', (e) => handleDropdownToggle(e, item));
        });

        return () => {
            sidebarToggle.removeEventListener('click', handleToggle);
            sidebarOverlay.removeEventListener('click', handleOverlay);
            dropdownToggles.forEach((item) => {
                item.removeEventListener('click', (e) => handleDropdownToggle(e, item));
            });
        };
    }, []); 
};