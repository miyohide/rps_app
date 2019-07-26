import ReactDOM from 'react-dom';
import React from 'react';
import PlayForm from '../src/PlayForm';

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

        // innerTextではなくtextContentにした理由は
        // 以下のURLを参照
        // https://stackoverflow.com/a/47902938
        expect(domFixture.textContent).toContain('RPS App');
    });
});
