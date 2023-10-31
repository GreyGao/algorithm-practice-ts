# 找出列表中最大的数字
# 基线条件：数组中没有待比较的元素了
# 递归条件：当前数组的最后一个元素是不是比目标值大，留下最大的

def compare_max(arr, num):
  if arr == []:
    return num
  else:
    maxNum = max(arr[-1], num)
    return compare_max(arr[:-1], maxNum)

def find_max_num(arr):
  if len(arr) == 0 or len(arr) == 1:
    return arr[0]
  else:
    return compare_max(arr[:-1], arr[-1])
 
  
#TEST
print(find_max_num([2,99,3,4,12,131,999]))
print(find_max_num([9123, 1, 22, 32, -1, -32 ]))
