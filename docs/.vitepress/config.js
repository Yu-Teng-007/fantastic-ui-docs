import { defineConfig } from "vitepress";

export default defineConfig({
    base: "/fantastic-ui-docs/", // 添加 GitHub Pages 的基础路径
    title: "Fantastic UI",
    description: "一个简洁、易用的移动端 Vue 组件库",
    head: [
        ["link", { rel: "icon", href: "/fantastic-ui-docs/logo.svg" }],
        // Add viewport meta tag to ensure proper mobile display
        ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    ],
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            { text: "首页", link: "/" },
            { text: "指南", link: "/guide/" },
            { text: "组件", link: "/components/" },
        ],
        sidebar: {
            "/guide/": [
                {
                    text: "指南",
                    items: [
                        { text: "介绍", link: "/guide/" },
                        { text: "快速上手", link: "/guide/quickstart" },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        { text: "按钮 Button", link: "/components/fanc-button" },
                        { text: "图标 Icon", link: "/components/fanc-icon" },
                        { text: "单元格 Cell", link: "/components/fanc-cell" },
                        { text: "单元格组 CellGroup", link: "/components/fanc-cell-group" },
                        { text: "图片 Image", link: "/components/fanc-image" },
                        { text: "弹出层 Popup", link: "/components/fanc-popup" },
                    ],
                },
                {
                    text: "表单组件",
                    items: [
                        { text: "表单 Form", link: "/components/fanc-form" },
                        { text: "输入框 Field", link: "/components/fanc-field" },
                        { text: "复选框 Checkbox", link: "/components/fanc-checkbox" },
                        { text: "复选框组 CheckboxGroup", link: "/components/fanc-checkbox-group" },
                        { text: "单选框 Radio", link: "/components/fanc-radio" },
                        { text: "单选框组 RadioGroup", link: "/components/fanc-radio-group" },
                        { text: "步进器 Stepper", link: "/components/fanc-stepper" },
                        { text: "搜索框 Search", link: "/components/fanc-search" },
                        { text: "签名 Signature", link: "/components/fanc-signature" },
                        { text: "上传 Uploader", link: "/components/fanc-uploader" },
                        { text: "数字键盘 NumberKeyboard", link: "/components/fanc-number-keyboard" },
                        { text: "选择器 Picker", link: "/components/fanc-picker" },
                        { text: "日期选择器 DatePicker", link: "/components/fanc-date-picker" },
                        { text: "日历 Calendar", link: "/components/fanc-calendar" },
                        { text: "级联选择器 Cascader", link: "/components/fanc-cascader" },
                    ],
                },
                {
                    text: "反馈组件",
                    items: [
                        { text: "轻提示 Toast", link: "/components/fanc-toast" },
                        { text: "对话框 Dialog", link: "/components/fanc-dialog" },
                        { text: "动作面板 ActionSheet", link: "/components/fanc-action-sheet" },
                        { text: "消息提示 Message", link: "/components/fanc-message" },
                    ],
                },
                {
                    text: "展示组件",
                    items: [
                        { text: "通知栏 NoticeBar", link: "/components/fanc-noticebar" },
                        { text: "滑动单元格 SwipeCell", link: "/components/fanc-swipe-cell" },
                        { text: "气泡弹出框 Popover", link: "/components/fanc-popover" },
                    ],
                },
                {
                    text: "导航组件",
                    items: [{ text: "下拉菜单 DropdownMenu", link: "/components/fanc-dropdown-menu" }],
                },
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/your-username/fantastic-ui" }],
        // Add footer config
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present Yu Teng",
        },
    },
});
