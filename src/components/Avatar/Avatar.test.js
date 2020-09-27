import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import Avatar from 'components/Avatar';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<Avatar />);
    expect(wrapper).toMatchSnapshot();
});