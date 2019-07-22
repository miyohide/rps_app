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
    });
});
