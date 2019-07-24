import {Requests} from '../src/play';

describe('play function', () => {
    describe('Player 1 wins', () => {
        const observer = {
            player1Wins() { console.log("player1Wins"); },
        };
        beforeEach(() => {
            // observer patternを適用して、当該のメソッドが呼ばれることを
            // 確認する
            jest.spyOn(observer, 'player1Wins').mockImplementation();
        });

        it('rock vs scissors', () => {
            new Requests().play('rock', 'scissors', observer);
            expect(observer.player1Wins).toBeCalled();
        });

        it('scissors vs paper', () => {
            new Requests().play('scissors', 'paper', observer);
            expect(observer.player1Wins).toBeCalled();
        });

        it('paper vs rock', () => {
            new Requests().play('paper', 'rock', observer);
            expect(observer.player1Wins).toBeCalled();
        });
    });

    describe('Player 2 wins', () => {
        const observer = {
            player2Wins() { console.log("player2Wins"); },
        };
        beforeEach(() => {
            jest.spyOn(observer, 'player2Wins').mockImplementation();
        });

        it('scissors vs rock', () => {
            new Requests().play('scissors', 'rock', observer);
            expect(observer.player2Wins).toBeCalled();
        });

        it('rock vs paper', () => {
            new Requests().play('rock', 'paper', observer);
            expect(observer.player2Wins).toBeCalled();
        });
    });
});
