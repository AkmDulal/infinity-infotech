import React from 'react';
import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import '@testing-library/jest-dom/extend-expect';

import Skeleton from '..';

afterEach(cleanup);

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<Skeleton />, div);
	ReactDom.unmountComponentAtNode(div);
});

it('matches snapshot', () => {
	const tree = renderer.create(<Skeleton count={5} />).toJSON();
	expect(tree).toMatchSnapshot();
});
