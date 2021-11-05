/**
 * O(n)的时间复杂度内求无序数组的第K大元素
 * 如[4,2,5,12,3]的第3大元素就是4
 * 这里也是使用了分治和分区的思想
 * 每一次partition之后，找到k存在的分区继续向下
 */
function kthNum(list: number[], k): number | null {
  if (k > list.length) return null;
  return findK(list, 0, list.length - 1, k);
}

/** 
 * 第K个元素对应下标pivot=K-1
 */
function findK(list: number[], p: number, r: number, k: number): number {
  const pivot = partition(list, p, r);
  if (pivot + 1 === k) {
    return list[pivot];
  }
  if (k > pivot + 1) {
    return findK(list, pivot + 1, r, k);
  } else {
    return findK(list, p, pivot - 1, k);
  }
}

function partition(list: number[], p: number, r: number): number {
  let i = p;
  let pivotValue = list[r];
  for (let j = p; j <= r - 1; j++) {
    if (list[j] < pivotValue) {
      let tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
      i++;
    }
  }
  list[r] = list[i];
  list[i] = pivotValue;
  return i;
}


/** 测试 */
const arr3 = Array(10).fill(0).map(item => Math.round(Math.random() * 100));
// const arr3 = [8, 33, 57, 100, 64];
const v = kthNum(arr3, 2);
console.log(arr3);
console.log('Kth num:', v);