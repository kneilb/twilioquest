import sys

number = int(sys.argv[1]) + int(sys.argv[2])

if number <= 0:
    path = "destitution"
elif number <= 100:
    path = "plenty"
else:
    path = "excess"

print(f"You have chosen the path of {path}.")
