def get_words_from_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()
        words = content.split()

    return words


def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    words2 = []

    for ! in range(length):
        random_word = random.choice(words)
        words2.append(random_word)

    return " ".join(words2).lower()


                                

def main():
    print("This program generates a random sentence.")

    user_input = input("Enter a sentence length from 2 to 20: ")

    try:
        sentence_length = int(user_input)

        if 2 <= sentence_length <= 20:
            sentence = get_random_sentence("words.txt", sentence_length)
            print(sentence)
        else:
            print("Error: the length must be between 2 and 20.")

    except ValueError:
        print("Error: please enter an integer.")


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
    json.dump(data, file, indent=4)