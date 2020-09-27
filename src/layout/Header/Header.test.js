import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import Header from 'layout/Header';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<Header />);
    expect(wrapper).toMatchSnapshot();
});