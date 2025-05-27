<template>
    <div class="simulator-container" :class="{ 'simulator-hidden': !showSimulator }">
        <div class="simulator-content">
            <Layout />
        </div>
        <div class="simulator-device" v-if="showSimulator">
            <div class="simulator-iframe-wrapper">
                <iframe class="simulator-iframe" :src="simulatorUrl" frameborder="0" ref="simulatorIframe"></iframe>
            </div>
        </div>
        <div class="simulator-toggle" v-if="!showSimulator" @click="toggleSimulator">
            <svg viewBox="0 0 1024 1024" width="20" height="20">
                <path
                    d="M128 224h768a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m0 256h768a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m0 256h768a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z"
                    fill="currentColor"
                ></path>
            </svg>
            显示模拟器
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import DefaultTheme from "vitepress/theme";
import { useRoute } from "vitepress";

const { Layout } = DefaultTheme;
const route = useRoute();
const showSimulator = ref(true);
const simulatorIframe = ref(null);
const isMobileView = ref(false);

// Base URL for the Fantastic UI demo
const baseSimulatorUrl = "https://yu-teng-007.github.io/fantastic-ui/#/";

// Computed property for the simulator URL
const simulatorUrl = computed(() => {
    if (!isComponentPage()) return baseSimulatorUrl;

    // Extract component name from path
    const componentName = route.path.split("/").pop();

    // Map component name to demo path
    // You may need to adjust this mapping based on your actual demo routes
    return `${baseSimulatorUrl}${componentName}`;
});

// Only show simulator on component pages
const isComponentPage = () => {
    return route.path.startsWith("/components/") && route.path !== "/components/";
};

watch(
    () => route.path,
    () => {
        // 如果是组件页面，始终显示模拟器
        if (isComponentPage()) {
            showSimulator.value = true;
        } else if (isMobileView.value) {
            // 在移动视图中，如果不是组件页面，则隐藏模拟器
            showSimulator.value = false;
        }
    },
    { immediate: true }
);

const toggleSimulator = () => {
    // 如果是组件页面，不允许隐藏模拟器
    if (isComponentPage()) return;

    showSimulator.value = !showSimulator.value;
};

// 检查是否为移动视图
const checkMobileView = () => {
    isMobileView.value = window.innerWidth < 768;

    // 如果是组件页面，始终显示模拟器
    if (isComponentPage()) {
        showSimulator.value = true;
    } else if (isMobileView.value) {
        // 在移动视图中，如果不是组件页面，则隐藏模拟器
        showSimulator.value = false;
    }
};

onMounted(() => {
    // 初始检查视图大小
    checkMobileView();

    // 监听窗口大小变化
    window.addEventListener("resize", checkMobileView);

    // Add message listener for communication with iframe if needed
    window.addEventListener("message", (event) => {
        // Handle messages from the iframe if needed
        if (event.origin === "https://yu-teng-007.github.io") {
            console.log("Message from simulator:", event.data);
        }
    });
});
</script>
