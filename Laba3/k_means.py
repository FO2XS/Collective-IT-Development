import numpy as np


def dist(A, B):
    '''
    евклидово расстояние между двумя точками
    '''
    
    r = 0
    for i in range(len(A)):
        r = r + (A[i] - B[i]) ** 2
    r = np.sqrt(r)
    return r


def class_of_each_point(X, centers):
    '''
    возвращает список индексов ближайших центров по каждой точке
    '''
    m = len(X)
    k = len(centers)

    # матрица расстояний от каждой точки до каждого центра
    distances = np.zeros((m, k))
    for i in range(m):
        for j in range(k):
            distances[i, j] = dist(centers[j], X[i])

    # поиск ближайшего центра для каждой точки
    return np.argmin(distances, axis=1)


def kmeans(k, X):
    '''
    Находит центры масс
    '''
    m = len(X)  # количество точек
    n = len(X[0])  # размерность пространства

    curr_iteration = prev_iteration = np.zeros(m)

    Mini = np.min(X, axis=0)
    Maxi = np.max(X, axis=0)

    centers = np.empty((k, n))
    for i in range(k):
        for j in range(n):
            centers[i][j] = np.random.uniform(Mini[i], Maxi[i])

    # приписываем каждую точку к заданному классу
    curr_iteration = class_of_each_point(X, centers)

    # цикл до тех пор, пока центры не стабилизируются
    while True:
        if np.all(prev_iteration == curr_iteration):
            break
        prev_iteration = curr_iteration

        # вычисляем новые центры масс
        for i in range(k):
            sub_X = X[curr_iteration == i, :]
            if len(sub_X) > 0:
                centers[i, :] = np.mean(sub_X, axis=0)

        # приписываем каждую точку к заданному классу
        curr_iteration = class_of_each_point(X, centers)

    return centers
