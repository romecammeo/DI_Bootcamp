words = input("Enter words separated by commas: ")  ### 1
splitted_list = words.split(",")

splitted_list.sort()

conjoined_words = ",".join(splitted_list)

print(conjoined_words)


sentence = input("Enter a sentence: ")  ### second

def longest_word(sentence):
    words = sentence.split()
    longest = words[0]

    for word in words:
        if len(word) > len(longest):
            longest = word

    return longest

print(longest_word(sentence))



import random ### Daily challenge advanced algrithm 

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number   = 3728

for number in list_of_numbers:    ###Third 
    needed = target_number - number

    if needed in seen:
        pair = (min(number, needed), max(number, needed))
        pairs.add(pair)

    seen.add(number)
