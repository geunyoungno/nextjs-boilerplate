import { Head, Html, Main, NextScript } from 'next/document';

// Manual Graceful shutdowns
if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  // this should be added in your custom _document
  process.on('SIGTERM', () => {
    // eslint-disable-next-line no-console
    console.log('Received SIGTERM: ', 'cleaning up');
    process.exit(0);
  });

  process.on('SIGINT', () => {
    // eslint-disable-next-line no-console
    console.log('Received SIGINT: ', 'cleaning up');
    process.exit(0);
  });
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
