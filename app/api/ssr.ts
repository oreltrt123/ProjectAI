import React from 'react';
import { renderToString } from 'react-dom/server';
import App, { Layout, Head } from '../root';

export default async function handler(req: any, res: any) {
  try {
    const html = renderToString(
      <html lang="en">
        <body>
          <Head /> {/* ✅ Head inside body */}
          <Layout>
            <App />
          </Layout>
        </body>
      </html>
    );

    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<!DOCTYPE html>' + html);
  } catch (err) {
    console.error('SSR Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
