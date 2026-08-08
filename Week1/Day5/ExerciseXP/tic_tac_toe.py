board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]


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