export class Requests {
    play(player1Hand, player2Hand, observer) {
        if (
            (player1Hand === 'scissors' && player2Hand === 'rock') ||
            (player1Hand === 'rock' && player2Hand === 'paper')) {
            return observer.player2Wins();
        }
        return observer.player1Wins();
    }
}