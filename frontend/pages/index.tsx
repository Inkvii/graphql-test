import Filter from "components/Filter"
import ResultList from "components/ResultList"
import {gql, useQuery} from "@apollo/client"
import {Query} from "graphql/types"


export default function Home() {

	const MY_QUERY = gql`query UserById($fromId: Int, $toId: Int, $condition: UserCondition) {
      users(condition: $condition, filter: {
          and: [
              {userId: {greaterThanOrEqualTo: $fromId}}
              {userId: {lessThanOrEqualTo: $toId}}
          ]
      }) {
          nodes {
              userId
              firstName
              age
              items(first: 1) {
                  nodes {
                      name
                  }
              }
          }
      }
  }
	`


	const {loading, error, data, refetch} = useQuery<Query>(MY_QUERY)


	return (
		<div className={"flex justify-center bg-gray-200"}>
			<div className={"flex flex-col w-5/6 my-4 bg-gray-100 min-h-screen px-8 py-4"}>
				<h1 className={"flex text-4xl justify-center pb-4"}>
					GraphQL Api test
				</h1>
				<Filter refetch={refetch}/>
				Result list
				<ResultList loading={loading} items={data}/>
			</div>
		</div>
	)
}
