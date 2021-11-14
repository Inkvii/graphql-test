import {gql, useQuery} from "@apollo/client"
import {ItemsConnection, Maybe, Query} from "graphql/types"

export default function ItemsPage() {
	const MY_QUERY = gql`query ItemsFetch($cursor: Cursor) {
      items(first: 5, after: $cursor) {
          totalCount
          pageInfo {
              endCursor
          }
          nodes {
              itemId
              name
              price
          }


      }
  }
	`


	const {loading, error, data, refetch} = useQuery<Query>(MY_QUERY)

	const doRefetch = () => {
		console.log("Doing refetch")
		const lastCursor = data?.items?.pageInfo?.endCursor || null
		console.log("Last cursor: " + lastCursor)
		refetch({cursor: lastCursor})
	}


	return (
		<div className={"flex justify-center bg-gray-200"}>
			<div className={"flex flex-col w-5/6 my-4 bg-gray-100 min-h-screen px-8 py-4"}>
				<h1 className={"flex text-4xl justify-center pb-4"}>
					Items page
				</h1>

				<button className={"bg-blue-600 text-white w-1/2 px-8 py-4 my-4  self-center hover:bg-blue-700"} onClick={() => doRefetch()}>Load
					next
				</button>

				Result list. Total count: {data?.items?.totalCount || 0}
				{loading || !data ? <div>Loading...</div> : <ResultList data={data?.items}/>}
			</div>
		</div>
	)
}

const ResultList = (props: { data: Maybe<ItemsConnection> | undefined }) => {
	if (!props.data) {
		return (
			<div>
				No data found
			</div>
		)
	}
	return (
		<ul className={"grid grid-cols-3 gap-2"}>
			{props.data?.nodes.map((node, index) => {
				return <li key={index} className={"shadow w-full flex flex-col p-4"}>
					<p>Item ID: {node.itemId}</p>
					<p>Name: {node.name}</p>
					<p>Price: {node.price}</p>
				</li>
			})}
		</ul>
	)
}
