import React from 'react';

type Props = {
  children: any;
  scripts: string[];
  initialApolloState: string;
  helmet: any;
};

const HTML = ({ children, scripts = [], initialApolloState, helmet }: Props) => (
  <html lang="">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      {helmet.title.toString()}
      {helmet.meta.toString()}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__ = ${initialApolloState}`,
        }}
      />
    </head>
    <body>
      {/* eslint-disable-next-line react/no-danger */}
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      {scripts.filter(Boolean).map((src) => {
        return <script key={src} src={src} />;
      })}
    </body>
  </html>
);

export default HTML;
