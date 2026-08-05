# Coffee Shop Menu Manager

menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}


def show_menu(menu_dict):
    """Print all drinks and prices."""

    if not menu_dict:
        print("The menu is empty.")
        return

    print("Current menu:")

    for drink, price in menu_dict.items():
        print(f"{drink} - {price}₪")


def add_item(menu_dict):
    """Add a new drink to the menu."""

    drink = input("Enter new drink name: ")

    if drink in menu_dict:
        print("Item already exists!")
        return

    price = float(input("Enter price: "))

    menu_dict[drink] = price

    print(f'"{drink}" added!')


def update_price(menu_dict):
    """Change the price of an existing drink."""

    drink = input("Which drink do you want to update? ")

    if drink in menu_dict:
        new_price = float(input("Enter the new price: "))

        menu_dict[drink] = new_price

        print("Price updated!")

    else:
        print("Item not found.")


def delete_item(menu_dict):
    """Remove a drink from the menu."""

    drink = input("Which drink do you want to delete? ")

    if drink in menu_dict:
        del menu_dict[drink]

        print("Item deleted.")

    else:
        print("Item not found.")


def show_options():
    """Print the available actions."""

    print("""
What would you like to do?
1. Show menu
2. Add item
3. Update price
4. Delete item
5. Exit
""")


def run_coffee_shop():
    """Main controller of the program."""

    while True:

        show_options()

        choice = input("Choose an option: ")

        if choice == "1":
            show_menu(menu)

        elif choice == "2":
            add_item(menu)

        elif choice == "3":
            update_price(menu)

        elif choice == "4":
            delete_item(menu)

        elif choice == "5":
            print("Goodbye!")
            break

        else:
            print("Invalid choice, try again.")


run_coffee_shop()








MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM# 
$a 
#t%
'''


matrix = []

for line in MATRIX_STR.split("\n"):
    if line:
        matrix.append(list(line))



decoded = ""

number_of_columns = len(matrix[0])

for column in range(number_of_columns):

    for row in range(len(matrix)):

        character = matrix[row][column]

        if character.isalpha():
            decoded += character
        else:
            decoded += " "




message = ""

previous_was_space = False

for char in decoded:

    if char == " ":
        if not previous_was_space:
            message += char

        previous_was_space = True

    else:
        message += char
        previous_was_space = False


print(message)