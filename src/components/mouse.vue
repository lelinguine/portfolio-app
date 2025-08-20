<script>
class ClickSpark extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: contents; }
                svg { pointer-events: none; position: absolute; rotate: -20deg; stroke: var(--click-spark-color, currentcolor); z-index: 999999; }
                line { stroke-dasharray: 30; stroke-dashoffset: 30; transform-origin: center; }
            </style>
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                ${Array.from({ length: 8 }, () => `<line x1="50" y1="30" x2="50" y2="4"/>`).join("")}
            </svg>
        `;
    }
}
customElements.define("click-spark", ClickSpark);

export default {
    mounted() {
        const cursor = document.querySelector(".cursor");
        if (!cursor) return;

        // Cursor movement
        window.addEventListener("mousemove", e => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            cursor.style.display = "block";
        });
        document.body.addEventListener("mouseleave", () => {
            cursor.style.display = "none";
        });

        // Cursor style on hover (delegation pour éléments dynamiques)
        document.addEventListener("mouseenter", e => {
            if (e.target.classList && e.target.classList.contains("hover")) {
                cursor.classList.add("enter");
            }
        }, true);
        document.addEventListener("mouseleave", e => {
            if (e.target.classList && e.target.classList.contains("hover")) {
                cursor.classList.remove("enter");
            }
        }, true);
        document.querySelectorAll(".header").forEach(header => {
            header.addEventListener("mouseenter", () => cursor.classList.add("hand"));
            header.addEventListener("mouseleave", () => cursor.classList.remove("hand"));
        });

        // Click spark and sound
        const clickSound = document.querySelector(".click-sound");
        const spark = document.querySelector("click-spark");
        if (spark) {
            window.addEventListener("mousedown", e => {
                if (clickSound) {
                    clickSound.playbackRate = 1.25;
                    clickSound.currentTime = 0;
                    clickSound.volume = 0.25;
                    clickSound.play().catch(() => {});
                }
                // Spark animation
                const svg = spark.shadowRoot.querySelector("svg");
                if (!svg) return;
                const sparks = [...svg.children];
                const size = 30, offset = size / 2 + "px";
                sparks.forEach((sparkEl, i) => {
                    let deg = i * (360 / sparks.length);
                    sparkEl.animate([
                        { strokeDashoffset: size * 3, transform: `rotate(${deg}deg) translateY(${offset})` },
                        { strokeDashoffset: size, transform: `rotate(${deg}deg) translateY(0)` }
                    ], { duration: 660, easing: "cubic-bezier(0.25, 1, 0.5, 1)", fill: "forwards" });
                });
                // Spark position
                svg.style.left = e.clientX - svg.clientWidth / 2 + "px";
                svg.style.top = e.clientY - svg.clientHeight / 2 + "px";
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
    width: 38px;
    height: 38px;
    background-image: url('../assets/mouse/pointor.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    display: none;
}

@media screen and (orientation: portrait) {
    .cursor {
        display: none !important;
    }
}
  
.enter { background-image: url('../assets/mouse/cursor.png') !important; }
.hand { background-image: url('../assets/mouse/hand.png'); }
click-spark {
    display: contents;
}
click-spark svg {
    pointer-events: none;
    position: absolute;
    rotate: -20deg;
    stroke: var(--click-spark-color, currentcolor);
    z-index: 999999;
}
click-spark line {
    stroke-dasharray: 30;
    stroke-dashoffset: 30;
    transform-origin: center;
}
</style>