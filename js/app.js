Vue.component('link-cascadia', {
    template: `
        <a href="" class="group flex items-center text-do-blue-light hover:text-do-blue-medium font-cascadia text-lg font-bold mt-4">
            <slot></slot>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4 transition-all group-hover:ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </a>
    `
})


Vue.component('panel-card', {
    template: `
            <div class="bg-white transition-shadow hover:shadow-2xl rounded-lg">
                <div>
                    <slot name="image"></slot>
                </div>
                <div class="py-6 px-6">
                    <div class="uppercase text-sky-500 tracking-widest">
                        <slot name="type"></slot>
                    </div>

                    <div class="font-semi-bold text-lg my-2">
                        <slot name="title"></slot>
                    </div>

                    <div class="text-gray-500 text-sm flex justify-between">
                        <div class="flex w-1/2">
                            <slot name="date"></slot>
                        </div>
                        <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -6 24 24" width="24"
                                fill="currentColor">
                                <path
                                    d="M18 6c0-1.81-3.76-3.985-8.007-4C5.775 1.985 2 4.178 2 6c0 1.825 3.754 4.006 7.997 4C14.252 9.994 18 7.82 18 6zm-8 6c-5.042.007-10-2.686-10-6S4.984-.017 10 0c5.016.017 10 2.686 10 6s-4.958 5.993-10 6zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">
                                </path>
                            </svg>
                            <slot name="visits"></slot>
                        </div>
                    </div>
                    
                </div>
            </div>
    `
})




new Vue({
    el: '#app',

    data: {
        theme: 'light',
    },

    mounted() {
        this.theme = localStorage.theme ?? 'system'
        this.applyTheme()
    },

    methods: {
        setDarkMode() {
            localStorage.theme = 'dark'
            document.getElementById('app').classList.add('dark')
            this.theme = 'dark'
            this.applyTheme()
        },
        setLightMode() {
            localStorage.theme = 'light'
            document.getElementById('app').classList.remove('dark')
            this.theme = 'light'
            this.applyTheme()
        },
        setSystemMode() {
            localStorage.removeItem('theme')
            document.getElementById('app').classList.remove('dark')
            this.theme = 'system'
            this.applyTheme()
        },

        applyTheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }
})



const menuBtn = document.getElementById('menu-btn');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuBtn.querySelector('svg:last-of-type').classList.toggle('hidden');
  menuBtn.querySelector('svg:first-of-type').classList.toggle('hidden');
});


// const menuBtn = document.getElementById("menu-btn");
// const menuOpen = document.getElementById("menu-open");
// const menuClose = document.getElementById("menu-close");
// const menu = document.getElementById("menu");


// menuBtn.addEventListener("click", function() {
//   if (menu.classList.contains("hidden")) {    
//     menu.classList.remove("hidden"); 
//      menuOpen.classList.add("hidden");
//     menuClose.classList.remove("hidden");
//   } else {
//     menu.classList.add("hidden");
//     menuOpen.classList.remove("hidden");
//     menuClose.classList.add("hidden");
//   }
// });