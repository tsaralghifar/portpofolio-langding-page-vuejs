<template>
<body class="antialiased">
        <div class="content-wrapper theme-light bg-background-primary" style="width: 1350px; height: 950px;" :class="theme">
            <div class="w-20 h-10 absolute" style="left: 1198px; top: 59px;">
                <a href="#" @click.prevent="toggleTheme" class="flex items-center justify-start flex-1 h-full py-2 pl-2 pr-12 bg-background-secondary rounded-full focus:outline-none">
                    <img v-if="theme === 'theme-light'" src="img/sun.png" alt="sun">
                    <img v-else src="img/moon.png" alt="sun">
                </a>
            </div>
            <p class="absolute text-6xl font-medium text-kata-primary" style="left: 150px; top: 154px;">Hello! Saya <br/>Tsar Alghifari,<br/>Seorang Web <br/>Programmer</p>
            <div class="inline-flex space-x-14 items-center justify-end w-60 h-8 absolute" style="left: 886px; top: 61px;">
                <a href="#" class="text-xl font-medium text-kata-secondary">Portfolio</a>
                <a href="#" class="text-xl font-medium text-kata-secondary">Certificate</a>
            </div>
            <div class="inline-flex flex-col space-y-5 items-center justify-end absolute" style="width: 661px; height: 232px; left: 150px; top: 556px;">
                <p class="text-lg font-light leading-loose text-kata-ternary" style="width: 661px;">Seorang Fullstack Web Developer dan UI Designer, membuat website dan design yang  kompleks dan minimalis sesuai kebutuhan user adalah tugas saya. Menghabiskan waktu berjam-jam untuk eksplorasi design dan coding. Kalian dapat melihat karya saya di Github dan Dribble.</p>
                <p class="text-lg font-light leading-loose text-kata-ternary" style="width: 661px;">Saya aktif di Twitter lebih fokus pembahasan web development, design dan meme, saya sering membaca thread tentang tips design dan coding.</p>
            </div>
            <div class="inline-flex space-x-12 items-center justify-end w-56 h-10 absolute" style="left: 150px; top: 827px;">
                <a href="https://twitter.com/algtsar" target="_blank" class="flex items-center justify-center w-10 h-10 pt-0.5 pb-1">
                    <img v-if="theme === 'theme-light'" src="img/twit.png" alt="">
                    <img v-else src="img/twit-dark.png" alt="">
                </a>
                <a href="https://github.com/tsaralghifar" target="_blank" class="flex items-center justify-center w-10 h-10 px-0.5 pt-0.5 pb-1">
                    <img v-if="theme === 'theme-light'" src="img/git.png" alt="">
                    <img v-else src="img/git-dark.png" alt="">
                </a>
                <a href="https://api.whatsapp.com/send?phone=6282252317669" target="_blank" class="flex items-center justify-center w-10 h-10 p-0.5">
                    <img v-if="theme === 'theme-light'" src="img/wa.png" alt="">
                    <img v-else src="img/wa-dark.png" alt="">
                </a>
            </div>
            <div class="relative absolute" style="width: 450px; height: 450px; left: 855px; top: 154px;">
                <img v-if="theme === 'theme-light'" src="img/avatar.png" alt="">
                <img v-else src="img/illu.png" alt="">
            </div>
        </div>
    </body>


</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            theme: 'theme-light'
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme == 'theme-light' ? 'theme-dark' : 'theme-light'
        }
    }
}
</script>

<style src="./index.css" />