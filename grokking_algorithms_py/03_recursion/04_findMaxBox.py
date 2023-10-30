# D&C 分而治之
# 找到最大的正方形切分
def findMaxBox(width, height):
  long = max(width, height)
  short = min(width, height)
  if long == 2 * short:
    return short
  else:
    remainder = long % short
    return findMaxBox(short, remainder)

# 测试方形 1680x640 期待结果:80x80
print(findMaxBox(1680, 640))