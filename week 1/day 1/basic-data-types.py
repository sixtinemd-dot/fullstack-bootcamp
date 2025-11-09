description = "strings are chains of characters we use to represent text"
print(description)

description_upper = description.upper()
print(description_upper)

description_replace = description.replace("are" , "is")
print(description_replace)

#string slicing
description_slice = description[:7]
print(description_slice)

x = 1
y = 2

temp = y
y = x
x = temp
print(x, y)

count = 0
user_name = input("enter your name: ")
count += 1
print(user_name)
print(count)

age = input("enter your age: ")
print(age)
age_ = int(age) 
age_to_100 = 100 - age_
print(f"you will turn 100 in {age_to_100} years")



