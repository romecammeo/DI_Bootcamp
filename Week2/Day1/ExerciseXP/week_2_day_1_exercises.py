
class Cat:   ### Excercise 1
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Dolce", 5)
cat2 = Cat("Elizabeth", 3)
cat3 = Cat("Paulina", 3)


def find_oldest_cat(cat1, cat2, cat3):

    oldest_cat = cat1

    if cat2.age > oldest_cat.age:
        oldest_cat = cat2

    if cat3.age > oldest_cat.age:
        oldest_cat = cat3

    return oldest_cat


oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old!")





class Dog:
    def __init__(self, dog_name, dog_height):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high! Wow!")


davids_dog = Dog("Dolce", 42)
sarahs_dog = Dog("Elizabeth", 34)

print(f"David's dog is {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()



class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


stairway = Song([
    "There's a lady who's sure",
    "all that glitters is gold",
    "and she's buying a stairway to heaven"
])

stairway.sing_me_a_song()






class Zoo:  ###Excercise 4
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)

        animals_dict = {}

        for animal in sorted_animals:
            first_letter = animal[0]

            if first_letter not in animals_dict:
                animals_dict[first_letter] = []

            animals_dict[first_letter].append(animal)

        self.animals_dict = animals_dict

    def get_groups(self):
        for letter, animals in self.animals_dict.items():
            print(f"{letter}: {animals}")


brooklyn_safari = Zoo("Brooklyn Safari")

brooklyn_safari.add_animal("Giraffe")
brooklyn_safari.add_animal("Bear")
brooklyn_safari.add_animal("Baboon")
brooklyn_safari.add_animal("Cat")
brooklyn_safari.add_animal("Cougar")
brooklyn_safari.add_animal("Lion")
brooklyn_safari.add_animal("Zebra")

brooklyn_safari.get_animals()

brooklyn_safari.sell_animal("Bear")

brooklyn_safari.get_animals()

brooklyn_safari.sort_animals()

brooklyn_safari.get_groups()
