class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"


class Bengal(Cat):
    pass


class Chartreux(Cat):
    pass


class Siamese(Cat):
    pass


bengal_obj = Bengal("Dolce", 5)
chartreux_obj = Chartreux("Elizabeth", 3)
siamese_obj = Siamese("Paulina", 4)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

sara_pets = Pets(all_cats)

sara_pets.walk()


### my initial draft: 

class Dogs:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        for _ in self.name:
            print(f"{self.name} is barking bruh")


    def run_speed(self):
        for _ in self.name:
            print(f"{self.name} is running at {self.weight  / self.age * 10.}!! wow!")
            return self.weight  / self.age * 10

    def fight(self,other_dog):
        if other_dog self.weight > self
         print (other_dog "has won the fight")
         if self.name self.weight > other_dog
            print (self.name "has won the fight")


class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_score = self.run_speed() * self.weight
        other_score = other_dog.run_speed() * other_dog.weight

        if self_score > other_score:
            return f"{self.name} has won the fight"
        elif other_score > self_score:
            return f"{other_dog.name} has won the fight"
        else:
            return "It's a tie"


dog1 = Dog("Max", 13, 450)
dog2 = Dog("Rex", 3, 120)
dog3 = Dog("Mo", 1, 20)

print(dog1.fight(dog2))


import random


  class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

class PetDog(Dog)
    def __init__(self, trained:False):
       super.__init_subclass__
        self.trained = trained 


     def train(self):
            print(self.bark())
            self.trained = True

        def play(*args):
       print(*args, f"all {self.name} play together! Yay!")


       def do_a_trick(self)
           for _ in do_a_trick() 
            if self.trained = True 
            print(f"{self.name} {random.choice(tricks)}")
         else: _ 

tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]

my_dog = PetDog("Fido", 2, 10)
my_dog.train()
my_dog.play("Buddy", "Max")
my_dog.do_a_trick()\






class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")

    def family_presentation(self):
        print(f"The {self.last_name} family")

        for person in self.members:
            print(f"{person.first_name} {person.last_name}, age {person.age}")


my_family = Family("Cohen")

my_family.born("Sara", 20)
my_family.born("David", 15)

my_family.check_majority("Sara")
my_family.check_majority("David")

my_family.family_presentation()




class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")

    def family_presentation(self):
        print(f"The {self.last_name} family")

        for person in self.members:
            print(f"{person.first_name} {person.last_name}, age {person.age}")


my_family = Family("Cohen")

my_family.born("Sara", 20)
my_family.born("David", 15)

my_family.check_majority("Sara")
my_family.check_majority("David")

my_family.family_presentation()