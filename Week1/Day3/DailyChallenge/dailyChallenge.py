word = input("Enter a word: ").  ###Exercise 1

letter_indexes = {}

for index in range(len(word)):
    character = word[index]

    if character in letter_indexes:
        letter_indexes[character].append(index)
    else:
        letter_indexes[character] = [index]

print(letter_indexes)



                  
items_purchase = {             ###Exercise 2
    "Water": "$1", 
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

basket = []

clean_wallet = wallet.replace("$", "").replace(",", "")
wallet_amount = int(clean_wallet)

for item, price in items_purchase.items():
    clean_price = price.replace("$", "").replace(",", "")
    price_amount = int(clean_price)

    if price_amount <= wallet_amount:
        basket.append(item)
        wallet_amount = wallet_amount - price_amount

if len(basket) == 0:
    print("Nothing")
else:
    print(sorted(basket))