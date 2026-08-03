number = int(input("what is your number? "))  ###Exercise 1
the_length = int(input("enter your list length" ))
multiplication_list = []
for m in range (1, the_length+1):
             multiplication_list.append(m*number)
print (multiplication_list)



### Exercise 2

user_word = input("Enter a word: ")
new_word = ""

for character in user_word:
    if new_word == "" or character != new_word[-1]:
        new_word = new_word + character

print(new_word)