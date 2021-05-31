import sys
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

app = QApplication(sys.argv)
w = QWidget()

var1 = QTextEdit();
var1.setMaximumHeight(25);
var1.setMaximumWidth(60);

var2 = QTextEdit();
var2.setMaximumHeight(25);
var2.setMaximumWidth(60);

result = QTextEdit();
result.setMaximumHeight(25);

class Operation:
    plus = 1
    minus = 2
    mul = 3
    div = 4
    power = 5

def Calculator(i):
    try:
        a = float(var1.toPlainText());
        b = float(var2.toPlainText());

        result1 = 1.3

        if i == 1:
            result1 = a + b;
        if i == 2:
            result1 = a - b;
        if i == 3:
            result1 = a * b;
        if i == 4:
            result1 = a / b;
        if i == 5:
            result1 = a**b;

        result.setText(str(result1))
    except Exception:
        result.setText("Некорректные данные!")



def main2():

    text1 = QLabel("Значение 1")
    text2 = QLabel("Значение 2")

    add = QPushButton("+")
    add.setMaximumHeight(25)
    add.setMaximumWidth(60)
    add.clicked.connect(lambda: Calculator(Operation.plus))

    remove = QPushButton("-")
    remove.setMaximumHeight(25)
    remove.setMaximumWidth(60)
    remove.clicked.connect(lambda: Calculator(Operation.minus))


    multiplication = QPushButton("*")
    multiplication.setMaximumHeight(25)
    multiplication.setMaximumWidth(60)
    multiplication.clicked.connect(lambda: Calculator(Operation.mul))

    division = QPushButton("/")
    division.setMaximumHeight(25);
    division.setMaximumWidth(60);
    division.clicked.connect(lambda: Calculator(Operation.div))

    exponentiation = QPushButton("^")
    exponentiation.setMaximumHeight(25)
    exponentiation.setMaximumWidth(60)
    exponentiation.clicked.connect(lambda: Calculator(Operation.power))

    grid = QGridLayout();

    w.setLayout(grid)

    grid.addWidget(text1, 0, 0)
    grid.addWidget(text2, 0, 1)

    grid.addWidget(var1, 1, 0)
    grid.addWidget(var2, 1, 1)

    grid.addWidget(add, 2, 0)
    grid.addWidget(remove, 2, 1)

    grid.addWidget(multiplication, 3, 0)
    grid.addWidget(division, 3, 1)

    grid.addWidget(exponentiation, 4, 0, 1, 2)

    grid.addWidget(result, 5, 0, 1, 2)

    w.show()
    sys.exit(app.exec_())


main2()