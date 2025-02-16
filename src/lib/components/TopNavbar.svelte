<script>
    import { Moon, Sun } from 'lucide-svelte';
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];
    let avatarImage = "/images/avatar/avatar1.png";
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
        <img src={avatarImage} alt="avatar" class=" bg-white-300 rounded-full h-20 w-25">
    </div>
    <ul class="flex justify-center space-x-4">
        {#each menuItems as item}
            <li class="">
                <a href="{item.href}">{item.name}</a>
            </li>
        {/each}
    </ul>
    <div>
        <Moon class="h-6 w-6" />
        <Sun class="h-6 w-6" />
    </div>
</nav>
<style>
    nav {
        font-family: 'General Sans', sans-serif;
    }
</style>
