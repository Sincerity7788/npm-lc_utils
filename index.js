const lc_tools = {};
/**
 * @param { array } arr
 * @param { string | number } ele
 * @param { string } key
 * @return { Object } res
 * */
lc_tools.is_exist = (arr = [], ele = "", key = "") => {
  // 判断当前数组是否合法
  if (!Array.isArray(arr)) {
    return new Error("请传入合法的数组!");
  }
  // 判断key是否合法
  if (Object.prototype.toString.call(key) !== "[object String]") {
    return new Error("请传入合法的key参数!");
  }
  // 定义结果
  let res = {
    match: ele, // 当前匹配的元素
    index: -1, // 下标
    is_exist: false, // 是否查到
    arr // 当前匹配的数组
  };

  // 遍历当前数组
  for (let i = 0, len = arr.length; i < len; i++) {
    // 判断当前是匹配一个还是匹配属性
    if (key) {
      if (arr[i][key] === ele) {
        // 是否查到
        res.is_exist = true;
        // 当前下标
        res.index = i;
        res.key = key; // 当前匹配的key
        break;
      }
    } else {
      if (arr[i] === ele) {
        // 是否查到
        res.is_exist = true;
        // 当前下标
        res.index = i;
        break;
      }
    }
  }
  return res;
};

export default lc_tools;
