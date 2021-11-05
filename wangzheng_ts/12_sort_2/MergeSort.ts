/**
 * 归并排序
 * 时间复杂度：O(nlog(n))
 * 空间复杂度：O(n)
 * 稳定性：稳定排序, merge函数需稳定
 * 思路: 分治，先拆至不可拆解，再逐个合并排序
 */
function mergeSort(list: number[]) {
  mergeSortC(list, 0, list.length - 1);
}
function mergeSortC(list: number[], p: number, r: number) {
  if (list.length <= 1) return;
  if (p === r) return;
  const q = Math.floor((r - p) / 2) + p;
  mergeSortC(list, p, q);
  mergeSortC(list, q + 1, r);
  mergeArr(list, p, q, r);
  // console.log('>>>3', list);
}

/** 
 * merge函数
 * i为左数组开始下标，j为右数组开始下标
 * k为临时数组开始下标
 */
function mergeArr(list: number[], p: number, q: number, r: number) {
  let i = p, j = q + 1, k = 0;
  const tmp = [];
  while (i <= q && j <= r) {
    if (list[i] <= list[j]) {
      tmp[k++] = list[i++];
    } else {
      tmp[k++] = list[j++];
    }
  }

  // 检查未遍历完、较长的数组，继续push进tmp数组中
  let start = i;
  let end = q;
  if (j <= r) {
    start = j;
    end = r;
  }
  while (start <= end) {
    tmp[k++] = list[start++];
  }

  // 将数据copy回list对应位置
  for (let n = 0; n < tmp.length; n++) {
    list[p + n] = tmp[n];
  }
}

const arr = Array(20).fill(0).map(item => Math.round(Math.random() * 100));
// const arr = [5, 15, 62, 47];
console.log(arr);
mergeSort(arr);
console.log('Merge Sort:', arr);

