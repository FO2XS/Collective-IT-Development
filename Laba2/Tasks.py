
#Функция вычисления чисел фибоначи. Функция расчитывает следующих count чисел, кроме начальных prev и curr.
def FiboCalc(prev, curr, count):
    print(prev)
    if count < 0: return 0
    count = count-1
    FiboCalc(curr, prev+curr, count)



FiboCalc(0, 1, 10)
