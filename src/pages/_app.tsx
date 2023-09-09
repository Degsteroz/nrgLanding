import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { useStore } from '@/store';

import { StoreProvider } from '@/components/StoreProvider';

import Sidebar from '@/_modules/Sidebar';

import '../styles/globals.css';

export default function Rolevoshnaya({ Component, pageProps }: AppProps) {
  const store = useStore();

  const {
    mainPageStore: {
      setMysterySolved: setMainPageMysterySolved,
    },
    guildStore: {
      setMysterySolved: setGuildPageMysterySolved,
    }
  } = store;

  useEffect(() => {
    !!localStorage.getItem('mysteryText') && setMainPageMysterySolved();
    !!localStorage.getItem('ghostBuster') && setGuildPageMysterySolved();
  }, [setMainPageMysterySolved, setGuildPageMysterySolved]);

  return (
    <StoreProvider value={store}>
      <Sidebar />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
