import * as React from 'react';

const RCScout: React.FunctionComponent = () => {
  React.useEffect(() => {
    if (window._rcs && window._rcs.inst) {
      window._rcs.inst.render();
    }
  });
  return (
    <div
      className="rc-scout"
      style={{ marginTop: '1.5rem', textAlign: 'center' }}
    />
  );
};

export default RCScout;
