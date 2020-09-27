import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import Main from 'layout/Main';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<Main />);
    expect(wrapper).toMatchSnapshot();
});