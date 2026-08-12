board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

def display_board(board):
 for row in range(0, len(board)):
        print(" | ".join(row))
        print("---------")