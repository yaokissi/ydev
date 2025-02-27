<script>
    import { Link } from 'lucide-svelte';

    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";
</script>

<TopNavbar></TopNavbar>
<main class="bg-[#0e0e10]">
    <section>
        <article>
            <h1>A showcase of some projects that i worked on </h1>
            <p>I've worked on some side projects where i've developed applications to transform my ideas into reality and to get better</p>
        </article>
    </section>
    <section>
        <article>
            <div>
                <img src="" alt="Project logo" title="projects logo">
                <h3>Project name</h3>
                <p>Projects description</p>
               <p> <Link></Link><a href="#">Projects Link</a> </p>
            </div>
        </article>
    </section>
</main>
<FooterSection></FooterSection>
