import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { StoreProvider } from '@/components/StoreProvider';
import { useStore } from '@/store';

export default function Rolevoshnaya({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <StoreProvider value={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
