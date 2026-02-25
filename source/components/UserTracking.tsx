'use client';

import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Clarity from '@microsoft/clarity';

export default function UserTracking() {
  useEffect(() => {
    ReactGA.initialize('G-359297299');
    Clarity.init('vmqs8b8oc5');
  }, []);

  return null;
}
