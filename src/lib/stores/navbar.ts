import { writable } from 'svelte/store';

export const isNavbarVisible = writable(true);

let lastScrollY = 0;

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scrolling down
            isNavbarVisible.set(false);
        } else {
            // Scrolling up
            isNavbarVisible.set(true);
        }

        lastScrollY = currentScrollY;
    });
}