import ReactDOM from 'react-dom';

describe('WebSpec', function () {
    let domFixture;

    beforeEach(() => {
        domFixture = document.createElement('div');
        document.querySelector('body').appendChild(domFixture);
    });

    afterEach(() => {
        domFixture.remove();
    });

    it('displays title', () => {
        ReactDOM.render(
            <PlayForm />,
            domFixture,
        );

        expect(domFixture.innerText).toContain('RPS App');
    });
});
