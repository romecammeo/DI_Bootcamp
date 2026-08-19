def display_message():
    print("I am learning about functions in Python. Allegedly.")


display_message()



def favorite_book(title):
    print(f"One of my favorite books is {title}.")
favorite_book("Alice in Wonderland")




def describe_city(city, country="Unknown"):  ### Excercise 3
    print(f"{city} is in {country}.")
describe_city()






import random.   ### Excercise 4

def compare_number(user_number):
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")


user_number = int(input("Enter a number between 1 and 100: "))
compare_number(user_number)




def make_shirt(size="large", text="I love Python"):  ### Exercise 5
    print(f"The size of the shirt is {size} and the text is {text}.")
make_shirt()
make_shirt(size="medium")
make_shirt(size="small", text="i SUCK at Python Bruh")



magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel'].  ###Exercise 6


def show_magicians(magician_names):
    for magician in magician_names:
        print(magician)


def make_great(magician_names):
    for index in range(len(magician_names)):
        magician_names[index] = magician_names[index] + " the Great"


make_great(magician_names)
show_magicians(magician_names)




import random        ###exercise 7


def get_random_temp():
    return random.randint(-10, 40)


def main():
    temperature = get_random_temp()

    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")

    elif temperature < 16:
        print("Quite chilly! Don't forget your coat.")

    elif temperature < 24:
        print("Nice weather.")

    elif temperature < 33:
        print("A bit warm, stay hydrated.")

    else:
        print("It's really hot! Stay cool.")


main()