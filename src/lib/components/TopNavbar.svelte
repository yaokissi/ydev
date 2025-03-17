<script lang="ts">
    import { Sun,Moon, LayoutGrid } from 'lucide-svelte';
    import { slide } from 'svelte/transition';

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    let avatarImage = '/src/assets/avatar1.png';
    let menuIsOpen = false;
    let menuRef: HTMLDivElement | null = null; // Référence pour la transition

    function handleClick(e: Event, href: string) {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        menuIsOpen = false; // Ferme le menu après un clic
    }

    function toggleTheme() {
        if (typeof document !== 'undefined') {
            const htmlElement = document.documentElement;
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }
    }

    if (typeof document !== 'undefined') {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }


</script>

<nav class="fixed top-0 left-0 w-full z-50 bg-neutral-900 dark:bg-gradient-to-b from-[#252529] to-black text-white py-4 ">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <!-- Logo/Avatar -->
            <div class="flex-shrink-0 ">
                <a href="/">
                    <img
                            src={avatarImage}
                            title="avatar de KISSI Yao"
                            alt="avatar"
                            class="h-20 w-25 md:w-25 md:h-20 "
                    >
                    <p class="text-zinc-300 text-xs text-center">Ydev</p>
                </a>

            </div>

            <!-- Menu Desktop -->
            <ul class="hidden md:!flex items-center text-white space-x-8">
                {#each menuItems as item}
                    <li>
                        <a
                                href={item.href}
                                on:click={(e) => handleClick(e, item.href)}
                                class="hover:text-gray-300 transition-colors duration-200 "
                        >
                            {item.name}
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Icônes à droite -->
            <div class="flex items-center space-x-4">
                <button class="p-2 hover:bg-white/10 rounded-full transition-colors duration-200" title="Change Theme" on:click={toggleTheme}>
                    {#if document.documentElement.classList.contains('dark')}
                        <Sun class="w-6 h-6 cursor-pointer"/>
                    {:else}
                        <Moon class="w-6 h-6 cursor-pointer"/>
                    {/if}
                </button>

                <!-- Menu Mobile Button -->
                <button
                        class="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        on:click={() => menuIsOpen = !menuIsOpen}
                        aria-label="Toggle menu"
                >
                    <LayoutGrid class="w-6 h-6" />
                </button>
            </div>
        </div>

        <!-- Menu Mobile avec transition -->
        {#if menuIsOpen}
            <div
                    bind:this={menuRef}
                    class="absolute top-full inset-x-0 mx-auto w-[90%] bg-[#17181c]  border-[#27272A]-700 rounded-xl shadow-lg mt-0.5 py-4 md:hidden overflow-hidden"
                    transition:slide={{ duration: 200 }}
            >
                <div class="container mx-auto px-4">
                    <p class="py-3 text-sm font-bold text-zinc-300 ">Menu</p>
                    {#each menuItems as item}
                        <a
                                href={item.href}
                                on:click={(e) => handleClick(e, item.href)}
                                class="block py-3 w-[80%] hover:bg-white/10 border-b-1 border-gray-700 transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</nav>

<style>

nav {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;


}


</style>