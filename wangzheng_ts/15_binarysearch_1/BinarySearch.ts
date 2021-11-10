let count1 = 0;
function binarySearch(list: number[], target: number): number {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    count1++;
    /** 使用进位符 等于 (high - low) / 2^1 */
    let mid = Math.floor(low + (high - low) >> 1);
    if (target === list[mid]) {
      return mid;
    } else if (target < list[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

/**
 * 使用递归实现
 */
let count2 = 0;
function binarySearchInternally(list: number[], target: number) {
  return binarySearchInternallyC(list, target, 0, list.length - 1);
}

function binarySearchInternallyC(list: number[], target: number, low: number, high: number) {
  count2++;
  if (low > high) return -1;
  let mid = Math.floor(low + (high - low) / 2);
  if (target === list[mid]) {
    return mid;
  } else if (target < list[mid]) {
    return binarySearchInternallyC(list, target, low, mid - 1);
  } else {
    return binarySearchInternallyC(list, target, mid + 1, high);
  }
}

/** 测试 */
const testBinarySearch = [1, 5, 8, 16, 22, 27, 31, 34, 45, 55, 59, 61, 69, 88];
console.log('Binary Search:', binarySearch(testBinarySearch, 45), count1);
console.log('Binary SearchInternally:', binarySearchInternally(testBinarySearch, 45), count2);