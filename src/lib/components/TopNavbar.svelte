<script lang="ts">
    import { Languages, LayoutGrid } from 'lucide-svelte';
    import { slide } from 'svelte/transition';

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];
    console.log(menuItems);

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
</script>

<nav class="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#252529] to-black text-white py-4">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <!-- Logo/Avatar -->
            <div class="flex-shrink-0">
                <img
                        src={avatarImage}
                        title="avatar de KISSI Yao"
                        alt="avatar"
                        class="h-12 w-12 md:h-16 md:w-16 rounded-full bg-white/30"
                >
            </div>

            <!-- Menu Desktop -->
            <ul class="hidden md:!flex items-center text-white space-x-8">
                {#each menuItems as item}
                    <li>
                        <a
                                href={item.href}
                                on:click={(e) => handleClick(e, item.href)}
                                class="hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
                        >
                            {item.name}
                        </a>
                    </li>
                {/each}
            </ul>

            <!-- Icônes à droite -->
            <div class="flex items-center space-x-4">
                <button
                        class="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        title="Change Language"
                >
                    <Languages class="w-6 h-6" />
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
                    class="absolute top-full left-0 w-full bg-[#252529] shadow-lg mt-0.5 py-4 md:hidden overflow-hidden"
                    transition:slide={{ duration: 200 }}
            >
                <div class="container mx-auto px-4">
                    {#each menuItems as item}
                        <a
                                href={item.href}
                                on:click={(e) => handleClick(e, item.href)}
                                class="block py-3 px-4 hover:bg-white/10 transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</nav>

<style lang="postcss">
    nav {
        font-family: 'General Sans', sans-serif;
    }


</style>