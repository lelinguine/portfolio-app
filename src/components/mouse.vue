<script>
    class ClickSpark extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.root = document.documentElement;
        this.svg;
    }

    get activeEls() {
        return this.getAttribute("active-on");
    }

    connectedCallback() {
        this.setupSpark();

        const clickSound = document.querySelector(".click-sound");
                
        // Function to play click sound
        const playClickSound = () => {
            if (clickSound) {
                clickSound.playbackRate = 1.3; // Play sound 2x faster
                clickSound.currentTime = 0; // Reset to start for rapid clicks
                clickSound.play().catch(e => console.log('Audio play failed:', e));
            }
        };

        this.root.addEventListener("mousedown", (e) => {
            if (this.activeEls && !e.target.matches(this.activeEls)) return;
            
            playClickSound();
            this.setSparkPosition(e);
            this.animateSpark();
        });
    }

    animateSpark() {
        let sparks = [...this.svg.children];
        let size = parseInt(sparks[0].getAttribute("y1"));
        let offset = size / 2 + "px";

        let keyframes = (i) => {
        let deg = `calc(${i} * (360deg / ${sparks.length}))`;

        return [
            {
            strokeDashoffset: size * 3,
            transform: `rotate(${deg}) translateY(${offset})`
            },
            {
            strokeDashoffset: size,
            transform: `rotate(${deg}) translateY(0)`
            }
        ];
        };

        let options = {
        duration: 660,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        fill: "forwards"
        };

        sparks.forEach((spark, i) => spark.animate(keyframes(i), options));
    }

    setSparkPosition(e) {
        let rect = this.root.getBoundingClientRect();

        this.svg.style.left =
        e.clientX - rect.left - this.svg.clientWidth / 2 + "px";
        this.svg.style.top =
        e.clientY - rect.top - this.svg.clientHeight / 2 + "px";
    }

    setupSpark() {
        let template = `
        <style>
            :host {
                display: contents;
            }
            
            svg {
                pointer-events: none;
                position: absolute;
                rotate: -20deg;
                stroke: var(--click-spark-color, currentcolor);
                z-index: 999999;
            }

            line {
                stroke-dasharray: 30;
                stroke-dashoffset: 30;
                transform-origin: center;
            }
        </style>
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
            ${Array.from(
            { length: 8 },
            (_) => `<line x1="50" y1="30" x2="50" y2="4"/>`
            ).join("")}
        </svg>
        `;

        this.shadowRoot.innerHTML = template;
        this.svg = this.shadowRoot.querySelector("svg");
    }
    }

    customElements.define("click-spark", ClickSpark);

    // Move cursor logic to Vue's mounted hook to ensure DOM is ready
    export default {
        mounted() {
            const cursor = document.querySelector(".cursor");

            if (cursor) {
                window.addEventListener("mousemove", (e) => {
                    cursor.style.left = e.clientX + "px";
                    cursor.style.top = e.clientY + "px";
                    cursor.style.display = "block";
                });
                document.body.addEventListener("mouseleave", () => {
                    cursor.style.display = "none";
                });

                // Change cursor background on .icons hover
                const icons = document.querySelectorAll(".hover");
                icons.forEach(icon => {
                    icon.addEventListener("mouseenter", () => {
                        cursor.classList.add("enter");
                    });
                    icon.addEventListener("mouseleave", () => {
                        cursor.classList.remove("enter");
                    });
                });

                // Add click class when .header is clicked, unless cursor is already showing .cursor.png
                const headers = document.querySelectorAll(".header");

                headers.forEach(header => {
                    header.addEventListener("mouseenter", () => {
                        cursor.classList.add("hand");
                    });
                    header.addEventListener("mouseleave", () => {
                        cursor.classList.remove("hand");
                    });
                });
            }
        }
    };
</script>

<template>
    <click-spark></click-spark>
    <div class="cursor"></div>
    <audio class="click-sound" preload="auto">
        <source src="../assets/mouse/sound.mp3" type="audio/mpeg">
    </audio>
</template>

<style>
    .cursor {
        z-index: 9999999;
        position: fixed;
        pointer-events: none;
        transform: translate(-50%, -50%);
        width: 42px;
        height: 42px;
        background-image: url('../assets/mouse/pointor.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: none;
    }

    .enter {
        background-image: url('../assets/mouse/cursor.png') !important;
    }

    .hand {
        background-image: url('../assets/mouse/hand.png');
    }
</style>