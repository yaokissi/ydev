<script>
import { Copyright, Github, Linkedin } from 'lucide-svelte';

const socialsLogo = [
    { name: "Twitter", href: "https://x.com/YaoKissi2",},
    { name: "Github", href: "https://github.com/yaokissi" },
    { name: "Linkedin", href: "https://www.linkedin.com/in/yao-kissi/" },
    {name : "Threads", href: "https://www.threads.net/@bigyaos"}
]

const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
</script>
<div class="mt-20 p-10 flex justify-around">
    <div>
        <div>
            {#each socialsLogo as links}
                <p>{links.name}</p>
            {/each}
        </div>
        <ul>
            {#each footerLinks as link}
                <li>
                    <a href={link.href} class="hover:text-gray-300 transition-colors">
                        {link.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="text-white">
        <Copyright></Copyright> <p>2025 Yao KISSI. All rights reserved.</p>
    </div>

</div>
