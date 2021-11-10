/**
 * 二分查找变形
 * 约定输入数据以从小到大排列为前提
 * 1. 查找第一个值等于给定值的元素
 * 2. 查找最后一个值等于给定值的元素
 * 3. 查找第一个大于等于给定值的元素
 * 4. 查找最后一个小于等于给定值的元素
 */

// 1. 查找第一个值等于给定值的元素
function findFirstEqual(list: number[], target: number): number {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor(high + (high - low) >> 1);
    if (target === list[mid]) {
      /** 1000w次循环测试 使用内部while循环性能更好, 无需重复计算mid */
      while (mid - 1 >= 0 && list[mid - 1] === list[mid]) {
        mid--;
      }
      return mid;
    }

    if (target < list[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

// 2. 查找最后一个值等于给定值的元素
function findLastEqual(list: number[], target: number): number {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor(high + (high - low) >> 1);
    if (target === list[mid]) {
      while (mid + 1 < list.length - 1 && list[mid + 1] === list[mid]) {
        mid++;
      }
      return mid;
    }
    if (target < list[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 3. 查找第一个大于等于给定值的元素
function findFirstGreaterOrEqual(list: number[], target: number): number {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor(high + (high - low) >> 1);
    if (list[mid] >= target) {
      if (mid === 0 || list[mid - 1] < target) {
        return mid;
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// 4. 查找最后一个小于等于给定值的元素
function findLastLessOrEqual(list: number[], target: number): number {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    let mid = Math.floor(high + (high - low) >> 1);
    if (list[mid] <= target) {
      if (mid === list.length - 1 || list[mid + 1] > target) {
        return mid;
      }
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}


/** 测试 */
const testBinarySearch = [1, 1, 5, 8, 8, 8, 16, 22, 22, 22, 27, 31, 34, 45, 55, 59, 61, 61, 69, 88, 88, 88];
const listTimes = 1000000;
console.log('First Equal:', findFirstEqual(testBinarySearch, 8));
console.log('Last Equal:', findLastEqual(testBinarySearch, 8));
console.log('First Greater or Equal:', findFirstGreaterOrEqual(testBinarySearch, 21));
console.log('Last Less or Equal:', findLastLessOrEqual(testBinarySearch, 8));

/** 1000w次测试 */
// console.time('times')
// for (let i = 0; i < listTimes; i++) {
//   findFirstEqual(testBinarySearch, 8);
// }
// console.timeEnd('times')