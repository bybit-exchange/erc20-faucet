import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
// import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
// import withReduxSaga from 'next-redux-saga';
// import {initStore} from '../redux/store';
import {APP_NAME} from '../lib/constants';
import {EtherProvider} from 'use-ether-provider';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <EtherProvider networks={[4]} ms={1000}>
            <Component {...pageProps} />
          </EtherProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
