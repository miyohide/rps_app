export class Requests {
    play(player1Hand, player2Hand, observer) {
        if (
            (player1Hand === 'scissors' && player2Hand === 'rock') ||
            (player1Hand === 'rock' && player2Hand === 'paper') ||
            (player1Hand === 'paper' && player2Hand === 'scissors')) {
            return observer.player2Wins();
        }
        return observer.player1Wins();
    }
}