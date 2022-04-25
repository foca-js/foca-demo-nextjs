import '../styles/globals.css';

import '../app/store';
import { FocaProvider } from 'foca';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FocaProvider>
      <Component {...pageProps} />
    </FocaProvider>
  );
}
