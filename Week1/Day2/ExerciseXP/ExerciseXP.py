my_fav_numbers = {3, 7, 12} ### Exercise 1

my_fav_numbers.add(20)
my_fav_numbers.add(25)

my_fav_numbers.pop()

friend_fav_numbers = {2, 7, 15}

our_fav_numbers = my_fav_numbers | friend_fav_numbers

print(my_fav_numbers)
print(friend_fav_numbers)
print(our_fav_numbers)




numbers = (1, 2, 3) ## Exercise 2
numbers = numbers + (4, 5)
print(numbers)


  
basket = ["Banana", "Apples", "Oranges", "Blueberries"] ### Exercise 3

basket.remove("Banana")
basket.remove("Blueberries")

basket.append("Kiwi")

basket.insert(0, "Apples")

apple_count = basket.count("Apples")
print("Number of Apples:", apple_count)

basket.clear()

print(basket)





numbers = [] ###exercise 5
for number in range(3, 11):
    value = number / 2
    numbers.append(value)

print(numbers)




                                      ###exercise 5
for  number in range(1,21):
 print (numbers)



 numbers = list(range(1, 21))

for index in range(len(numbers)):
    if index % 2 == 0:
        print(numbers[index])






while True:  ### Exercise 6
    name = input("Enter your name: ")

    if not name.isdigit() and len(name) >= 3:
        print("Thank you")
        break
    else:
        print("Please enter a valid name.")







favorite_fruits_input = input(                                   ###Exercise 7
    "Enter your favorite fruits separated by spaces: ")

favorite_fruits = favorite_fruits_input.split()

chosen_fruit = input("Enter the name of a fruit: ")

if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")



toppings = []                                                            ###Exercise 8

while True:
    topping = input("Enter a pizza topping, or type 'quit': ")

    if topping.lower() == "quit":
        break

    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")

total_cost = 10 + len(toppings) * 2.50

print("Your toppings are:", toppings)
print(f"Total cost: ${total_cost:.2f}")




number_of_people = int(input("How many people need tickets? "))               ###Exercise 9

total_cost = 0

for _ in range(number_of_people):
    age = int(input("Enter the person's age: "))

    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    total_cost += price

print(f"Total ticket cost: ${total_cost}")