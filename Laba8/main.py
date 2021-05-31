import re


print();
print();
# 1 task
str = "#03B63A, #FFF, #000, #03B63A"
Sstr = "ABCDEF, 123, #GHIJKL"

result = re.findall(r'#[0-9A-F]{3,6}', str)
print(result)


print();
print();
# 5 task
str = "http://ya.ru/index.html, https://wikipedia.org/"
Sstr = "ftp://some.server/, https://ru.wikipedia.org/"

result = re.findall(r'http(s:|:)//([a-z]*.[a-z]*)/', str)

for i in result:
    print(i[1]);


print();
print();
# 10 task
str = "test.png, test.jpeg, test.jpg, test.gif"
Sstr = "test.php, test.exe, ~!@$%.png, <?php test.png ?>"

for i in str.split(", "):
    result = re.findall(r'^([a-z]*.(png|jpeg|gif|jpg))', i)
    if len(result) != 0:
        print(result[0][0])