# DropdownMenu 下拉菜单

下拉菜单组件，用于在页面中展示多个选项的菜单列表。

## 基础用法

`DropdownMenu` 组件由 `fanc-dropdown-menu` 和 `fanc-dropdown-item` 两部分组成，`fanc-dropdown-item` 表示下拉选项。

```vue
<template>
  <fanc-dropdown-menu>
    <fanc-dropdown-item v-model="value1" :options="option1" />
    <fanc-dropdown-item v-model="value2" :options="option2" />
  </fanc-dropdown-menu>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(0);
const value2 = ref("a");

const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
];

const option2 = [
  { text: "默认排序", value: "a" },
  { text: "好评排序", value: "b" },
  { text: "销量排序", value: "c" },
];
</script>
```

## 自定义菜单标题

通过 `title` 属性可以自定义菜单标题。

```vue
<template>
  <fanc-dropdown-menu>
    <fanc-dropdown-item v-model="value1" title="商品类型" :options="option1" />
    <fanc-dropdown-item v-model="value2" title="排序方式" :options="option2" />
  </fanc-dropdown-menu>
</template>
```

## 自定义菜单内容

通过默认插槽可以自定义菜单内容。

```vue
<template>
  <fanc-dropdown-menu>
    <fanc-dropdown-item v-model="value1" title="商品类型" :options="option1" />
    <fanc-dropdown-item title="筛选" ref="item">
      <view class="custom-content">
        <view class="filter-title">价格区间</view>
        <view class="filter-range">
          <fanc-field v-model="minPrice" type="number" placeholder="最低价" />
          <view class="range-separator">-</view>
          <fanc-field v-model="maxPrice" type="number" placeholder="最高价" />
        </view>
        <view class="filter-buttons">
          <fanc-button block type="default" @click="onReset">重置</fanc-button>
          <fanc-button block type="primary" @click="onConfirm"
            >确认</fanc-button
          >
        </view>
      </view>
    </fanc-dropdown-item>
  </fanc-dropdown-menu>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "fantastic-ui";

const value1 = ref(0);
const item = ref(null);
const minPrice = ref("");
const maxPrice = ref("");

const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
];

const onReset = () => {
  minPrice.value = "";
  maxPrice.value = "";
};

const onConfirm = () => {
  item.value.toggle();
  showToast(`价格区间: ${minPrice.value || "0"} - ${maxPrice.value || "不限"}`);
};
</script>

<style>
.custom-content {
  padding: 20px;
}
.filter-title {
  font-size: 16px;
  margin-bottom: 12px;
}
.filter-range {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.range-separator {
  margin: 0 10px;
}
.filter-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
```

## 自定义选中态颜色

通过 `active-color` 属性可以自定义菜单标题和选项的选中态颜色。

```vue
<template>
  <fanc-dropdown-menu active-color="#ee0a24">
    <fanc-dropdown-item v-model="value1" :options="option1" />
    <fanc-dropdown-item v-model="value2" :options="option2" />
  </fanc-dropdown-menu>
</template>
```

## 向上展开

通过 `direction` 属性可以控制菜单的展开方向，支持 `down` 和 `up` 两个方向。

```vue
<template>
  <fanc-dropdown-menu direction="up">
    <fanc-dropdown-item v-model="value1" :options="option1" />
    <fanc-dropdown-item v-model="value2" :options="option2" />
  </fanc-dropdown-menu>
</template>
```

## 禁用菜单

通过 `disabled` 属性可以禁用单个菜单。

```vue
<template>
  <fanc-dropdown-menu>
    <fanc-dropdown-item v-model="value1" disabled :options="option1" />
    <fanc-dropdown-item v-model="value2" :options="option2" />
  </fanc-dropdown-menu>
</template>
```

## 多选菜单

通过 `multiple` 属性可以开启多选模式，此时 `v-model` 绑定的变量需要是数组类型。

```vue
<template>
  <fanc-dropdown-menu>
    <fanc-dropdown-item
      v-model="value3"
      title="多选菜单"
      multiple
      :options="option3"
    />
  </fanc-dropdown-menu>
</template>

<script setup>
import { ref } from "vue";

const value3 = ref([]);

const option3 = [
  { text: "选项一", value: 1 },
  { text: "选项二", value: 2 },
  { text: "选项三", value: 3 },
  { text: "选项四", value: 4 },
];
</script>
```

## API

### DropdownMenu Props

| 参数                | 说明                         | 类型               | 默认值    |
| ------------------- | ---------------------------- | ------------------ | --------- |
| activeColor         | 菜单标题和选项的选中态颜色   | _string_           | `#1989fa` |
| direction           | 菜单展开方向，可选值为 `up`  | _string_           | `down`    |
| zIndex              | 菜单栏 z-index 层级          | _number \| string_ | `10`      |
| duration            | 动画时长，单位秒             | _number \| string_ | `0.2`     |
| overlay             | 是否显示遮罩层               | _boolean_          | `true`    |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单   | _boolean_          | `true`    |
| closeOnClickOutside | 是否在点击外部元素后关闭菜单 | _boolean_          | `true`    |

### DropdownItem Props

| 参数       | 说明                                           | 类型                        | 默认值         |
| ---------- | ---------------------------------------------- | --------------------------- | -------------- |
| v-model    | 当前选中项对应的 value                         | _number \| string \| Array_ | -              |
| title      | 菜单项标题                                     | _string_                    | 当前选中项文字 |
| options    | 选项数组                                       | _Option[]_                  | `[]`           |
| disabled   | 是否禁用菜单                                   | _boolean_                   | `false`        |
| multiple   | 是否为多选模式                                 | _boolean_                   | `false`        |
| teleport   | 指定挂载的节点，等同于 Teleport 组件的 to 属性 | _string \| Element_         | `body`         |
| lazyRender | 是否在显示弹层时才渲染菜单内容                 | _boolean_                   | `true`         |
| titleClass | 标题额外类名                                   | _string_                    | -              |
| popupClass | 弹出菜单额外类名                               | _string_                    | -              |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数                           |
| ------ | ----------------------------- | ---------------------------------- |
| change | 点击选项导致 value 变化时触发 | _value: number \| string \| Array_ |
| open   | 打开菜单栏时触发              | -                                  |
| close  | 关闭菜单栏时触发              | -                                  |
| opened | 打开菜单栏且动画结束后触发    | -                                  |
| closed | 关闭菜单栏且动画结束后触发    | -                                  |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法。

| 方法名 | 说明                                                         | 参数             | 返回值 |
| ------ | ------------------------------------------------------------ | ---------------- | ------ |
| toggle | 切换菜单展示状态，传 true 为显示，false 为隐藏，不传参为取反 | _show?: boolean_ | -      |

### Option 数据结构

| 键名     | 说明                   | 类型               |
| -------- | ---------------------- | ------------------ |
| text     | 文字                   | _string_           |
| value    | 标识符                 | _number \| string_ |
| icon     | 左侧图标名称或图片链接 | _string_           |
| disabled | 是否为禁用状态         | _boolean_          |
