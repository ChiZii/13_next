import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../component/Footer'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}

export default MyDocument