'use strict';

class Helpers {

  constructor(setting){
    this.setting = setting
  }

  checkVarType(obj) {
    let toString = Object.prototype.toString;
    let map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
    return map[toString.call(obj)];
  }

  /**
   * @description 简单深拷贝
   * @param json
   * @returns {any}
   */
  cloneDeep(json) {
    if (this.checkVarType(json) === 'object'
      || this.checkVarType(json) === 'array'
    ) {
      return JSON.parse(JSON.stringify(json));
    }
    return json;
  }

  /***
   * @description 随机数字值
   * @param min 最小数
   * @param max 最大数
   * @returns {*}
   */
  random(min, max) {
    let Range = max - min;
    let Rand = Math.random();
    return (min + Math.round(Rand * Range));
  }


  /**
   * @description 检测查找数组是否在原数组中
   * @param sourceArray 原数组
   * @param findArray 查找数组
   * @returns {boolean}
   */
  inArray(sourceArray = [], findArray = []){
    if(this.checkVarType(sourceArray) === 'array' &&
      this.checkVarType(findArray) === 'array'
    ){
      let sourceArraylen = sourceArray.length;
      let find = this.cloneDeep(findArray);
      let temp = [];
      //console.log(findArray, sourceArray)
      for(let i =0 ;i < sourceArraylen;i++) {
        let sourceVal = sourceArray[i];
        for( let k = 0 ; k < find.length; k++) {
          if(find[k] === sourceVal) {
            temp.push(true);
            find.splice(k,1);
            break;
          }
        }
      }
      //console.log('kkkkk',findArray, temp);
      return findArray.length === temp.length;
    }
    else {
      return false;
    }
  }



  /**
   * @description 检查对象或者数组是否为空
   * @param obj
   * @return boolean
   */
  isEmpty(obj) {
    if (this.checkVarType(obj) === 'array' ||
      this.checkVarType(obj) === 'object'
    ) {
      let str = JSON.stringify(obj);
      if (str === '{}' || str === '[]') {
        return true;
      } else {
        return false;
      }
    } else {
      console.log('isEmpty.error', obj);
      throw new Error('只支持数组与JSON对象格式');
    }
  }




  /**
   * @description 去掉左边指定字符串
   * @param str
   * @param replaceStr
   * @returns {string}
   */
  tirmL(str = '', replaceStr = ',') {
    if (!str || this.checkVarType(str) !== 'string') {
      return str;
    }
    let homeReg = new RegExp(`^(${replaceStr})(.+)$`);
    let homeMatchStr = str.match(homeReg);
    if (homeMatchStr) str = homeMatchStr[2];
    return str;
  }

  /**
   * @description 去掉右边指定字符串
   * @param str
   * @param replaceStr
   * @returns {string}
   */
  tirmR(str = '', replaceStr = ',') {
    if (!str || this.checkVarType(str) !== 'string') {
      return str;
    }
    let endReg = new RegExp(`^(.+)(${replaceStr})$`);
    let endMatchStr = str.match(endReg);
    if (endMatchStr) str = endMatchStr[1];
    return str;
  }

  /**
   * @description 去掉两部指定字符串
   * @param str
   * @param replaceStr
   * @return {string}
   */
  tirm(str = '', replaceStr = ',') {
    str = this.tirmL(str, replaceStr);
    str = this.tirmR(str, replaceStr);
    return str;
  }

  /**
   * @description 搜索到匹配关键字高亮处理
   * @param str {string} 需要检索的字符串
   * @param keyword {string|array} 搜索关键字
   * @param options {object}
   * @param options.tag 有效的html中有效的tag标签
   * @param options.color 匹配的字符高亮颜色 默认：red
   * @param options.weight
   * ，css font-weight有效值，默认：normal
   * @returns {*}
   */
  searchHigh(str, keyword, options = {}) {
    try {
      let __option = {
        tag: 'span',
        color: 'red',
        weight: 'normal',
      };
      if (this.checkVarType(keyword) === 'array') {
        keyword = keyword.join('|');
      } else if (this.checkVarType(keyword) === 'string') {
        keyword = keyword.trim();
      } else {
        throw new Error('关键字类型错误')
      }
      let opt = Object.assign({}, __option, options);
      let reg = new RegExp(`(${keyword})`, 'ig');
      return str.replace(reg, `<${opt.tag} style="color:${opt.color};font-weight: ${opt.weight}">$1</${opt.tag}>`);
    } catch (e) {
      console.error(e)
      return str;
    }
  }

  /**
   * @description 加载js文件
   * @param src
   * @param done
   */
  sripts(src, done) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    document.body.appendChild(s);
    s.onload = () => {
      done();
    }
  }

  /**
   * @description 加载js|css文件
   * @param arr {string|array} js地址 ['http://www.xxx.com/xxx.js'] | 'http://www.xxx.com/xxx.js'
   * @param type {string} // type=css|js
   * @return {Promise}
   */
  loadFile(arr, type = 'js') {
    let loader = [];
    if (this.checkVarType(arr) === 'string' || this.checkVarType(arr) === 'array') {
      if (this.checkVarType(arr) === 'string') {
        arr = [arr];
      }
      let len = arr.length;
      return new Promise((resolve) => {
        arr.map((value) => {
          let fnName = 'sripts';
          if (type === 'css') {
            fnName = 'css';
          }
          this[fnName](value, () => {
            loader.push(value);
            if (len === loader.length) {
              resolve(loader);
            }
          })
        });
      });
    } else {
      console.error('传入的参数格式错误', arr);
      throw Error('传入的参数格式错误');
      return new Promise((resolve, reject) => {
        reject('传入的参数格式错误')
      });
    }

  }

  /**
   * @description 加载文件
   * @param url
   * @param done
   */
  css(url, done) {
    let ele = document.createElement('link');
    ele.type = "text/css";
    ele.rel = "stylesheet";
    ele.href = url;
    document.head.appendChild(ele);
    ele.onload = () => {
      setTimeout(() => {
        done();
      }, 500);
    }
  }



}

export default new Helpers();
