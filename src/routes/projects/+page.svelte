<script>
    import { Link } from 'lucide-svelte';

    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";

    const projectsArray = [
        {
            name: "Spotify clone",
            description: "Spotify web application made with vue 3 & Tailwind.",
            link: "https://spotify-clone-git-main-yaokissis-projects.vercel.app/",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
        },
        {
            name: "Iphone 16",
            description: "Customize your own Iphone 16 color with this interactive ThreeJs app.",
            link: "https://iphone-16-three-js.vercel.app/",
            logo: "https://i.ibb.co/TMCWM7bb/apple-1.png"
        },
        {
            name: "Sports dashboard",
            description: "Sports dashboard to see the latest sports news.",
            link: "https://github.com/yaokissi/dashboard",
            logo: "https://banner2.cleanpng.com/20180130/hie/av2nbihxy.webp"
        },
        {
            name: "Weather app",
            description: "Weather app to get the weather of any city.",
            link: "https://github.com/yaokissi/Weather-App",
            logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Weather_%28iOS%29.png"
        },
        {
            name: "Uber Eats clone",
            description: "Uber Eats home page clone made with vue 3",
            link: "https://vue3-ubereats-five.vercel.app/#/",
            logo: "https://play-lh.googleusercontent.com/tYRirzPrNIJd6rw48wFf2caJBUTEXaKvlMn7JOm1ALQ2NM7GYwzpMClT_L18bl_MF_mL=w480-h960-rw"
        },
        {
            name: "Jersey Makers",
            description: "Tool to create your own wallpaper jersey with your favorite NBA team.",
            link: "https://github.com/yaokissi/jersey-makers",
            logo: "https://i.ibb.co/ch5m4hts/basketball-jersey.png"
        }
    ]

    class Project {
        constructor(name, description, link, logo) {
            this.name = name;
            this.description = description;
            this.link = link;
            this.logo = logo;
        }
    }
  let projectData = [];
  let allProjects = [];

    const makeProjectsData = () => {
        let threeProjects = [];

        for (const project of projectsArray) {
            const new_project = new Project(project.name, project.description, project.link, project.logo);
            allProjects.push(new_project);
            threeProjects.push(new_project);

            if (threeProjects.length === 3) {
                // On pousse une copie du tableau
                projectData.push([...threeProjects]);
                // On réinitialise
                threeProjects = [];
            }
        }

        // Ajouter les projets restants s'il y en a
        if (threeProjects.length > 0) {
            projectData.push([...threeProjects]);
        }
    }

    makeProjectsData();
    console.log(projectData);

</script>

<TopNavbar></TopNavbar>
<main class="bg-[#0e0e10] h-[100vh] pt-30 text-white ">
    <section class="ml-auto mr-auto w-[90%]" >
        <article>
            <h1 class="text-4xl font-bold ">A showcase of some projects that i worked on. </h1>
            <p class="mt-5">I've worked on some side projects where i've developed applications to transform my ideas into reality and to get better</p>
            <p>Here belong some of these projects </p>
        </article>
    </section>
    <section class="mt-15 ml-auto mr-auto w-[90%]">
        {#each projectData as row}
            <div class="flex flex-col md:flex-row gap-4 mt-10">
                {#each row as project}
                    <article class="group lg:w-[30%]  p-5 cursor-pointer hover:border-1 border-[#27272A]-700 hover:bg-[#27272A] border-1 border-gray-700 rounded-xl">
                        <div>
                            <img src="{project.logo}" class="w-9 h-9 bg-[#27272A] border-2 border-gray-700 rounded-full" alt="Project logo" title="{project.name}">
                            <h3 class="mt-4 font-bold">{project.name}</h3>
                            <p class="mt-3 mb-4 text-zinc-600 text-sm">{project.description}</p>
                            <a href="{project.link}" target="_blank" class="flex items-center gap-2 mt-4 text-zinc-200 group-hover:text-[#22d3ee]">
                                <Link class="w-5 h-5 text-zinc-300 group-hover:text-[#22d3ee]"></Link>
                                Project Link
                            </a>
                        </div>
                    </article>
                {/each}
            </div>
        {/each}
    </section>
</main>
<FooterSection></FooterSection>
<style>
    @import "tailwindcss";




</style>