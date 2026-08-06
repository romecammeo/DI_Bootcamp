mystring = "hello world"
for i in range(4):
    print (mystring)

print((99**3) * 8) # exercise 2

# >>> 5 < 3  = false # exercise 3
# >>> 3 == 3 = true
# >>> 3 == "3" = false
# >>> "3" > 3  =false
# >>> "Hello" == "hello" #false

computer_brand = "apple" # exercise 4
print (f"I have an {computer_brand} macbook computer")


name = "Rome" # exercise 5
age = "23" 
shoe_size = "46"
info = f"I am {name} aged {age} my shoe size is {shoe_size}"
print (info)


a = 5 # exercise 6
b = 3
if a > b:
    print ("hello world")



number = int(input()) # exercise 7
if number % 2 == 0:
    print ("Even")
else:
    print ("Odd")


name = "Rome" # exercise 8
name2 = input("what is your name? ")
if name == name2:
    print ("success")


 # exercise 9
height = int (input("what is your height? "))
if height >= 145:
  print ("tall enough to ride")
elif height < 145:
    print ("need to grow some more")