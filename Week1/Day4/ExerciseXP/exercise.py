import random


# ============================================================
# EXERCISE 1: WHAT ARE YOU LEARNING?
# ============================================================
def display_message():
    print("I am learning about functions in Python.")


display_message()


# ============================================================
# EXERCISE 2: WHAT'S YOUR FAVORITE BOOK?
# ============================================================
def favorite_book(title):
    print(f"One of my favorite books is {title}.")


favorite_book("Alice in Wonderland")


# ============================================================
# EXERCISE 3: SOME GEOGRAPHY
# ============================================================
def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")


describe_city("Reykjavik", "Iceland")
describe_city("Paris")


# ============================================================
# EXERCISE 4: RANDOM
# ============================================================
def compare_random_number(number):
    random_number = random.randint(1, 100)

    if number == random_number:
        print("Success!")
    else:
        print(f"Fail. Your number was {number}, and the random number was {random_number}.")


compare_random_number(42)


def make_shirt(size="large", text="I love Python"):
    print(f'The shirt is size {size} and has the text "{text}" printed on it.')


make_shirt()
make_shirt("medium")
make_shirt("small", "Coding is fun")
make_shirt(size="small", text="Hello!")


# ============================================================
# EXERCISE 6: MAGICIANS
# ============================================================
magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]


def show_magicians(names):
    for magician in names:
        print(magician)


def make_great(names):
    for index in range(len(names)):
        names[index] = names[index] + " the Great"


make_great(magician_names)
show_magicians(magician_names)


# ============================================================
# EXERCISE 7: TEMPERATURE ADVICE
# ============================================================
def get_random_temp():
    return random.randint(-10, 40)


def main():
    temperature = get_random_temp()

    print(f"The temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("It is freezing. Wear extra layers.")
    elif temperature <= 15:
        print("It is chilly. Wear a coat.")
    elif temperature <= 23:
        print("The weather is nice.")
    elif temperature <= 31:
        print("It is warm. Stay hydrated.")
    else:
        print("It is very hot. Stay cool.")


main()