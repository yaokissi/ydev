<script>
import {Copyright} from "lucide-svelte";

import twitterIcon from '/static/images/twitter.png';
import githubIcon from '/static/images/github.png';
import linkedinIcon from '/static/images/linkedin.png';
import threadsIcon from '/static/images/threads.png';

    const socialsLogo = [
        { path: twitterIcon, href: "https://x.com/YaoKissi2" },
        { path: githubIcon, href: "https://github.com/yaokissi" },
        { path: linkedinIcon, href: "https://www.linkedin.com/in/yao-kissi/" },
        { path: threadsIcon, href: "https://www.threads.net/@bigyaos" }
    ];
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
            {#each socialsLogo as logo}
            <a href={logo.href}> <img src={logo.path}/> </a>
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
