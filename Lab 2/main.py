import numpy as np
import matplotlib.pyplot as plt

#Task 2
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
    return ''.join(sorted(list(s)))

# s = "bfbswefb"
# print(SortingLetters(s))

#Task 7
#Функция вычисления чисел фибоначи. Функция расчитывает следующих count чисел, кроме начальных prev и curr.
#Kiselev G.L.
def FiboCalc(n):
    if type(n) != int:
        raise Exception ("Нельзя привести n к типу int")
    if n in (1, 2):
        return 1
    return FiboCalc(n - 1) + FiboCalc(n - 2)
#Example of calling function

#Task 9
#Написать функцию, проверяющую у пользователя знание таблицы умножения.
# Функция спрашивает у пользователя два целых числа, а затем спрашивает результат их перемножения.
# Если пользователь ответил верно, функция должна напечатать слово «Верно», иначе «Ошибка. Верный ответ <число>».
# Для ввода значений используйте встроенную функцию input, для преобразования строки к целому числу – функцию int.
#=====================================================
def TestForKnowledgeOfMultiplicationTable(a, b, res):
    '''
    Parameters
    ----------
    a : first number
    b : second number
    res : result

    Returns "True" if a * b == res else "False" 
    '''
    return a * b == res
#Для многократного использования функции проверки знаний таблицы умножения, создана функция повторной проверки
def GameOfMulTable():
    print('число фибоначи для 10:', FiboCalc(10))
    while input('Y для выхода: ') != 'Y':
        try:
            firstNumber = int(input('Введите первое число: '))
            secondNumber = int(input('Введите второе число: '))
            playerResult = int(input('Введите результат умножения этих чисел: '))
            #Вызов функции проверки с результатом в виде строки
            answer = TestForKnowledgeOfMultiplicationTable(firstNumber, secondNumber, playerResult)
            if answer == True:
                print('Верно')
            else:
                print('Ошибка. Верный ответ', (firstNumber*secondNumber))
        except(Exception):
            print("Вы ввели некорректные данные! Попробуйте еще раз:")
            print()
GameOfMulTable()
#====================================================