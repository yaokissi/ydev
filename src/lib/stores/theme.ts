import { writable } from "svelte/store";

const isClient = typeof window !== "undefined"; // Vérifie si on est côté client
const storedTheme = isClient ? localStorage.getItem("theme") || "light" : "light";

export const theme = writable(storedTheme);

if (isClient) {
    theme.subscribe((value) => {
        localStorage.setItem("theme", value);
        document.documentElement.classList.toggle("dark", value === "dark");
    });
}