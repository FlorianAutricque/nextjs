import Document, { Html, Head, Main, NextScript } from "next/document";

//customize the html doc

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Head from next?head is used to change the head html in any render page. the head we use here is different
