/**
 * 快速排序
 * 时间复杂度：O(nlog(n))
 * 空间复杂度：O(1)
 * 稳定性：不稳定排序, partition函数会发生交换元素打乱顺序
 * 思路: 分治，每分区一次，进行一次排序
 */
export function quickSort(list: number[]) {
  quickSortC(list, 0, list.length - 1);
}
function quickSortC(list: number[], p: number, r: number) {
  if (list.length <= 1) return;
  if (p >= r) return;
  // 先分区，排序
  const pivot = partition(list, p, r);
  // 分区再递归
  quickSortC(list, p, pivot - 1);
  quickSortC(list, pivot + 1, r);
}

function partition(list: number[], p: number, r: number): number {
  let pivotValue = list[r];
  let i = p;
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
// const arr2 = Array(20).fill(0).map(item => Math.round(Math.random() * 100));
// const arr = [6, 11, 3, 9, 8];
// console.log(arr2);
// quickSort(arr2);
// console.log('Quick Sort:', arr2);