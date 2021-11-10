/**
 * 计数排序
 * 可以认为是一种特殊的桶排序
 * 当数据范围不大，数据量较大时，适合使用
 * 当要排序的 n 个数据，所处的范围并不大的时候，比如最大值是 k，我们就可以把数据划分成 k 个桶。每个桶内的数据值都是相同的，省掉了桶内排序的时间。
 * 输入数据需要校正至正整数开始（排序完再校正回去）
 * 因为只涉及扫描遍历操作，所以时间复杂度是 O(n)。
 * 空间复杂度O(n)
 */

function countingSort(list: number[]) {
  if (list.length <= 1) return;
  // 1.确定数组的数据范围
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }

  // 2.初始化计数的数组
  const c: number[] = new Array(max + 1);
  for (let i = 0; i < c.length; i++) {
    c[i] = 0;
  }

  // 3.计算每个元素的数量放入计数数组
  for (let i = 0; i < list.length; i++) {
    c[list[i]]++;
  }

  // 4.计算计数数组的累加值
  for (let i = 1; i < c.length; i++) {
    c[i] += c[i - 1];
  }

  // 5.初始化临时数组，根据计数数组的累计值填回临时数组对应下标位置
  const tmp: number[] = [];
  for (let i = list.length - 1; i >= 0; i--) {
    // 累计值 - 1是这个值应该在的下标
    const index = c[list[i]] - 1;
    tmp[index] = list[i];
    c[list[i]]--;
  }

  // 6.将临时数组的值重新指回原数组
  for (let i = 0; i < list.length; i++) {
    list[i] = tmp[i];
  }
}

/** 测试 */
const arr5 = Array(20).fill(0).map(item => Math.round(Math.random() * 100));
// const arr5 = [94, 10, 37, 71, 84, 1, 48, 65, 30, 53, 96, 12, 56, 60, 16, 70, 97, 33, 67, 44];
console.log(arr5);
countingSort(arr5);
console.log('Counting sort:', arr5);