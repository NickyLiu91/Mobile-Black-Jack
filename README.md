# Mobile-Black-Jack

## Description
Blackjack game vs an AI opponent using ReactNative.

The user and computer are given a hand, and the user can decide to either hit (multiple times) or stay. The computer will then make the same decisions, and the winner will be automatically decided at the end by comparing hands.

## Rules of Blackjack
1. The user and computer are both dealt two cards, one face-up and one-face down.
2. Each card has a value that is the same as its number (a 5 is worth 5 points, a 9 is worth 9 points), but all face cards (Jack, Queen, King) are each worth 10 points, and an Ace is worth 11 points initially, but becomes worth 1 if the current player's total value goes past 21.
3. The player can choose to either hit (receive a random card) or stay (remain with the current hand).
4. If the player selects to stay, no cards can be added afterwards.
5. The values of all cards in a player's hand is added together, and the the goal is the reach 21, or as close as possible, without going over.
7. If 21 is exceeded then the player instantly loses.
8. Win conditions are to either reach 21, end the game with more points than your opponent, have your opponent exceed 21, or have 5 cards in total without exceeding 21.
9. If the user and the computer both reach a win condition, the win goes to the computer by the rules of casino dealer advantage.
10. The user takes their turn before the computer by the rules of casino dealer advantage.

## Demo Video
https://www.youtube.com/watch?v=TiFxoiVKYO8
