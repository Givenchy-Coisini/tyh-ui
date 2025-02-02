# Card 卡片

## 基本使用

卡片的基础用法

title 自定义卡片的主标题

subtitle 自定义卡片的副标题

<tyh-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>

```html
<tyh-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>
```

## 简约卡片

<tyh-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>

```html
<tyh-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>
```

## 阴影显示时机

shadow 属性可以配置阴影显示时机

<tyh-card class="tyh-card-item" shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</tyh-card>

<tyh-card class="tyh-card-item" shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</tyh-card>

<tyh-card class="tyh-card-item">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</tyh-card>

```html
<tyh-card shadow="always">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>总是显示阴影</p>
</tyh-card>

<tyh-card shadow="hover">
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>鼠标移入显示</p>
</tyh-card>

<tyh-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</tyh-card>
```

## Attributes

| 参数       | 说明             | 类型   | 可选值         | 默认值         |
| ---------- | ---------------- | ------ | -------------- | -------------- |
| shadow     | 阴影显示时机     | string | always / hover | ——             |
| body-style | 自定义 body 样式 | object | ——             | {padding:20px} |

## Slots

| 插槽名称 | 说明说明           |
| -------- | ------------------ |
| title    | 自定义卡片的主标题 |
| subtitle | 自定义卡片的副标题 |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/list">
    List 列表
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/tag">
    Tag 标签
  </tyh-turn-page-item>
</tyh-turn-page>
