import Pages from '../../pages';
import Header from '../Header/Header';
import './App.css';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import LoginBar from '../LoginBar/LoginBar';
import { setContext} from 'apollo-link-context';

const uri = process.env.REACT_APP_API_URL;
const httpLink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || ''
    }
  }
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  resolvers: {},
  connectToDevTools: true
});

client.writeQuery({
  query: gql`
    {
      isLoggedIn @client
    }
  `,
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})
function App() {
  
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <LoginBar />
        <Header />
        <Pages />
      </div>
    </ApolloProvider>
  );
}

export default App;
