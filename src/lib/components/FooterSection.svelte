<script>
import {Copyright} from "lucide-svelte";

import twitterIcon from '/src/twitter.png';
import githubIcon from '/src/github.png';
import linkedinIcon from '/src/linkedin.png';
import threadsIcon from '/src/threads.png';

    const socialsLogo = [

        { path: githubIcon, href: "https://github.com/yaokissi" },
        { path: linkedinIcon, href: "https://www.linkedin.com/in/yao-kissi/" },
        { path: threadsIcon, href: "https://www.threads.net/@bigyaos" },
        { path: twitterIcon, href: "https://x.com/YaoKissi2" }
    ];
const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];
</script>
<div class="pt-20
            p-10 flex
            justify-around
            bg-black
            ">
    <div>
        <div class="block flex ">
            {#each socialsLogo as logo}
            <a
                    href={logo.href}
                    target="_blank"
                    class="mr-5 "
            >
                <img
                        src="{logo.path}"

                        width="35"
                />

            </a>
            {/each}
        </div>
        <ul class="flex justify-center mt-10 justify-evenly">
            {#each footerLinks as link}
                <li class="mr-10">
                    <a href={link.href} class="text-white hover:text-gray-300 transition-colors">
                        {link.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="text-white flex justify-between">
        <Copyright></Copyright> <p class="ml-10">2025 Yao KISSI. All rights reserved.</p>
    </div>

</div>
