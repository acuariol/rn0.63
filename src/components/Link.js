import React from 'react';

import { Button } from 'native-base';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  return (
    <Button
      style={{ marginRight: 8 }}
      disabled={active}
      onPress={() => {
        onClick();
      }}
    >
      {children}
    </Button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
