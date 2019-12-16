import Root from '../components/Root';
import Helmet from 'react-helmet';
import Error from 'next/error';
const {APP_NAME} = require('../lib/constants');

let ErrorPage = ({classes, statusCode}) => {
  return (
    <Root>
      <div>
        <Helmet
          title={`Error | ${APP_NAME}`}
          meta={[{ property: 'og:title', content: 'Error' }]}
        />
        <Error statusCode={statusCode} />
      </div>
    </Root>
  );
};

ErrorPage.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
