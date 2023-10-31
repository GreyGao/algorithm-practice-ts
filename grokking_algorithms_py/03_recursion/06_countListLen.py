# 计算列表长度
# 基线条件：数组只有0个元素的时候终止
# 递归条件：取出最后一个元素，为数组长度+1，然后继续计算
def countListLen(arr):
  if arr == []:
    return 0
  else:
    return 1 + countListLen(arr[:-1])
  

# TEST
print(countListLen([1,2,3,4,5,6,7,8,9,10]))