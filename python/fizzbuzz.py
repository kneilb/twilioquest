import sys

for n in sys.argv[1:]:
    string = ""
    if int(n) % 3 == 0:
        string += "fizz"
    if int(n) % 5 == 0:
        string += "buzz"
    if not string:
        string = str(n)

    print(string)