import { Link } from 'react-router-dom';
import { Card, PageContainer } from '../styles/GlobalTheme';

const NotFound = () => {
  return (
    <PageContainer>
      <Card>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go to Homepage</Link>
      </Card>
    </PageContainer>
  );
};

export default NotFound;
