<template>
    <div class="simulator-container" :class="{ 'simulator-hidden': !showSimulator }">
        <div class="simulator-content" :data-path="route.path">
            <Layout />
        </div>
        <div class="simulator-device" v-if="showSimulator && isComponentsPage()">
            <div class="simulator-iframe-wrapper">
                <iframe class="simulator-iframe" :src="simulatorUrl" frameborder="0" ref="simulatorIframe"></iframe>
            </div>
        </div>
        <button class="simulator-toggle" v-if="!showSimulator && isComponentsPage()" @click="toggleSimulator">
            <svg viewBox="0 0 1024 1024" width="20" height="20">
                <path
                    d="M128 224h768a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m0 256h768a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m0 256h768a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z"
                    fill="currentColor"
                ></path>
            </svg>
            显示模拟器
        </button>
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

    // Special case for button component to use our local demo
    if (componentName === "button") {
        return "/button-demo.html";
    }

    // Map component name to demo path
    // You may need to adjust this mapping based on your actual demo routes
    return `${baseSimulatorUrl}${componentName}`;
});

// 检查是否在组件页面路径下
const isComponentsPage = () => {
    return route.path.includes("/components");
};

// 检查是否为具体组件页面（不是组件首页）
const isComponentPage = () => {
    return route.path.startsWith("/components/") && route.path !== "/components/";
};

watch(
    () => route.path,
    () => {
        // 如果在组件路径下，则显示模拟器
        if (isComponentsPage()) {
            showSimulator.value = true;
        } else {
            // 不在组件路径下，隐藏模拟器
            showSimulator.value = false;
        }
    },
    { immediate: true }
);

const toggleSimulator = () => {
    // 只在组件路径下允许切换模拟器
    if (!isComponentsPage()) return;

    showSimulator.value = !showSimulator.value;
};

// 检查是否为移动视图
const checkMobileView = () => {
    isMobileView.value = window.innerWidth < 768;

    // 如果在组件路径下，并且不是移动视图，则显示模拟器
    if (isComponentsPage() && !isMobileView.value) {
        showSimulator.value = true;
    } else if (isMobileView.value) {
        // 在移动视图中，默认隐藏模拟器
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
