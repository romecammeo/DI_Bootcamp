


def get_words_from_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()
        words = content.split()


def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    selected_words = []
    random_sentence = random.choice(selectedwords)
    lowercase_text = lower(random_sentence)
    return lowercase_text



def main():
    print ("This program does x and y")
    user_input = input("what is your desired sentence length?")
    for _ in user_input:
        if user_input == str:
          print ("Error")
          break
        if 2 <= user_input <= 20:
            print (f"({get_random_sentence(length,user_input)}") 
