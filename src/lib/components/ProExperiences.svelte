<script>
    import { BriefcaseBusiness } from 'lucide-svelte';

    import llclogo from '/src/lib/assets/llclogo.png';
    import devours_logo from '/src/lib/assets/devours_logo.jpeg';
    import logoEthicPortage from '/src/lib/assets/logoEthicPortage.jpg';
    import plantaorLogo from '/src/lib/assets/plantaorLogo.jpg';


    const Experiences = [

        {
            company: "LLC Consulting",
            companyLogo:llclogo,
            companyWebsite:'',
            role: "Web developer",
            startDate: '',
            endDate: ''
        },
        {
            company: "Devours",
            companyLogo:devours_logo,
            companyWebsite:'',
            role: '',
            startDate: '',
            endDate: ''
        },
        {
            company: "Ethic Portage",
            companyLogo:logoEthicPortage,
            companyWebsite:'',
            role: '',
            startDate: '',
            endDate: ''
        },
        {
            company: "Plantaor",
            companyLogo:plantaorLogo,
            companyWebsite:'',
            role: '',
            startDate: '',
            endDate: ''},
    ]

</script>
    <div class="w-[100%] mx-auto p-10 flex justify-around text-white bg-[#010103]">
        <div>
            <h2>
                My <span>pro</span> experiences
            </h2>
        </div>
        <div class="bg-[#0e0e10] w-[30%] p-5 border border-gray-700 rounded-xl">
            <div class="flex">
                <BriefcaseBusiness class="text-gray-700"></BriefcaseBusiness>
                <p class="ml-3">Work</p>
            </div>
            <div class="flex justify-between mt-5">
                <div class="flex justify-between ">
                    <div class="bg-[#27272A] rounded-full border-2 border-zinc-700 shadow-zinc-800">
                        <img src="/src/lib/assets/llclogo.png" width="45" alt="llc consulting logo">
                    </div>
                   <div class="ml-4">
                       LLC Consulting <br>
                       Web developer
                   </div>
                </div>
                <p>04 / 2024 — Present</p>
            </div>
        </div>
    </div>
<style>

</style>