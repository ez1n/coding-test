# 2884번

# 알람을 45분 앞서는 시간으로 바꾸는 것
# 시간을 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

time = input().split()
H = int(time[0])
m = int(time[1])

if m < 45:
    if H == 0:
        print(23, m + 15)
    else:
        print(H - 1, m + 15)
else:
    print(H, m - 45)
