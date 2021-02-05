
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


#Функция вычисления чисел фибоначи. Функция расчитывает следующих count чисел, кроме начальных prev и curr.
#Kiselev G.L.
def FiboCalc(prev, curr, count):
    print(prev)
    if count < 0: return 0
    count = count-1
    FiboCalc(curr, prev+curr, count)
#Example of calling function
#FiboCalc(0, 1, 10)


def TestForKnowledgeOfMultiplicationTable(a, b, res):
    '''
    Parameters
    ----------
    a : first number
    b : second number
    res : result

    Returns "True" if a * b == res else "False" 
    '''
    return "True" if a * b == res else "False" 
def GameOfMulTable():
    while input('Y для выхода: ') != 'Y':
        firstNumber = int(input('Введите первое число: '))
        secondNumber = int(input('Введите второе число: '))
        playerResult = int(input('Введите результат умножения этих чисел: '))
        #Вызов функции проверки с результатом в виде строки
        # answer = def...
        # print(asnwer)

