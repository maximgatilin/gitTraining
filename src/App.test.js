import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const a = 'String for a variable';
    const b = 18;
	ReactDOM.render(<App />, div);
});
