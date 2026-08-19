import random


def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    selected_words = []

    for _ in range(length):
        random_word = random.choice(words)
        selected_words.append(random_word)

    sentence = " ".join(selected_words)
    return sentence.lower()


def main():
    print("This program generates a random sentence.")

    user_input = input("Enter a sentence length from 2 to 20: ")

    try:
        sentence_length = int(user_input)
    except ValueError:
        print("Error: please enter an integer.")
        return

    if not 2 <= sentence_length <= 20:
        print("Error: the length must be between 2 and 20.")
        return

    sentence = get_random_sentence(sentence_length)
    print(sentence)


main()




import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"


data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print(salary)

data["company"]["employee"]["birth_date"] = "2000-01-01"

with open("employee.json", "w") as file:
    json.dump(data, file, indent=2)




