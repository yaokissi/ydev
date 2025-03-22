<script>
import grid1 from '/src/assets/grid1nvC.png';
import grid21 from '/src/assets/grid21.png';
import globe from '/src/assets/3d-Earth-Globe.svg';
import grid3 from '/src/assets/grid3.png';
import grid4 from '/src/assets/grid4.png';
</script>
<section class=" pt-20 bg-[var(--background)]" id="about">
    <article class="flex flex-wrap justify-between ml-auto mr-auto w-[90%]">
        <div class="bg-gradient-to-b from-[var(--background-gradient-from)] to-[var(--background-gradient-to)] w-[30%]  text-[var(--text-primary)] p-8 border border-gray-700 rounded-lg flex flex-col min-h-[350px]
                lg:col-span-1">
            <img src="{grid1}" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white text-[var(--text-primary)] font-bold mt-4">Hi, I'm Yao</h2>
            <p class="text-white text-[var(--text-primary)] mt-5">
                I am passionate about frontend development, while also capable of handling backend tasks when needed. I continuously improve my skills by working on projects and exploring new opportunities in the field. 🚀
            </p>
        </div>

        <div class="bg-gradient-to-b from-[var(--background-gradient-from)] to-[var(--background-gradient-to)] w-[30%] border border-gray-700 p-8 rounded-lg flex flex-col min-h-[350px]">
            <img src="{grid21}" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white text-[var(--text-primary)] font-bold mt-4">Tech Stack</h2>
            <p class="text-white mt-5 text-[var(--text-primary)]">
                I use a variety of languages, frameworks, and tools that allow me to build beautiful and robust applications.
            </p>
        </div>
<!-- bg-[#0e0e10] -->
        <div class="bg-gradient-to-b from-[var(--background-gradient-from)] to-[var(--background-gradient-to)] w-[30%] border border-gray-700 p-8 rounded-lg min-h-[350px]">
            <img alt="globe" class="object-contain w-full h-[276px]" src="{globe}" />
            <h2 class="text-white text-[var(--text-primary)] font-bold mt-4 text-center">
                I'm very flexible with time zone communications & locations
            </h2>
            <p class="text-white text-[var(--text-primary)] mt-5 text-center">
                I'm based in Paris,France and open to remote work worldwide.
            </p>
            <a href="/contact">
                <button class="text-[var(--text-primary)] border border-gray-300 text-gray-800 px-5 py-2 rounded w-full sm:w-auto cursor-pointer text-white mt-4">
                    <span class="btn-ping_dot"></span>
                    Contact me
                </button>
            </a>
        </div>
    </article>

    <article class="flex flex-wrap justify-between ml-auto mr-auto mt-10 w-[90%]">
        <div class="bg-gradient-to-b from-[var(--background-gradient-from)] to-[var(--background-gradient-to)] w-[calc(65%)] border border-gray-700 p-8 rounded-lg min-h-[350px]
                lg:col-span-2">
            <img src="{grid3}" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white font-bold mt-4 text-[var(--text-primary)]">My Passion for Coding</h2>
            <p class="text-white mt-5 text-[var(--text-primary)] ">
                I love solving problems and building things through code. Programming isn't just my profession, it's my passion.
                I enjoy exploring new technologies, and enhancing my skills.
            </p>
        </div>

        <div class="bg-gradient-to-b from-[var(--background-gradient-from)] to-[var(--background-gradient-to)] w-[30%] border border-gray-700 p-8 rounded-lg min-h-[350px]">
            <img src="{grid4}" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white text-[var(--text-primary)] text-center font-bold mt-2">Contact Me</h2>
            <p class="text-white text-[var(--text-primary)] text-center">
                <a href="mailto:yaokissi.pro@gmail.com" class="text-blue-400 text-[var(--text-primary)] hover:underline">yaokissi.pro@gmail.com</a>
            </p>
        </div>
    </article>
</section>
<style>
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


    @media screen and (max-width: 768px) {
        div {
            width: 48%;
            margin-top: 10px;
        }
    }


    @media screen and (max-width: 480px) {
        div {
            width: 100%;
            margin-top: 10px;
        }
    }
</style>