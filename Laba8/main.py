import re


print()
print()
# 1 task
str = "#03B63A, #FFF, #000, #03B63A"
Sstr = "ABCDEF, 123, #GHIJKL"

print(re.findall(r'#[0-9A-z]{6}|#[0-9A-z]{3}', str))


print()
print()
# 5 task
str = "http://ya.ru/index.html, https://wikipedia.org/"
Sstr = "ftp://some.server/, https://ru.wikipedia.org/"

result = re.findall(r'http(s:|:)//([\w|0-9]+\.\w+)/', str)

for i in result:
    print(i[1])

print()
print()
# 10 task
str = "test.png, test.jpeg, Test.jpg, test.gif"
Sstr = "test.php, test.exe, ~!@$%.png, <?php test.png ?>"

for i in str.split(", "):
    result = re.findall(r'^([\w0-9-_]+\.(png|jpeg|gif|jpg))', i)
    if len(result) != 0:
        print(result[0][0])