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

/**
 * @param { number | string } num
 * @return { string } res
 * */
lc_tools.thousands = num => {
  let res = "" + num;
  // 判断当前这个数是否合法
  if (res !== num * 1 + "") {
    console.error(new Error("请输入一个合法的数字"));
    return "error";
  }
  let strArr = res.split("");
  let index = strArr.indexOf(".");
  index = index === -1 ? strArr.length : index;
  index -= 3;
  // 处理整数部分千分位
  for (; index > 0; index -= 3) {
    strArr.splice(index, 0, ",");
  }
  return strArr.join("");
};

/**
 * @param {string | Object } json
 * @return {string | Object } res
 * */
lc_tools.toJson = json => {
  let res = null;
  try {
    // 判断当前是什么数据类型
    if (typeof json === "string") {
      res = JSON.parse(json);
    } else {
      res = JSON.stringify(json);
    }
  } catch (e) {
    console.error(e);
    return "error";
  }
  return res;
};

/**
 * @param { string } format
 * @param { Date | number } time
 * @return { string } res
 * */
lc_tools.getDate = (format = "Y-M-D", time = new Date()) => {
  // 验证当前从传入的时间格式是否正确
  try {
    time = new Date(time);
    if (isNaN(time.getDate())) {
      throw new Error("时间格式错误！");
    }
  } catch (e) {
    console.error(e);
    return;
  }

  // 获取时间的函数
  let getTime = t => {
    let strTime = "";
    switch (t) {
      case "Y":
        // 获取年
        strTime = time.getFullYear();
        break;
      case "M":
        // 获取月
        strTime = time.getMonth() + 1 + "";
        strTime = strTime.length > 1 ? strTime : "0" + strTime;
        break;
      case "D":
        // 获取日
        strTime = time.getDate() + "";
        strTime = strTime.length > 1 ? strTime : "0" + strTime;
        break;
      case "h":
        // 获取小时
        strTime = time.getHours() + "";
        strTime = strTime.length > 1 ? strTime : "0" + strTime;
        break;
      case "m":
        // 获取分钟
        strTime = time.getMinutes() + "";
        strTime = strTime.length > 1 ? strTime : "0" + strTime;
        break;
      case "s":
        // 获取秒
        strTime = time.getSeconds() + "";
        strTime = strTime.length > 1 ? strTime : "0" + strTime;
        break;
      default:
        strTime = t;
    }
    return strTime;
  };

  let res = "";
  // 循环获取
  for (let i = 0, len = format.length; i < len; i++) {
    let t = getTime(format[i]);
    if (t !== "error") {
      res += t;
    } else {
      console.error(new Error("请传入正确的时间格式！"));
      return "error";
    }
  }
  return res;
};

export default lc_tools;
