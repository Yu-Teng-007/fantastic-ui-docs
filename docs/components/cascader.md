# Cascader 级联选择器

级联选择器，用于从一组相关联的数据集合中进行选择，常用于省市区、公司层级、分类目录等场景。

## 基础用法

级联选择器需要通过 `options` 属性来定义选项数据，通过 `v-model` 绑定选中的数据。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="地区"
    :value="fieldValue"
    placeholder="请选择所在地区"
    @click="showPicker = true"
  />
  <fanc-cascader
    v-model="selectedValue"
    title="请选择所在地区"
    :options="options"
    v-model:show="showPicker"
    @finish="onFinish"
    @close="onClose"
  />
</template>

<script setup>
import { ref, computed } from "vue";

const showPicker = ref(false);
const selectedValue = ref([]);

// 选项数据结构
const options = [
  {
    text: "广东省",
    value: "110000",
    children: [
      {
        text: "广州市",
        value: "110100",
        children: [
          { text: "天河区", value: "110101" },
          { text: "海珠区", value: "110102" },
        ],
      },
      {
        text: "深圳市",
        value: "110200",
        children: [
          { text: "南山区", value: "110201" },
          { text: "福田区", value: "110202" },
        ],
      },
    ],
  },
  {
    text: "浙江省",
    value: "120000",
    children: [
      {
        text: "杭州市",
        value: "120100",
        children: [
          { text: "西湖区", value: "120101" },
          { text: "余杭区", value: "120102" },
        ],
      },
      {
        text: "宁波市",
        value: "120200",
        children: [
          { text: "海曙区", value: "120201" },
          { text: "江北区", value: "120202" },
        ],
      },
    ],
  },
];

// 根据选中的值获取对应的文本
const fieldValue = computed(() => {
  if (!selectedValue.value.length) {
    return "";
  }

  const texts = [];
  let currentOptions = options;
  selectedValue.value.forEach((value) => {
    const option = currentOptions.find((item) => item.value === value);
    if (option) {
      texts.push(option.text);
      currentOptions = option.children || [];
    }
  });

  return texts.join("/");
});

const onFinish = ({ selectedOptions }) => {
  showPicker.value = false;
  console.log("选中的值:", selectedValue.value);
  console.log("选中的选项:", selectedOptions);
};

const onClose = () => {
  showPicker.value = false;
};
</script>
```

## 自定义字段名

通过 `field-names` 属性可以自定义 `options` 中数据的字段名称。

```vue
<template>
  <fanc-cascader
    v-model="selectedValue"
    title="请选择所在地区"
    :options="options"
    :field-names="{ text: 'name', value: 'code', children: 'items' }"
    v-model:show="showPicker"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const selectedValue = ref([]);

// 自定义字段名的数据结构
const options = [
  {
    name: "广东省",
    code: "110000",
    items: [
      {
        name: "广州市",
        code: "110100",
        items: [
          { name: "天河区", code: "110101" },
          { name: "海珠区", code: "110102" },
        ],
      },
    ],
  },
];
</script>
```

## 异步加载选项

通过 `lazy-load` 属性可以设置异步加载选项，通过 `loading` 属性控制加载状态。

```vue
<template>
  <fanc-cascader
    v-model="selectedValue"
    title="请选择所在地区"
    :options="options"
    :lazy-load="onLoadOptions"
    v-model:show="showPicker"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const selectedValue = ref([]);
const options = ref([
  { text: "广东省", value: "110000" },
  { text: "浙江省", value: "120000" },
]);

// 模拟异步加载数据
const onLoadOptions = (option) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (option.value === "110000") {
        resolve([
          { text: "广州市", value: "110100" },
          { text: "深圳市", value: "110200" },
        ]);
      } else if (option.value === "110100") {
        resolve([
          { text: "天河区", value: "110101" },
          { text: "海珠区", value: "110102" },
        ]);
      } else if (option.value === "110200") {
        resolve([
          { text: "南山区", value: "110201" },
          { text: "福田区", value: "110202" },
        ]);
      } else if (option.value === "120000") {
        resolve([
          { text: "杭州市", value: "120100" },
          { text: "宁波市", value: "120200" },
        ]);
      } else {
        resolve([]);
      }
    }, 500);
  });
};
</script>
```

## 自定义选项内容

通过 `option` 插槽可以自定义选项内容。

```vue
<template>
  <fanc-cascader
    v-model="selectedValue"
    title="请选择所在地区"
    :options="options"
    v-model:show="showPicker"
  >
    <template #option="{ option, selected }">
      <view class="custom-option">
        <fanc-icon
          :name="selected ? 'check-circle' : 'circle'"
          :color="selected ? '#1989fa' : '#999'"
        />
        <text :style="{ color: selected ? '#1989fa' : '#333' }">{{
          option.text
        }}</text>
      </view>
    </template>
  </fanc-cascader>
</template>

<style>
.custom-option {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
}
</style>
```

## 自定义选中值

通过 `value-key` 属性可以控制选择器的返回值，设置为 `all` 会返回各列选中项的值，设置为 `last` 仅返回最后一列的值。

```vue
<template>
  <fanc-cascader
    v-model="selectedValue"
    title="请选择所在地区"
    :options="options"
    value-key="last"
    v-model:show="showPicker"
    @finish="onFinish"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const selectedValue = ref("");

const onFinish = ({ selectedOptions }) => {
  console.log("选中的值:", selectedValue.value); // 仅返回最后一列的值
  console.log("选中的选项:", selectedOptions);
};
</script>
```

## API

### Props

| 参数         | 说明                                         | 类型                                       | 默认值                                                   |
| ------------ | -------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| v-model      | 选中项的值                                   | _string[] \| number[] \| string \| number_ | -                                                        |
| v-model:show | 是否显示选择器                               | _boolean_                                  | `false`                                                  |
| title        | 顶部标题                                     | _string_                                   | -                                                        |
| options      | 可选项数据源                                 | _Option[]_                                 | `[]`                                                     |
| placeholder  | 未选中时的提示文案                           | _string_                                   | `请选择`                                                 |
| active-color | 选中状态的高亮颜色                           | _string_                                   | `#1989fa`                                                |
| swipeable    | 是否可以滑动切换                             | _boolean_                                  | `true`                                                   |
| closeable    | 是否显示关闭图标                             | _boolean_                                  | `true`                                                   |
| close-icon   | 关闭图标名称或图片链接                       | _string_                                   | `cross`                                                  |
| field-names  | 自定义 `options` 结构中的字段名              | _object_                                   | `{ text: 'text', value: 'value', children: 'children' }` |
| value-key    | 选择器值的类型，可选值为 `all` `last`        | _string_                                   | `all`                                                    |
| lazy-load    | 是否开启动态加载，需要传入加载数据的回调函数 | _(option: Option) => Promise<Option[]>_    | -                                                        |

### Events

| 事件名    | 说明                       | 回调参数                                                                                           |
| --------- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| change    | 选中项变化时触发           | _{ value: string[] \| number[] \| string \| number, selectedOptions: Option[], tabIndex: number }_ |
| finish    | 全部选项选择完成后触发     | _{ value: string[] \| number[] \| string \| number, selectedOptions: Option[], tabIndex: number }_ |
| close     | 点击关闭图标或遮罩层时触发 | -                                                                                                  |
| click-tab | 点击标签时触发             | _tabIndex: number, title: string_                                                                  |

### Option 数据结构

| 键名     | 说明         | 类型               |
| -------- | ------------ | ------------------ |
| text     | 选项文字     | _string_           |
| value    | 选项对应的值 | _string \| number_ |
| children | 子选项列表   | _Option[]_         |
| disabled | 是否禁用选项 | _boolean_          |

### Slots

| 名称    | 说明             | 参数                                    |
| ------- | ---------------- | --------------------------------------- |
| title   | 自定义顶部标题   | -                                       |
| option  | 自定义选项内容   | _{ option: Option, selected: boolean }_ |
| toolbar | 自定义工具栏内容 | -                                       |
