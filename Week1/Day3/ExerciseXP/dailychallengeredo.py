# 1. User Input
word = input("Enter a word: ")

# 2. Creating the Dictionary
letter_indices = {}

for index, char in enumerate(word):
    # Check if the character is already a key in the dictionary
    if char in letter_indices:
        letter_indices[char].append(index)
    else:
        # Create a new key with a list containing the first index
        letter_indices[char] = [index]

# 3. Expected Output
print(letter_indices)



# Example Data
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = "$300"

# 2. Data Cleaning for Wallet
wallet_amount = int(wallet.replace("$", "").replace(",", ""))

basket = []

# 3. Determining Affordable Items (Priority order is kept by iterating standard dict)
for item, price_str in items_purchase.items():
    # Clean the price string
    price_int = int(price_str.replace("$", "").replace(",", ""))
    
    # Check if we can afford the item
    if wallet_amount >= price_int:
        basket.append(item)
        wallet_amount -= price_int  # Update the wallet

# Return results
if not basket:
    print("Nothing")
else:
    # Print the basket list in alphabetical order
    print(sorted(basket))

