import Pages from '../../pages';
import Header from '../Header/Header';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

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
        <Header />
        <Pages />
      </div>
    </ApolloProvider>
  );
}

export default App;
