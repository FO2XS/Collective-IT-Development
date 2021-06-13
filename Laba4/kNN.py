import numpy as np
import math


def k_nearest(X, k, obj):
    sub_X = X[:, 0:-1]

    obj = (obj - np.mean(sub_X, axis=0))/(np.std(sub_X, axis=0))

    sub_X = sub_X - np.mean(sub_X)
    std = np.std(sub_X)
    sub_X = sub_X / std

    distances = [dist(i, obj) for i in sub_X]

    index_of_dist = np.argsort(distances)

    nearest_classes = X[index_of_dist[:k], -1]

    unique, counts = np.unique(nearest_classes, return_counts=True)
    object_class = unique[np.argmax(counts)]

    return object_class



# вычисление евклидова расстояния между двумя точками
def dist(p1, p2):
    return math.sqrt(sum((p1 - p2) ** 2))