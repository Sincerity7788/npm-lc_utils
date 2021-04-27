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

#### 功能清单

```
1、lc_utils.is_exist // 数组查询指定项
2、lc_utils.thousands // 为数字或者字符串添加千分位
3、lc_utils.toJson // 自动转换JSON格式的数据
4、lc_utils.getDate // 获取格式化日期
```

#### 功能示例

​		1、lc_utils.is_exist 数组查询指定项

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

​		2、lc_utils.thousands 数字千分位

```js
// 使用方式
import lc_utils from 'lc_utils';
// 参数 number|string
let res = lc_utils.thousands(12334.123);
// res = 12,334.123
let res = lc_utils.thousands('12334.123');
// res = 12,334.123
```

​		3、lc_utils.toJson 自动转换json格式的数据，可以自动检测数据类型，对应转成对象或者json字符串

```js
// 使用方式
import lc_utils from 'lc_utils';
let json = '{"name":"lc"}';
let res = lc_utils.toJson(json);
// res = { name: 'lc' };
let obj = { name: 'lc' };
res = lc_utils.toJson(obj);
// res = '{"name":"lc"}'
```

​		4、lc_utils.getDate 获取指定格式的日期字符串，根据不同的格式获取自由组合

```js
// 使用方式
import lc_utils from 'lc_utils';
// 获取年
let res = lc_utils.getDate('Y');// res = 2021
// 获取月
res = lc_utils.getDate('M'); // res = 04
// 获取日
res = lc_utils.getDate('D'); // res = 27
// 获取小时
res = lc_utils.getDate('h'); // res = 11
// 获取分钟
res = lc_utils.getDate('m'); // res = 10
// 获取秒
res = lc_utils.getDate('s'); // res = 33

// 参数1说明
Y = 年
M = 月
D = 天
h = 小时
m = 分钟
s = 秒数
// 可以任意自由组合以及连接符

res = lc_utils.getDate('Y-M-D'); // res = 2021-04-27
res = lc_utils.getDate('Y/M/D'); // res = 2021/04/27
res = lc_utils.getDate('Y M D'); // res = 2021 04 27
res = lc_utils.getDate('Y-M-D h:m:s'); // res = 2021-04-27 11:10:33

// 参数2说明
res = lc_utils.getDate('Y-M-D', new Date());// res = 2021-04-27
// 参数二是一个时间对象，或者时间戳或者是正确的时间格式的字符串，可以根据用户传入的不同时间来获取格式化的日期
```



#### 联系方式

```
邮箱： dei@live.cn
公众号： 二哥前端学习之路
```

​		该工具库会持续更新，如果哪里写的不好的，请联系我。或者您有更好的一些思路。以及开发过程中遇到一些适合添加到工具库中的也请您联系我。

#### Npm上的地址

```
https://www.npmjs.com/package/lc_utils
```

