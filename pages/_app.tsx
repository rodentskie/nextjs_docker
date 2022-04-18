import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@components/Navbar';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { createHttpLink, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://172.18.0.4:3000/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
