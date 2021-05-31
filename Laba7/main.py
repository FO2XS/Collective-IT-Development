from bs4 import BeautifulSoup as bs
import codecs

# открываем документ
doc = bs(codecs.open('C:/Users/Qwerty/Downloads/Сериал Рик и Морти 1-4 сезон 1-10 серия смотреть онлайн в хорошем качестве.html', encoding='utf-8', mode='r').read(), 'html.parser')

name = doc.select('.fleft-desc')[0].decode_contents().strip()
print('Название:', name)

count = doc.select('.psc')[0].decode_contents().strip()
print('Количество положительных отзывов:', count)

count = doc.select('.msc')[0].decode_contents().strip()
print('Количество отрицательных отзывов:', count)

text = doc.select('.fdesc')[0].decode_contents().strip()
print('Описание:', text)

print('комментарии:')

comments = []

for node in doc.select('.comments-tree-item'):
    author = node.select('.comm-author')[0].get_text()
    message = node.select('.comm-two')[0].get_text()
    rating = int(node.select('.ratingtypeplusminus')[0].get_text());
    a = node.find_all(['a']);

    print("парень с ником '", author, "' написал:", message, "рэйтинг", rating, "\n\n")
    comments.append({'author': author, 'message': message, 'rating': rating, 'answers': 0})
    if (len(node.select('.comments-tree-list')) > 0):
        for node2 in node.select('.comments-tree-list')[0].select('.comments-tree-item'):
            comments[len(comments) - 1]['answers'] += 1

print("самый задизлайканый комментарий: ", sorted(comments, key=lambda x: x['rating'])[0]['message'])
print("самый популярный комментарий: ", sorted(comments, key=lambda x: x['rating'])[len(comments) - 1]['message'])
s = sorted(comments, key=lambda x: x['answers'])[len(comments) - 1];

print("комментарий с самым большим количеством отзывов: ", s['message'])
print("\t\t\tКоличество ответов:", s['answers'])