
# 2941번

# 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
# 알파벳 소문자와 '-', '='로만 이루어져 있다.
# 단어는 크로아티아 알파벳으로 이루어져 있다.
# 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.

word = input()
count = 0
for value in ["c=","c-","dz=","d-","lj","nj","s=","z="]:
    if value in word:
        count += word.count(value)
        word = word.replace(value," ")
count += len(word.replace(" ",""))
print(count)