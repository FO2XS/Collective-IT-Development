import numpy as np
from enum import Enum
from sklearn import linear_model
from PIL import Image

lm = linear_model.LinearRegression()


class Color(Enum):
    RED = 0
    GREEN = 1
    BLUE = 2


def polynom_matrix(degree, width):
    x = np.arange(0, width)
    degree = np.arange(1, degree + 1)
    return np.array([[i ** j for j in degree] for i in x])


def predict_for_channel(X, enum, row, data):
    color = data[row, :, enum.value]
    lm.fit(X, color)
    Colorpredicted = lm.predict(X)
    return Colorpredicted


def clip_and_diff_image(colorMatrix, colorPredicted, threshold):
    diff = colorMatrix - colorPredicted
    np.clip(diff, -threshold, threshold, diff)
    return colorPredicted + diff


def compress_image(imagein, imageout='imageOutReady.png', bits_per_channel=5, polynom=4):
    im = Image.open(imagein)
    data = np.array(im.getdata()).reshape([im.height, im.width, 3])
    X = polynom_matrix(polynom, im.width)
    threshold = 2 ** (bits_per_channel - 1) - 1
    pix = im.load()

    for i in range(im.height):
        R = data[i, :, Color.RED.value]
        G = data[i, :, Color.GREEN.value]
        B = data[i, :, Color.BLUE.value]

        Rpredicted = predict_for_channel(X, Color.RED, i, data)
        Gpredicted = predict_for_channel(X, Color.GREEN, i, data)
        Bpredicted = predict_for_channel(X, Color.BLUE, i, data)

        R = clip_and_diff_image(R, Rpredicted, threshold)
        G = clip_and_diff_image(G, Gpredicted, threshold)
        B = clip_and_diff_image(B, Bpredicted, threshold)

        for j in range(im.width):
            l = list(pix[j, i])
            l[0] = int(R[j])
            l[1] = int(G[j])
            l[2] = int(B[j])
            pix[j, i] = tuple(l)

    im.save(imageout)
    print('ok')
