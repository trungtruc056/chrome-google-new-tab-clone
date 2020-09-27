import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import SocialList from 'components/SocialList';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<SocialList />);
    expect(wrapper).toMatchSnapshot();
});