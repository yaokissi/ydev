<script>
    import { Languages } from 'lucide-svelte';

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];
    let avatarImage = '/src/assets/avatar1.png';


    function handleClick(e, href) {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

</script>

<nav
        class="
            flex
            justify-evenly items-center
            bg-gradient-to-b
            from-[#252529]
            to-black
            text-white
            fixed
            top-0
            left-0
            w-full
            z-1"
>
    <div class="full rounded-full">
        <img src={avatarImage} title="avatar de KISSI Yao" alt="avatar" class=" bg-white-300 rounded-full h-20 w-25">
    </div>
    <ul class="flex justify-center space-x-4">
        {#each menuItems as item}
            <li class="">
                <a
                        href={item.href}
                        on:click={(e) => handleClick(e, item.href)}
                        class="hover:text-gray-300 transition-colors"
                >
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
    <div>
        <Languages
        class="
            text-white
            w-8
            h-8
            cursor-pointer
            hover:text-gray-300">
        </Languages>
    </div>
</nav>
<style>
    nav {
        font-family: 'General Sans', sans-serif;
    }
</style>
