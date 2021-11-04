/** 
 * 1) 爬楼梯问题
 */

/**
 * 假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？
 * 如果有 7 个台阶，你可以 2，2，2，1 这样子上去，也可以 1，2，1，1，2 这样子上去，
 * 总之走法有很多，那如何用编程求得总共有多少种走法呢？
 */
let count = 0;
function fn(n: number) {
  if (n <= 0) return 0
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (fnMap.has(n)) {
    return fnMap.get(n);
  }
  const ret = fn(n - 1) + fn(n - 2);
  fnMap.set(n, ret);
  count++;
  return ret;
}
/** 使用hash map保存已经递归过的值，避免重复计算 */
const fnMap = new Map();

/** 测试 */
const result = fn(20);
console.log('Stairs Result:', result);
console.log('Recursive count:', count);
