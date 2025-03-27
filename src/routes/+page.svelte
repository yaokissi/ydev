<script>
    import TopNavbar from "$lib/components/TopNavbar.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import ProExperiences from "$lib/components/ProExperiences.svelte";
    import SocialFeed from "$lib/components/SocialFeed.svelte";
    import FooterSection from "$lib/components/FooterSection.svelte";
    import "../app.css";
    import { onMount } from "svelte";
    import { afterUpdate } from 'svelte';



    let modelSrc = "../models/hacker-room.glb";
    let modelViewer;
    let isScrolling = false;
    let scrollTimeout;
    onMount(() => {
        import("@google/model-viewer")

        afterUpdate(() => {
            document.title = "Projets | Yao Kissi";
        });

        // Gestionnaire de défilement
        function handleScroll() {
            if (!isScrolling) {
                isScrolling = true;
                if (modelViewer) {
                    modelViewer.setAttribute('camera-controls', 'false');
                }
            }

            // Réinitialiser le timeout
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
                if (modelViewer) {
                    modelViewer.setAttribute('camera-controls', 'true');
                }
            }, 150); // Délai avant de réactiver les contrôles
        }

        // Ajouter l'écouteur d'événement de défilement
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    });

</script>

<header>

    <div class="
                   bg-[var(--background)]
         "
    >
        <p class=" text-[var(--text-primary)] text-white text-center text-3xl pt-35 ">Hi, I'm Yao The big </p>
        <h1
                class="
           w-[100%]
           ml-10
           text-[var(--text-primary)]
           font-bold
           text-xl
            mr-auto
            ml-auto
           text-white
           mt-10
           text-center
           "
        >
            Frontend Developer passionate about creating beautiful websites.
        </h1>
        <div class="

                    "
        >
            <model-viewer
                    class=""
                    bind:this={modelViewer}
                    src={modelSrc}
                    alt="My setup 3d model"
                    auto-rotate
                    camera-controls
                    camera-orbit="180deg 65deg 105%"
                    field-of-view="30deg"
                    disable-zoom
                    touch-action="pan-y"
                    loading="lazy"
                    style="width: 100%; height: 650px;">
                <div slot="poster" class="loading-poster">
                    <div class="loading-spinner"></div>
                    <p class="loading-text">Loading...</p>
                </div>
            </model-viewer>
        </div>

        <div class="flex justify-center mt-10">
            <a href="/contact">
                <button class="border border-gray-300 text-[var(--text-primary)] hover:bg-[var(--background-gradient-from)] transition-colors text-zinc-300 px-5 py-2 rounded cursor-pointer w- hover:bg-gray-10 ">
                    <span class="btn-ping_dot"></span>
                    Let's Work Together
                </button>
            </a>

        </div>
    </div>
</header>
<AboutSection
id="about">

</AboutSection>
<div class="w-[100%] pt-20 pb-50 bg-[var(--background)]">
    <div class="w-[90%] mx-auto flex flex-wrap justify-between text-white bg-[var(--background)] aboutSection">
        <ProExperiences ></ProExperiences>
        <SocialFeed ></SocialFeed>
    </div>
</div>


<FooterSection></FooterSection>
<style>
    @import "tailwindcss";
* {

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

    @media screen and (max-width: 1024px) {
        .aboutSection{
            width: 90%;
            margin-top: 10px;
        }
    }
    @media screen and (max-width: 480px) {
.aboutSection {
    width: 90%;
    margin-top: 10px;
}
    }

    .loading-poster {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #010103;
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
    }

    .loading-text {
        color: white;
        font-size: 1.2rem;
        text-align: center;
        background-color: transparent;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }


    .btn-ping_dot {
        position: relative;
        display: inline-flex;
        margin-right: 12px;
        height: 0.75rem;
        width: 0.75rem;
        border-radius: 9999px;
        background-color: rgb(34 197 94);
        animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes ping {
        75%, 100% {
            transform: scale(2);
            opacity: 0;
        }
    }

</style>