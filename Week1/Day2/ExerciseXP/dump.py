# dictionary = {
#     'name' : 'Rome' ,
#     'lastname' : 'Cammeo',
#     'age' : 23,
#     'program': 'Tech Bootcamp',
#      'courses': ['full stack', 'introduction to logic'],
# }

# dictionary['height'] = 162
# print(f"My Name Is {dictionary['name']} {dictionary['lastname']}")
# del dictionary ['height']
# print('height'in dictionary)

# print (dictionary.keys())

# print (dictionary.values())
# for key in dictionary:
#  print (f"the key is {key} and the value is {dictionary[key]}")


#        is i a varaible? 


# my_number = '1234'
# my_list = []
# my_list = [num for num in my_number]
# print (my_list)


# my_list2 = [num * 2 for num in range(2,5)]
# print(my_list2)

# my_list3 = [num * 2 for num in range(10) if num % 2 ==1]
# print(my_list3)





# # text = input("Enter a string: ")
# # target_letter = input("Which letter do u want counted? ")

# # count = 0

# # for letter in text:
# #         if letter == target_letter:
# #             count = count + 1

# # print(f"The letter '{target_letter}' appears {count} times.")

# 		return 0
# 	if len(numbers) == 1 and hasattr(numbers[0], '__iter__') and not isinstance(numbers[0], (str, bytes)):
# 		numbers = numbers[0]
# 	return sum(numbers)



words = ["hello", "world"]

def make_upper(word):
    return word.upper()

result = map(make_upper, words)

print(list(result))