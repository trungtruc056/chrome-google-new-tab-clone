import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import ToolTip from 'components/ToolTip';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<ToolTip />);
    expect(wrapper).toMatchSnapshot();
});