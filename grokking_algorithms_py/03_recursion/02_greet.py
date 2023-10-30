def greet2(name):
  print('how are you, ', name, '?')


def bye():
  print('ok bye!')


def greet(name):
  print('hello, ', name, '!')
  # push callstack
  greet2(name)
  # pop callstack
  print('getting ready to say bye..')
  # push callstack
  bye()
  # pop callstack


# TEST
greet('grey')