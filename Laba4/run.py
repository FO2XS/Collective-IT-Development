import numpy as np
from kNN import k_nearest


X = np.array([[33,21,1],
      [41,13,1],
      [18,22,1],
      [38,34,1],
      [62,118,2],
      [59,137,2],
      [95,131,2],
      [83,110,2],
      [185,155,3],
      [193,129,3],
      [164,135,3],
      [205,131,3],
      [145,55,4],
      [168,35,4],
      [135,47,4],
      [138,66,4]])

print("Введите рост особи: ")
height = int(input())
print("Введите вес особи: ")
weight = int(input())
obj = np.array([height, weight])

# классификация методом k ближайших соседей
k = 3
object_class = k_nearest(X, k, obj)

# вывод результата классификации
monkeys = {1: 'lemur', 2: 'schimpanze', 3: 'gorilla', 4: 'orangutan'}
print(monkeys[object_class])