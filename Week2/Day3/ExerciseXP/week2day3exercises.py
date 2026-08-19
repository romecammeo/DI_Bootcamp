

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



class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


all_cats = [cat1, cat2, cat3]

cat1 = Siamese("Dolce", 5)
cat2 = Chartreux ("Elizabeth", 3)
cat3 = Bengal("Paulina", 3)


sara_pets = Pets(all_cats)

sara_pets_are_walking = sara_pets.walk(all_cats)
  for i in sara_pets_are_walking
   print sara_pets_are_walking




class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"


class Bengal(Cat):
    def sing(self, sounds):
        return sounds


class Chartreux(Cat):
    def sing(self, sounds):
        return sounds


class Siamese(Cat):
    def sing(self, sounds):
        return sounds


cat1 = Siamese("Dolce", 5)
cat2 = Chartreux("Elizabeth", 3)
cat3 = Bengal("Paulina", 3)

all_cats = [cat1, cat2, cat3]

sara_pets = Pets(all_cats)

sara_pets.walk()