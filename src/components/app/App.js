import Pages from '../../pages';
import Header from '../Header/Header';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import LoginBar from '../LoginBar/LoginBar';

const uri = process.env.REACT_APP_API_URL;

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
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
