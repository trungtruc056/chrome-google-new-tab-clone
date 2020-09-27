import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import Logo from 'components/Logo';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<Logo />);
    expect(wrapper).toMatchSnapshot();
});