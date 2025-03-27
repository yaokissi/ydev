<script lang="ts">
    import { Sun,Moon, LayoutGrid,  CircleX  } from 'lucide-svelte';
    import { slide } from 'svelte/transition';
    import { theme } from '../stores/theme';
    import { page } from '$app/stores';
    import avatarImage from '/src/assets/avatar1.png';


    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];


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
        theme.update(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
    }

    $: currentPath = $page.url.pathname;

function isActive(href: string) {
    if (href === '/') {
        return currentPath === '/';
    }
    return href.startsWith('/#') 
        ? false 
        : currentPath.startsWith(href);
}

</script>
<div class=""> <!-- bg-gradient-to-b from-[var(--background-gradient-from)] to-[var(--background-gradient-to)]-->
<nav class="fixed top-0 left-0 w-full z-50 bg-[var(--background)]
text-[var(--text-primary)] py-4 transition-colors duration-300">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <!-- Logo/Avatar -->
            <div class="flex-shrink-0">
                <a href="/">
                    <img
                            src={avatarImage}
                            class="h-20 w-25 md:w-25 md:h-20"
                            alt="Avatar yao kissi"
                    >
                    <p class="text-[var(--text-secondary)] text-xs text-center">Ydev</p>
                </a>
            </div>

            <!-- Menu Desktop -->
            <ul class="hidden md:!flex items-center space-x-8">
                {#each menuItems as item}
                    <li class="relative py-2">
                        <a
                            href={item.href}
                            class="hover:text-[var(--text-secondary)] transition-colors duration-200 {isActive(item.href) ? 'text-[var(--text-secondary)] font-bold' : ''}"
                        >
                            {item.name}
                        </a>
                        {#if isActive(item.href)}
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-cyan-400 to-transparent"></div>
                        {/if}
                    </li>
                {/each}
            </ul>

            <!-- Icônes à droite -->
            <div class="flex items-center space-x-4">
                <button class="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        title="Change Theme"
                        on:click={toggleTheme}

                >
                    {#if $theme === 'dark'}
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
                    class="absolute top-full inset-x-0 mx-auto w-[90%] bg-[var(--menu-bg)] border-[var(--text-secondary)] rounded-xl shadow-lg mt-0.5 py-4 md:hidden overflow-hidden"
                    transition:slide={{ duration: 200 }}
            >
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center">
                        <p class="py-3 text-sm font-bold text-zinc-300 ">Menu</p>
                        <button
                                class="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                                on:click={() => menuIsOpen = false}
                                aria-label="Close menu"
                                >
                            <CircleX class="w-6 h-6 cursor-pointer"/>
                        </button>
                    </div>
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
</div>
<style>

</style>