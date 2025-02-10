'use client';

import React, { useState, useEffect } from 'react';
import { MantineProvider, Loader, Center } from '@mantine/core';
import { usePathname } from 'next/navigation';
import '@mantine/core/styles.css';
// import '@mantine/notifications/styles.css';

export const MantineProviderComponent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const handleComplete = () => setLoading(false);

    const timeout = setTimeout(handleComplete, 550);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <MantineProvider theme={{}} forceColorScheme="dark">
      {loading ? (
        <Center style={{ height: '100vh' }}>
          <Loader size="xl" color="#7B72EB" />
        </Center>
      ) : (
        children
      )}
    </MantineProvider>
  );
};
