<script>
    import { BriefcaseBusiness } from 'lucide-svelte';

    const Experiences = [

        {company: '',companyLogo:'', role: '', startDate: '', endDate: ''},
        {company: '',companyLogo:'', role: '', startDate: '', endDate: ''},
        {company: '',companyLogo:'', role: '', startDate: '', endDate: ''},
        {company: '',companyLogo:'', role: '', startDate: '', endDate: ''},
    ]
</script>
    <div class="w-[100%] mx-auto p-10 flex justify-around text-white bg-[#010103]">
        <div>
            <h2>
                My <span>pro</span> experiences
            </h2>
        </div>
        <div class="bg-[#0e0e10] w-[30%] p-1 border border-gray-700 rounded-xl">
            <div class="p-5 border border-gray-700 rounded-xl">
            <div class="flex">
                <BriefcaseBusiness class="text-gray-700"></BriefcaseBusiness>
                <p class="ml-3">Work</p>
            </div>
            <div class="flex justify-between mt-5">
                <div class="flex justify-between">
                    <div class="bg-[#27272A] rounded-full border-2 border-zinc-700 shadow-zinc-800">
                        <img src="/assets/llclogo.png" width="45" alt="llc consulting logo">
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
    </div>
<style>

</style>