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


func.compress_image('image.jpg', bits_per_channel=5, polynom=4)
