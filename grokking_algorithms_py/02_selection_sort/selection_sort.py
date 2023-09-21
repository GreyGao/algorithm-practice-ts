# 寻找最小的元素的idx 复杂度O(n)
def findSmallestIdx(arr):
  if len(arr) == 0:
    return None
  min = 0
  for i in range(len(arr)):
    num = arr[i]
    if num <= arr[min]:
      min = i
  return min


# 选择排序 复杂度O(n^2)
def selectionSort(arr):
  newArr = []
  for i in range(len(arr)):
    minIdx = findSmallestIdx(arr)
    newArr.append(arr[minIdx])
    del arr[minIdx]
  return newArr

# 测试
test_list = [5, 3, 1, 2, 3, 1, 4, 11, 0, -1]

# print(findSmallestIdx(test_list))
print('选择排序:', test_list)
print(selectionSort(test_list))