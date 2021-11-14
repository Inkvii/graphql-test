import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import type {AppProps} from 'next/app'
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client"

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: createHttpLink({
		uri: "http://localhost:5000/graphql",
		credentials: "same-origin"
	})
})

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
