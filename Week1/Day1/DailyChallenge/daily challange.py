user_string = input("Enter a 10-character string: ")

if len(user_string) < 10:
    print("String not long enough.")

elif len(user_string) > 10:
    print("String too long.")

else:
    print("Perfect string")
    print("First character:", user_string[0])
    print("Last character:", user_string[-1])

    # Build the string character by character
    built_string = ""

    for character in user_string:
        built_string = built_string + character
        print(built_string)

    characters = list(user_string)
    random.shuffle(characters)
    jumbled_string = "".join(characters)

    print("Jumbled string:", jumbled_string)