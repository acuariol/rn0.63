import React from 'react';

import { View, Text } from 'native-base';
import FilterLink from './FilterLink';

const Footer = () => (
  <View style={{ paddingTop: 20, paddingBottom: 20 }}>
    <Text style={{ paddingTop: 10, paddingBottom: 10 }}>Show:</Text>
    <View style={{ flexDirection: 'row' }}>
      <FilterLink filter="SHOW_ALL">
        <Text>All</Text>
      </FilterLink>

      <FilterLink filter="SHOW_ACTIVE">
        <Text>Active</Text>
      </FilterLink>

      <FilterLink filter="SHOW_COMPLETED">
        <Text>Completed</Text>
      </FilterLink>
    </View>
  </View>
);

export default Footer;
