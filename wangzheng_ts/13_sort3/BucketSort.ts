import { quickSort } from '../12_sort_2/QuickSort'
/**
 * 桶排序对数据的要求比较高
 * 首先要知道数据的范围
 * 然后根据范围将数据分到小范围的桶中
 * 每个桶采用快速排序/插入排序处理（稳定/非稳定）
 * 当桶的数量接近数据量大小的时候，时间复杂度为O(n)
 */

function bucketSort(list: number[], bucketSize: number = 1) {
  if (list.length <= 1) return;
  // 1. 确定数据的范围（最大值，最小值）
  let min = list[0], max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    } else if (list[i] > max) {
      max = list[i];
    }
  }
  // 2. 确定桶的数量, 初始化桶
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  // 3. 遍历数据，将数据放进每个桶中
  for (let i = 0; i < list.length; i++) {
    const j = Math.floor((list[i] - min) / bucketSize);
    buckets[j].push(list[i]);
  }
  // console.log(buckets);
  // 4. 对每个桶进行一次排序，将所有桶中数据依次写回数组
  let k = 0;
  for (let i = 0; i < bucketCount; i++) {
    quickSort(buckets[i]);
    for (let j = 0; j < buckets[i].length; j++) {
      list[k++] = buckets[i][j];
    }
  }
}

/** 测试 */
const arr4 = Array(20).fill(0).map(item => Math.round(Math.random() * 100));
// const arr4 = [94, 10, 37, 71, 84, 1, 48, 65, 30, 53, 96, 12, 56, 60, 16, 70, 97, 33, 67, 44];
console.log(arr4);
bucketSort(arr4, 10);
console.log('Bucket sort:', arr4);