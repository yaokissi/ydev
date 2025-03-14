<script>

</script>
<section class=" pt-20 bg-[#010103]">
    <article class="flex flex-wrap justify-between ml-auto mr-auto w-[90%]">
        <div class="bg-[#0e0e10] w-[30%] p-8 border border-gray-700 rounded-lg flex flex-col min-h-[350px]
                lg:col-span-1">
            <img src="/src/assets/grid1.png" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white font-bold mt-4">Hi, I'm Yao</h2>
            <p class="text-white mt-5">
                With 12 years of experience, I have honed my skills in both frontend and backend dev, creating dynamic and responsive websites.
            </p>
        </div>

        <div class="bg-[#0e0e10] w-[30%] border border-gray-700 p-8 rounded-lg flex flex-col min-h-[350px]">
            <img src="/src/assets/grid2.png" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white font-bold mt-4">Tech Stack</h2>
            <p class="text-white mt-5">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
            </p>
        </div>

        <div class="bg-[#0e0e10] w-[30%] border border-gray-700 p-8 rounded-lg min-h-[350px]">
            <img alt="globe" class="object-contain w-full h-[276px]" src="/src/assets/3d-Earth-Globe.svg" />
            <h2 class="text-white font-bold mt-4 text-center">
                I'm very flexible with time zone communications & locations
            </h2>
            <p class="text-white mt-5 text-center">
                I'm based in Rijeka, Croatia and open to remote work worldwide.
            </p>
            <button class="border border-gray-300 text-gray-800 px-5 py-2 rounded cursor w-full sm:w-auto hover:bg-gray-100 text-white mt-4">
                <span class="btn-ping_dot"></span>
                Contact me
            </button>
        </div>
    </article>

    <article class="flex flex-wrap justify-between ml-auto mr-auto mt-10 w-[90%]">
        <div class="bg-[#0e0e10] w-[calc(65%)] border border-gray-700 p-8 rounded-lg min-h-[350px]
                lg:col-span-2">
            <img src="/src/assets/grid3.png" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white font-bold mt-4">My Passion for Coding</h2>
            <p class="text-white mt-5">
                I love solving problems and building things through code. Programming isn't just my profession, it's my passion.
                I enjoy exploring new technologies, and enhancing my skills.
            </p>
        </div>

        <div class="bg-[#0e0e10] w-[30%] border border-gray-700 p-8 rounded-lg min-h-[350px]">
            <img src="/src/assets/grid4.png" alt="avatar" class="object-contain w-full h-[276px]" />
            <h2 class="text-white text-center font-bold mt-2">Contact Me</h2>
            <p class="text-white text-center">
                <a href="mailto:yaokissi.pro@gmail.com" class="text-blue-400 hover:underline">yaokissi.pro@gmail.com</a>
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