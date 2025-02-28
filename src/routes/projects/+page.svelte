<script>
    import { Link } from 'lucide-svelte';

    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";
</script>

<TopNavbar></TopNavbar>
<main class="bg-[#010103] h-[100vh] pt-30 text-white ">
    <section class="ml-auto mr-auto w-[90%]" >
        <article>
            <h1 class="text-4xl font-bold ">A showcase of some projects that i worked on. </h1>
            <p class="mt-5">I've worked on some side projects where i've developed applications to transform my ideas into reality and to get better</p>
        </article>
    </section>
    <section class="mt-15 ml-auto mr-auto w-[90%]">
        <article class=" group w-[30%] p-5 cursor-pointer hover:bg-[#27272A] border-1 border-gray-700 rounded-xl">
            <div>
                <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                     class="w-9
                            h-9
                            bg-[#27272A]
                            border-2
                            border-gray-700
                            rounded-full

                    "
                        alt="Project logo" title="projects logo">
                <h3 class="mt-4 font-bold">Spotify clone</h3>
                <p class="mt-3 mb-4 text-zinc-600 text-sm">Spotify web application made with vue 3 & Tailwind. </p>
                <a
                        href="https://spotify-clone-git-main-yaokissis-projects.vercel.app/"
                        class=" flex items-center gap-2 mt-4 text-zinc-200 group-hover:text-[#22d3ee]">
                    <Link class=" w-5 h-5 text-zinc-300 group-hover:text-[#22d3ee] "></Link>
                    Projects Link
                </a>
            </div>
        </article>
    </section>
</main>
<FooterSection></FooterSection>
<style>
    @import "tailwindcss";




</style>