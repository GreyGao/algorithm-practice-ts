# n!函数
def factorial(x):
  print('factor', x)
  if x == 1:
    return 1
  else:
    return x * factorial(x - 1)
  
# TEST
print(factorial(10))