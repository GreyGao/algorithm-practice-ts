# 二分查找法
# 输入一个数组，寻找指定目标值的下标
def binary_search(list, item) :
  low = 0
  high = len(list) - 1
  count = 0

  while low <= high:
    count = count + 1
    print('计数: ',count)

    # 中点
    mid = (low + high) // 2
    guess = list[mid]

    if(guess == item):
      return mid
    if(guess > item):
      high = mid - 1
    else:
      low = mid + 1

  return None

test_list = list(range(1, 100+1))
target = 50

print('测试数组:', test_list)
print('寻找目标:', target)
print('结果:',binary_search(test_list, target))


