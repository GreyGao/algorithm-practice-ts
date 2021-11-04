/**
 * 1) 冒泡排序
 * 2) 插入排序
 * 3) 选择排序
 */

/**
 * 冒泡排序
 * 时间复杂度：最好O(n), 最坏O(n^2), 平均O(n^2)
 * 空间复杂度：O(1)
 * 稳定性：稳定排序
 */
let count1 = 0;
function BubbleSort(list: number[]): number[] {
  if (list.length <= 1) return list;
  // 每个元素都经历一次冒泡
  for (let i = 0; i < list.length; i++) {
    let changed = false;
    // 如果后一个元素比前一个大，就向上冒泡，减去已经排序过的元素数量
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        const tmp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = tmp;
        changed = true;
        count1++;
      }
    }
    if (!changed) {
      break;
    }
  }
  return list;
}

/**
 * 插入排序
 * 时间复杂度：最好O(n), 最坏O(n^2), 平均O(n^2)
 * 空间复杂度：O(1)
 * 稳定性：稳定排序
 */
let count2 = 0;
function insertSort(list: number[]): number[] {
  if (list.length <= 1) return list;
  // 从第2个元素开始选择插入位置
  loop1:
  for (let i = 1; i < list.length; i++) {
    // 从第i-1个元素开始比较插入
    let j = i - 1;
    const v = list[i];
    loop2:
    for (j; j >= 0; j--) {
      count2++;
      // 需要数据搬移
      if (list[j] > v) {
        list[j + 1] = list[j];
      } else {
        // 已排序区间已无需再继续循环比较
        break loop2;
      }
    }
    // console.log(i);
    // console.log(j);

    list[j + 1] = v;
  }
  return list;
}

/**
 * 选择排序
 * 时间复杂度：最好O(n^2), 最坏O(n^2), 平均O(n^2)
 * 空间复杂度：O(1)
 * 稳定性：不稳定排序, 交换位置后会破坏排序
 */
let count3 = 0;
function selectSort(list: number[]): number[] {
  if (list.length <= 1) return list;
  for (let i = 0; i < list.length; i++) {
    let tmp = list[i];
    let min = i;
    for (let j = i + 1; j < list.length; j++) {
      count3++;
      if (list[j] < list[min]) {
        min = j;
      }
    }
    list[i] = list[min];
    list[min] = tmp;
  }
  return list;
}


/** 测试 */
const arr1 = [4, 5, 6, 1, 2, 3];
const arr2 = [4, 5, 6, 1, 2, 3];
const arr3 = [4, 5, 6, 1, 2, 3];
const result1 = BubbleSort(arr1);
console.log('Bubble Sort:', result1, count1);
const result2 = insertSort(arr2);
console.log('Insert Sort:', result2, count2);
const result3 = selectSort(arr3);
console.log('Select Sort:', result3, count3);