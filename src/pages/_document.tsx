import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';


class MyDocument extends Document<{ lang: string }> {
  render() {
    return (
      <Html lang={this.props.lang || 'en'} style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="stylesheet" href="/nprogress.css" />
          <link rel="icon" type="image/png" href="/logo.png" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
