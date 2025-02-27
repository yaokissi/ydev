<script>


    import Twitter from '/src/twitter.png';
    import Github from '/src/github.png';
    import Linkedin from '/src/linkedin.png';


    const socialUpdates = [
        {
            platform: 'Twitter',
            icon: Twitter,
            username: '@votreusername',
            date: '2 juin 2024',
            content: 'Je viens de lancer mon nouveau site portfolio avec Svelte et Tailwind CSS! #webdev #svelte',
            link: 'https://twitter.com/votreusername/status/123456789',
            engagement: {
                likes: 42,
                retweets: 12,
                comments: 5
            }
        },
        {
            platform: 'LinkedIn',
            icon: Linkedin,
            username: 'Votre Nom',
            date: '28 mai 2024',
            content: 'Heureux d\'annoncer que je commence un nouveau projet passionnant avec des technologies modernes...',
            link: 'https://linkedin.com/in/votrenom/posts/123456',
            engagement: {
                likes: 78,
                comments: 15
            }
        },
        {
            platform: 'GitHub',
            icon: Github,
            username: 'votreusername',
            date: '15 mai 2024',
            content: 'J\'ai publié un nouveau repo: "svelte-portfolio-template" - un template moderne pour les portfolios de développeurs',
            link: 'https://github.com/votreusername/svelte-portfolio-template',
            engagement: {
                stars: 24,
                forks: 8
            }
        }
    ];
</script>

<section id="social-feed" class="py-16 bg-[#0e0e10] text-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-heading font-bold mb-8 text-center">
            <span class="text-blue-400">socials medias</span> activities
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each socialUpdates as update}
                <div class="bg-[#1a1a1c] rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all">
                    <div class="flex items-center mb-3">
                        <div class="w-10 h-10 flex items-center justify-center bg-[#27272A] rounded-full">
                            <img src={update.icon} alt="icon" class="w-6 h-6" />
                        </div>
                        <div class="ml-3">
                            <p class="font-medium">{update.username}</p>
                            <p class="text-sm text-gray-400">{update.date}</p>
                        </div>
                    </div>

                    <p class="mb-4">{update.content}</p>

                    <a href={update.link} target="_blank" rel="noopener noreferrer"
                       class="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center">
                        Voir sur {update.platform}
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>

                    <div class="mt-4 pt-3 border-t border-gray-800 flex gap-4">
                        {#if update.platform === 'Twitter'}
                            <span class="text-sm text-gray-400">{update.engagement.likes} likes</span>
                            <span class="text-sm text-gray-400">{update.engagement.retweets} retweets</span>
                        {:else if update.platform === 'LinkedIn'}
                            <span class="text-sm text-gray-400">{update.engagement.likes} réactions</span>
                            <span class="text-sm text-gray-400">{update.engagement.comments} commentaires</span>
                        {:else if update.platform === 'GitHub'}
                            <span class="text-sm text-gray-400">{update.engagement.stars} étoiles</span>
                            <span class="text-sm text-gray-400">{update.engagement.forks} forks</span>
                        {/if}

                    </div>
                </div>
            {/each}

        </div>
    </div>
</section>

<style>
    /* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>