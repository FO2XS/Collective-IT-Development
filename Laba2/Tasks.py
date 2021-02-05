import numpy as np
import matplotlib.pyplot as plt


# TODO:
#    Написать функцию, которая сортирует
#    все буквы в строке по возрастанию и
#    возвращает получившуюся строку. Для
#    преобразования строки в массив букв
#    используйте встроенную функцию list.
#    Для сорти-ровки букв используйте функцию
#    sorted. Для обратного преобразования 
#    строки в массив используй-те конструкцию:
#    ‘’.join(a), где a – это массив.
def SortingLetters(s):
    arrayS = list(s)
    arrayS = sorted(arrayS)
    s = ''.join(arrayS)
    return s

# s = "bfbswefb"
# print(SortingLetters(s))


