board =  ###Tic tac game 
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]



def display_board(board):
    print(board[0][0], "|", board[0][1], "|", board[0][2])
    print("---------")
    print(board[1][0], "|", board[1][1], "|", board[1][2])
    print("---------")
    print(board[2][0], "|", board[2][1], "|", board[2][2])



def player_input(board, player):
    while True:
        row = int(input("Choose a row: ")) - 1
        column = int(input("Choose a column: ")) - 1

        if board[row][column] == " ":
            board[row][column] = player
            break
        else:
            print("That square is already taken.")

             

def check_win(board, player):
    if (
        (board[0][0] == player and board[0][1] == player and board[0][2] == player)
        or
        (board[1][0] == player and board[1][1] == player and board[1][2] == player)
        or
        (board[2][0] == player and board[2][1] == player and board[2][2] == player)
        or
        (board[0][0] == player and board[1][0] == player and board[2][0] == player)
        or
        (board[0][1] == player and board[1][1] == player and board[2][1] == player)
        or
        (board[0][2] == player and board[1][2] == player and board[2][2] == player)
        or
        (board[0][0] == player and board[1][1] == player and board[2][2] == player)
        or
        (board[0][2] == player and board[1][1] == player and board[2][0] == player)
    ):
        return True

    return False


player = "X"

while True:
    display_board(board)
    player_input(board, player)

    if check_win(board, player):
        print(f"Player {player} wins!")
        break

    if (
        board[0][0] != " " and board[0][1] != " " and board[0][2] != " "
        and board[1][0] != " " and board[1][1] != " " and board[1][2] != " "
        and board[2][0] != " " and board[2][1] != " " and board[2][2] != " "
    ):
        print("It's a tie!")
        break

    if player == "X":
        player = "O"
    else:
        player = "X"






        ###Exercise 2


    import random

wordslist = [
    'correction',
    'childish',
    'beach',
    'python',
    'assertive',
    'interference',
    'complete',
    'share',
    'credit card',
    'rush',
    'south'
]

word = random.choice(wordslist)

# Hide letters, but keep spaces visible
hidden_word = []

for letter in word:
    if letter == " ":
        hidden_word.append(" ")
    else:
        hidden_word.append("*")

guessed_letters = []
wrong_guesses = 0

while True:
    print("\nWord:", "".join(hidden_word))
    print("Guessed letters:", guessed_letters)
    print("Wrong guesses:", wrong_guesses, "/ 6")

    guess = input("Guess a letter: ").lower()

    # Don't allow the same guess twice
    if guess in guessed_letters:
        print("You already guessed that letter.")
        continue

    guessed_letters.append(guess)

    # Correct guess
    if guess in word:
        for i in range(len(word)):
            if word[i] == guess:
                hidden_word[i] = guess

        print(f"Good guess! The letter {guess} is in the word.")

        # Win condition
        if "*" not in hidden_word:
            print("\nWord:", "".join(hidden_word))
            print(f"Congratulations! You guessed the word: {word}")
            break

    # Wrong guess
    else:
        wrong_guesses += 1

        print(
            f"Sorry, the letter {guess} is not in the word. "
            f"You have {6 - wrong_guesses} guesses left."
        )

        # Lose condition
        if wrong_guesses == 6:
            print(f"Game over! The word was: {word}")
            break