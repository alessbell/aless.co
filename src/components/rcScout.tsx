import * as React from 'react';

let initialRender = false;

const RCScout: React.FunctionComponent = () => {
  React.useEffect(() => {
    initialRender = true;
    return () => {
      initialRender = false;
    };
  }, []);

  React.useEffect(() => {
    if (initialRender && window._rcs && window._rcs.inst) {
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
