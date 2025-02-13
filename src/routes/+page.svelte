<script>
    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import "../app.css";
    import { onMount } from "svelte";

    let modelSrc = "../models/hacker-room.glb";
    onMount(() => {
        // Code qui dépend de window
        import("@google/model-viewer");
    });
</script>

<header>
    <TopNavbar></TopNavbar>

    <div class="
            bg-black

         "
    >
        <p class="text-white text-center text-3xl pt-15 z-1">Hi, I'm KISSI Yao but call me the Big</p>
        <h1
                class="
            ml-10 font-bold text-white mt-10 z-1 text-center
           "
        >
            Frontend Developer passionate about creating beautiful websites
        </h1>

        <model-viewer
                class=""
                src={modelSrc}
                alt="My setup 3d model"
                auto-rotate
                camera-controls
                loading="lazy"
                style="width: 100%; height: 650px;">
        </model-viewer>
        <div class="flex justify-center mt-10">
        <button class="border border-gray-300  text-gray-800 px-5 py-2 rounded cursor w-100 hover:bg-gray-10 text-white">Let's Work Together</button>
        </div>
    </div>
</header>
<AboutSection></AboutSection>
<style>
    @import "tailwindcss";
</style>