export default {
  title: "Fantastic UI",
  description: "A Vue.js UI Component Library",
  lang: "zh-CN",
  themeConfig: {
    nav: [
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
            { text: "Button 按钮", link: "/components/button" },
            { text: "Icon 图标", link: "/components/icon" },
            { text: "Image 图片", link: "/components/image" },
          ],
        },
        {
          text: "表单组件",
          items: [
            { text: "Form 表单", link: "/components/form" },
            { text: "Field 输入框", link: "/components/field" },
            { text: "Radio 单选框", link: "/components/radio" },
            { text: "Checkbox 复选框", link: "/components/checkbox" },
            { text: "DatePicker 日期选择器", link: "/components/date-picker" },
            { text: "Picker 选择器", link: "/components/picker" },
            {
              text: "NumberKeyboard 数字键盘",
              link: "/components/number-keyboard",
            },
          ],
        },
        {
          text: "反馈组件",
          items: [
            { text: "Dialog 对话框", link: "/components/dialog" },
            { text: "Toast 轻提示", link: "/components/toast" },
            { text: "Popup 弹出层", link: "/components/popup" },
            { text: "ActionSheet 动作面板", link: "/components/action-sheet" },
            { text: "Message 消息提示", link: "/components/message" },
          ],
        },
        {
          text: "展示组件",
          items: [
            { text: "Cell 单元格", link: "/components/cell" },
            { text: "Popover 气泡弹出框", link: "/components/popover" },
            { text: "NoticeBar 通知栏", link: "/components/noticebar" },
            { text: "SwipeCell 滑动单元格", link: "/components/swipe-cell" },
            { text: "Calendar 日历", link: "/components/calendar" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/your-username/fantastic-ui" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Fantastic UI",
    },
  },
};
