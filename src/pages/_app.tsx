import '#styles/globals.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
