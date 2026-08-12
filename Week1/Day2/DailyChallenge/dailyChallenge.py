number = int(input("what is your number? "))  ###Exercise 1
the_length = int(input("enter your list length" ))
multiplication_list = []
for m in range (1, the_length+1):
             multiplication_list.append(m*number)
print (multiplication_list)



### Exercise 2

user_word = input("Enter a word: ")

new_word = ""
previous_character = ""

for character in user_word:
    if character != previous_character:
        new_word = new_word + character

    previous_character = character

print(new_word)



### BONUS - GOLD

from datetime import date

birthdate = input("Enter your birthdate in DD/MM/YYYY format: ")

day, month, year = birthdate.split("/")

birth_day = int(day)
birth_month = int(month)
birth_year = int(year)

today = date.today()

age = today.year - birth_year

# If the birthday has not happened yet this year, subtract 1
if today.month < birth_month or (
    today.month == birth_month and today.day < birth_day
):
    age = age - 1

# The remainder after dividing by 10 is the final digit
number_of_candles = age % 10

candles = "i" * number_of_candles

# Check whether the birth year was a leap year
is_leap_year = (
    birth_year % 400 == 0
    or (birth_year % 4 == 0 and birth_year % 100 != 0)
)

number_of_cakes = 1

if is_leap_year:
    number_of_cakes = 2

print(f"You are {age} years old.")

for cake in range(number_of_cakes):
    print("       " + candles.center(11, "_"))
    print("      |:H:a:p:p:y:|")
    print("    __|___________|__")
    print("   |^^^^^^^^^^^^^^^^^|")
    print("   |:B:i:r:t:h:d:a:y:|")
    print("   |                 |")
    print("   ~~~~~~~~~~~~~~~~~~~")
    print()