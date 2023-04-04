import * as React from 'react';

const ClientSideOnly: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  if (ready) return <>{children}</>;

  return null;
};

export default ClientSideOnly;
