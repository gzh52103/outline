/**
 * 每个模块拥有独立的作用域，外部无法直接访问，除非导出
 * ESModule中把一个文件当作一个模块，一个模块就是一个对象，导出的变量就是这个模块对象的属性
 * 导出：export
 */

// 给模块对象添加username属性
export const username = 'laoxie';

// 给模块对象添加getData方法
export function getData() {
    return username.toUpperCase();
}

class Tools {

}

// 给模块对象添加default属性
// export default Tools

// 给模块对象批量添加属性
const a = 10;
const b = 20;
export {
    a as x,
    b
}

// 给模块对象添加default属性，值为一个对象
export default {
   c:30,
   d:40 
}

/*
    // 传统用法
    <script src="user.js"></script>

    // ESModule用法
    import user from './user.js'
*/