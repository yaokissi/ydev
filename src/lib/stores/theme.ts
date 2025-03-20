import { writable } from 'svelte/store';

// Initialisation SSR-safe
export const theme = writable('light');

// Vérification côté client uniquement
if (typeof window !== 'undefined') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');

    // Mise à jour initiale
    theme.set(savedTheme || (prefersDark ? 'dark' : 'light'));

    // Abonnement aux changements
    theme.subscribe(value => {
        localStorage.setItem('theme', value);
        document.documentElement.classList.toggle('dark', value === 'dark');
    });
}