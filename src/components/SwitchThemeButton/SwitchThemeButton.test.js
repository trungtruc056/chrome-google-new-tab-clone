import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import SwitchThemeButton from 'components/SwitchThemeButton';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<SwitchThemeButton />);
    expect(wrapper).toMatchSnapshot();
});