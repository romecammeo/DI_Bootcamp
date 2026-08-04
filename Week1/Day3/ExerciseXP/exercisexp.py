# keys = ["Ten", "Twenty", "Thirty"]  ### EXERCISE 1
# values = [10, 20, 30]

# result_dictionary = dict(zip(keys, values))

# print(result_dictionary)





number_of_people = int(input("How many family members are there? ")) ### exercise 2

family = {}

for count in range(number_of_people):
    name = input("Enter the family member's name: ")
    age = int(input("Enter their age: "))

    family[name] = age

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15

    print(f"{name}'s ticket costs ${price}")
    total_cost = total_cost + price

print(f"Total cost: ${total_cost}")




brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2. ###Exercise 3 

print(f"Zara's clients include {brand['type_of_clothes']}.")

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

brand.pop("creation_date")

print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())