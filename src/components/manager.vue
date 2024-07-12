<script setup>
    import Window from './window.vue';

    import About from './about.vue';
    import More from './more.vue';
    import Files from './files.vue';

    const windows = [
        { component: 'About', top: '20%', left: '10%', width: '340px', height: '180px' },
        { component: 'Files', top: '30%', left: '50%', width: '540px', height: '340px' },
        { component: 'More', top: '60%', left: '20%', width: '340px', height: '180px' }
    ];

    // const projects = [
    //     { top: '20%', left: '10%', width: '340px', height: '180px' },
    //     { top: '30%', left: '50%', width: '540px', height: '340px' },
    //     { top: '60%', left: '20%', width: '340px', height: '180px' }
    // ];
    
</script>

<template>

    <Window v-for="(windows, index) in windows" :key="index" :header="windows.component" :width="windows.width" :height="windows.height" :top="windows.top" :left="windows.left">
        <About v-if="windows.component === 'About'" />
        <Files v-else-if="windows.component === 'Files'" />
        <More v-else-if="windows.component === 'More'" />
    </Window>

</template>