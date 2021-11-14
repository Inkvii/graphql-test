import Filter from "components/Filter"
import ResultList from "components/ResultList"
import {gql, useQuery} from "@apollo/client"
import {Query} from "graphql/types"

const mock = [
	{
		firstName: "First name",
		lastName: "Last name",
		age: 60
	}, {
		firstName: "First name 2",
		lastName: "Last name 2",
		age: 61
	}
]

export default function Home() {

	const MY_QUERY = gql`query Testubg{
      allUsers(filter: {userId: {lessThan: 3}}) {
          nodes {
              userId
              firstName,
              age,
              itemsByUserId(first: 1) {
                  nodes {
                      name
                  }
              }
          }
      }
  }`

	const {loading, error, data} = useQuery<Query>(MY_QUERY)

	return (
		<div className={"flex justify-center bg-gray-200"}>
			<div className={"flex flex-col w-5/6 my-4 bg-gray-100 min-h-screen px-8 py-4"}>
				<h1 className={"flex text-4xl justify-center pb-4"}>
					GraphQL Api test
				</h1>
				<Filter/>
				Result list
				<ResultList loading={loading} items={data}/>
			</div>
		</div>
	)
}
