import { writable } from 'svelte/store';

// On récupère le mode actuel ou on met dark par défaut
const theme = writable(localStorage.getItem('theme') || 'dark');

function toggleTheme() {
    theme.update((current) => {
        const newTheme = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        return newTheme;
    });
}