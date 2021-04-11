from PIL import Image
import numpy as np
from sklearn import linear_model
import matplotlib.pyplot as plt
import functions as func
from enum import Enum
class Color(Enum):
    RED = 0
    GREEN = 1
    BLUE = 2

im = Image.open('image.jpg')
data = np.array(im.getdata()).reshape([im.height, im.width, 3])

X = func.polynom_matrix(4, im.width)
lm = linear_model.LinearRegression()

R = data[0, :, Color.RED.value]
G = data[0, :, Color.GREEN.value]
B = data[0, :, Color.BLUE.value]

lm.fit(X, R)
Rpredicted = lm.predict(X)
lm.fit(X, G)
Gpredicted = lm.predict(X)
lm.fit(X, B)
Bpredicted = lm.predict(X)
plt.plot(R, 'r--')
plt.plot(G, 'g--')
plt.plot(B, 'b--')
plt.plot(Rpredicted, 'r')
plt.plot(Gpredicted, 'g')
plt.plot(Bpredicted, 'b')
plt.grid()
plt.show()

'''
plt.plot(y)
plt.plot(predicted)
plt.show()
'''

bits_per_channel = 5
threshold = 2 ** (bits_per_channel - 1) - 1

pix = im.load()

for i in range(im.height):
    R = data[i, :, 0]
    G = data[i, :, 1]
    B = data[i, :, 2]

    lm.fit(X, R)
    Rpredicted = lm.predict(X)
    lm.fit(X, G)
    Gpredicted = lm.predict(X)
    lm.fit(X, B)
    Bpredicted = lm.predict(X)

    diff = R - Rpredicted
    np.clip(diff, -threshold, threshold, diff)
    R = Rpredicted + diff
    diff = G - Gpredicted
    np.clip(diff, -threshold, threshold, diff)
    G = Gpredicted + diff
    diff = B - Bpredicted
    np.clip(diff, -threshold, threshold, diff)
    B = Bpredicted + diff

    for j in range(im.width):
        l = list(pix[j, i])
        l[0] = int(R[j])
        l[1] = int(G[j])
        l[2] = int(B[j])
        pix[j, i] = tuple(l)

im.save('ready5.png')
print('ok')
