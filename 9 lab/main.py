#!C:\ИТБ-230N\Максим\4 Сем\reposGit\Python---Collective-IT-Dev\Lab\9 lab\Lib\site-packages\PyQt5\Qt\qsci\api\python

import sys
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

class Drawer(QWidget):
    def __init__(self, parent=None):
        QWidget.__init__(self, parent)
        self.setAttribute(Qt.WA_StaticContents)
        h = 400
        w = 400
        self.myPenWidth = 10
        self.myPenColor = Qt.blue
        self.image = QImage(w, h, QImage.Format_RGB32)
        self.path = QPainterPath()
        self.patch = "C:\\Junk"
        self.setPatch()

    def setPenColor(self, newColor):
        self.myPenColor = newColor

    def setPenWidth(self, newWidth):
        self.myPenWidth = newWidth

    def setPatch(self):
        self.patch = QFileDialog.getOpenFileNames(self, "C:\\Users", "C:\\Users", "'PNG Image (*.png)'")[0][0]
        self.loadImage()

    def clearImage(self):
        self.path = QPainterPath()
        print(self.patch)
        self.image.load(str(self.patch), "*.png")
        self.update()

    def loadImage(self):
        self.path = QPainterPath()
        print(self.patch)
        self.image.load(str(self.patch), "*.png")
        self.update()

    def saveImage(self, fileName, fileFormat):
        self.image.save(fileName, fileFormat)

    def paintEvent(self, event):
        painter = QPainter(self)
        painter.drawImage(event.rect(), self.image, self.rect())

    def mousePressEvent(self, event):
        self.path.moveTo(event.pos())

    def mouseMoveEvent(self, event):
        self.path.lineTo(event.pos())
        p = QPainter(self.image)
        p.setPen(QPen(self.myPenColor, self.myPenWidth, Qt.SolidLine, Qt.RoundCap, Qt.RoundJoin))
        p.drawPath(self.path)
        p.end()
        self.update()

    def sizeHint(self):
        return QSize(300, 300)


if __name__ == '__main__':


    app = QApplication(sys.argv)
    w = QWidget()

    btnSave  = QPushButton("Сохранить изображение -> image.png")
    btnClear = QPushButton("Очистить холст")
    btnOpen = QPushButton("файл -> .png")
    drawer = Drawer()

    w.setLayout(QVBoxLayout())
    w.layout().addWidget(btnSave)
    w.layout().addWidget(btnClear)
    w.layout().addWidget(btnOpen)
    w.layout().addWidget(drawer)

    btnSave.clicked.connect(lambda: drawer.saveImage(drawer.patch, "PNG"))
    btnClear.clicked.connect(drawer.clearImage)
    btnOpen.clicked.connect(drawer.setPatch)

    w.show()
    sys.exit(app.exec_())