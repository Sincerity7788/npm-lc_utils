# lc_utils JavaScript开发中常用的工具

#### 获取lc_utils

```js
// npm 全局安装
npm install lc_utils -g
// npm 当前依赖
npm install lc_utils
// yarn 全局安装
yarn global add lc_utils 
// yarn 当前依赖
yarn add lc_utils
```

#### 简介

​		lc_utils这个工具库主要是集成在开发过程中一些比较常见需求，但是实现起来需要一些比较繁琐的代码。比如查找一个数组中指定项。单纯的基础数据类型的数组还好，如果是一个object的数组。匹配起来就比较麻烦一些。

#### 功能

​		is_exist 数组查询指定项

```js
// 使用方式
import lc_utils from 'lc_utils';

// 查询的数组
let arr = [{name: 'lc'}, {name: 'lc2'}, {name: 'lc3'}, {name: 'lc4'}];
// 条件： 查询数组中 name 等于 lc 的那一项

// 参数1 = 查询数组
// 参数2 = 匹配内容
// 参数3 = 匹配字段
let res = lc_utils.is_exist(arr, 'lc', 'name');

// res 返回结果是一个对象
{
  match: 'lc',// 查询项
  key: 'name',// 查询字段
  is_exist: true,// 是否存在
  arr: [ { name: 'lc' }, { name: 'lc2' }, { name: 'lc3' }, { name: 'lc4' } ],// 原数组
  index: 0,// 匹配的索引位置
}


// 可以用于普通查询
let intArr = [1,2,3,4,5,6];
// 查询条件： 查找 4 
let res = lc_utils.is_exist(arr, 4);
// 查询结果   
{ match: 4, is_exist: true, arr: [ 1, 2, 3, 4, 5, 6 ], index: 3 }


```

#### 联系方式

```
邮箱： dei@live.cn
```

​		该工具库会持续更新，如果哪里写的不好的，请联系我。或者您有更好的一些思路。以及开发过程中遇到一些适合添加到工具库中的也请您联系我。