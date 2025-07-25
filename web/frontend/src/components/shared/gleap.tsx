'use client';
import { FC, ReactNode, useEffect } from 'react';
// import Gleap from 'gleap';
// import envConfig from '@/src/constants/envConfig';

export const GleapInit: FC<{ children?: ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Temporarily disabled Gleap initialization
    // const isGleapEnabled = envConfig.GLEAP_API_KEY && process.env.NEXT_PUBLIC_ENABLE_GLEAP !== 'false';
    // if (isGleapEnabled) {
    //   Gleap.initialize(envConfig.GLEAP_API_KEY ?? '');
    // }
  }, []);
  return <>{children}</>;
};
