from PIL import Image
import numpy as np
from sklearn import linear_model
import matplotlib.pyplot as plt

im = Image.open('image.jpg')
data = np.array(im.getdata()).reshape([im.height, im.width, 3])

x = np.arange(0, im.width)
X = np.array([x, x ** 2.0, x ** 3.0, x ** 4.0, x ** 5.0]).transpose()

'''
plt.plot(data[0, :, 0], 'r')
plt.plot(data[0, :, 1], 'g')
plt.plot(data[0, :, 2], 'b')
plt.grid()
plt.show()
'''
lm = linear_model.LinearRegression()

'''
plt.plot(y)
plt.plot(predicted)
plt.show()
'''

bits_per_channel = 2
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

im.save('readyMaybe.png')
print('ok')
