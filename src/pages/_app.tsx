import type { AppProps } from 'next/app';

import { useStore } from '@/store';

import { StoreProvider } from '@/components/StoreProvider';

import Sidebar from '@/_modules/Sidebar';

import '../styles/globals.css';

export default function Rolevoshnaya({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <StoreProvider value={store}>
      <Sidebar />
      <Component {...pageProps} />
    </StoreProvider>
  );
}
