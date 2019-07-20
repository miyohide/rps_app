import {Requests} from '../src/play';

describe('play function', () => {
    describe('Player 1 wins', () => {
        const observer = {
            player1Wins() { console.log("player1Wins"); },
        };
        beforeEach(() => {
            jest.spyOn(observer, 'player1Wins').mockImplementation();
        });

        it('rock vs scissors', () => {
            new Requests().play('rock', 'scissors', observer);
            expect(observer.player1Wins).toBeCalled();
        });
    });
});
