import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Fantastic UI",
  description: "一个简洁、易用的移动端 Vue 组件库",
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
            { text: "按钮 Button", link: "/components/button" },
            { text: "单元格 Cell", link: "/components/cell" },
            { text: "图标 Icon", link: "/components/icon" },
            { text: "图片 Image", link: "/components/image" },
            { text: "弹出层 Popup", link: "/components/popup" },
          ],
        },
        {
          text: "表单组件",
          items: [
            { text: "日历 Calendar", link: "/components/calendar" },
            { text: "级联选择 Cascader", link: "/components/cascader" },
            { text: "复选框 Checkbox", link: "/components/checkbox" },
            { text: "日期选择器 DatePicker", link: "/components/date-picker" },
            { text: "输入框 Field", link: "/components/field" },
            { text: "表单 Form", link: "/components/form" },
            {
              text: "数字键盘 NumberKeyboard",
              link: "/components/number-keyboard",
            },
            { text: "选择器 Picker", link: "/components/picker" },
            { text: "单选框 Radio", link: "/components/radio" },
            { text: "搜索框 Search", link: "/components/search" },
            { text: "签名 Signature", link: "/components/signature" },
            { text: "步进器 Stepper", link: "/components/stepper" },
          ],
        },
        {
          text: "反馈组件",
          items: [
            { text: "动作面板 ActionSheet", link: "/components/action-sheet" },
            { text: "对话框 Dialog", link: "/components/dialog" },
            { text: "消息提示 Message", link: "/components/message" },
            { text: "通知栏 NoticeBar", link: "/components/noticebar" },
            { text: "轻提示 Toast", link: "/components/toast" },
          ],
        },
        {
          text: "展示组件",
          items: [
            { text: "单元格组 CellGroup", link: "/components/cell-group" },
            {
              text: "下拉菜单 DropdownMenu",
              link: "/components/dropdown-menu",
            },
            { text: "弹出气泡 Popover", link: "/components/popover" },
            { text: "滑动单元格 SwipeCell", link: "/components/swipe-cell" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-username/fantastic-ui" },
    ],
  },
});
