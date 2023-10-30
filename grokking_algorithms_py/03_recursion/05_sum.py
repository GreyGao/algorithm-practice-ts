# 求和函数
def sum(arr):
  if len(arr) == 0:
    return 0
  elif len(arr) == 1:
    return arr[0]
  else:
    return arr[-1] + sum(arr[:-1]) 
  
print(sum([1,2,3,4,5]))