import Pages from '../../pages';
import Header from '../Header/Header';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// const API_URI = 'http://localhost:4000/api';



const uri = process.env.API_URI;
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
})

function App() {
  console.log(uri)
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
