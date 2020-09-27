import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import MainBackground from 'components/MainBackground';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<MainBackground />);
    expect(wrapper).toMatchSnapshot();
});