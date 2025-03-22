<script>


    import Twitter from '/src/twitter.png';
    import Threads from '/src/threads.png';
    import Github from '/src/github.png';
    import Linkedin from '/src/linkedin.png';


    const socialUpdates = [
        {
            platform: 'Threads',
            icon: Threads,
            username: 'bigyaos',
            date: '26 01 2025',
            content: 'Sofware Engineering is the only career, where ...',
            link: 'https://www.threads.net/@bigyaos/post/DFSUAG2oH7k?xmt=AQGz-_Dz_IsIapMRXgsEovaHcDymObmgr6GLv2vdR4E37g',
            engagement: {
                likes: 4000,
                retweets: 168,
                comments: 91
            }
        },
        {
            platform: 'LinkedIn',
            icon: Linkedin,
            username: 'KISSI Yao',
            date: '27 January 2025',
            content: 'Ravi de partager avec vous mon premier projet avec Three.js, une librairie JavaScript qui permet de créer des expériences 3D immersives directement dans le navigateur',
            link: 'https://www.linkedin.com/posts/yao-kissi_ravi-de-partager-avec-vous-mon-premier-projet-activity-7286891705021157377-Tu0A?utm_source=share&utm_medium=member_desktop&rcm=ACoAACgj62wB4KChK93XmFu89qBPIgrFp8mjPZA',
            engagement: {
                likes: 27,
                reposts: 5,
                comments: 2
            }
        },
        {
            platform: 'GitHub',
            icon: Github,
            username: 'yaokissi',
            date: ' mai 2024',
            content: 'I work on a new project, a portfolio template for Svelte',
            link: 'https://github.com/yaokissi/ydev',
            engagement: {
                stars: 0,
                forks: 0
            }
        }
    ];
</script>

<section id="social-feed" class="py-16 w-[65%] bg-[var(--background-proXp-div)] border-1 border-gray-700 rounded-xl text-white">
    <div class="container mx-auto px-4">
        <h2 class="text-[var(--text-primary)] text-3xl font-heading font-bold mb-8 text-center">
            <span class="text-blue-400">Socials</span>  Medias
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each socialUpdates as update}
                <div class="bg-[var(--background-proXp-div)] rounded-xl p-5 border border-gray-800 hover:border-gray-700 transition-all">
                    <div class="flex items-center mb-3">
                        <div class="w-10 h-10 flex items-center justify-center bg-[var(--company-bg)] rounded-full">
                            <img src={update.icon} alt="icon" class="w-6 h-6" />
                        </div>
                        <div class="ml-3">
                            <p class="text-[var(--text-primary)] font-medium">{update.username}</p>
                            <p class="text-[var(--text-primary)] text-sm text-gray-400">{update.date}</p>
                        </div>
                    </div>

                    <p class=" text-[var(--text-primary)] mb-4">{update.content}</p>

                    <a href={update.link} target="_blank" rel="noopener noreferrer"
                       class="text-blue-400 text-sm inline-flex items-center">
                        See More
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>

                    <div class="mt-4 pt-3 border-t border-gray-800 flex gap-4">
                        {#if update.platform === 'Threads'}
                            <span class="text-sm text-gray-400">{update.engagement.likes} likes</span>
                            <span class="text-sm text-gray-400">{update.engagement.retweets} retweets</span>
                            <span class="text-sm text-gray-400">{update.engagement.comments} comments</span>
                        {:else if update.platform === 'LinkedIn'}
                            <span class="text-sm text-gray-400">{update.engagement.likes} réactions</span>
                            <span class="text-sm text-gray-400">{update.engagement.comments} commentaires</span>
                            <span class="text-sm text-gray-400">{update.engagement.reposts} reposts</span>

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
    @media screen and (max-width: 1024px) {
        section {
            width: 100%;
            margin-top: 10px;
        }
    }


    @media screen and (max-width: 480px) {
        section {
            width: 100%;
            margin-top: 10px;
        }
    }
</style>