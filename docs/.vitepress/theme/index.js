import DefaultTheme from "vitepress/theme";
import SimulatorLayout from "./SimulatorLayout.vue";
import "./styles/simulator.css";

export default {
    extends: DefaultTheme,
    Layout: SimulatorLayout,
    enhanceApp({ app }) {
        // Register global components
    },
};
