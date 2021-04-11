import numpy as np


def polynom_matrix(degree, width):
    x = np.arange(0, width)
    degree = np.arange(1, degree + 1)
    return np.array([[i ** j for j in degree] for i in x])
