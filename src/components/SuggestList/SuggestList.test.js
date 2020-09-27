import React from 'react';
import { shallowWithTheme } from 'utils/testUtils';

import SuggestList from 'components/SuggestList';

it('Render match Snapshot', () => {
    const wrapper = shallowWithTheme(<SuggestList />);
    expect(wrapper).toMatchSnapshot();
});