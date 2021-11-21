import Filter from "components/Filter"
import ResultList from "components/ResultList"
import {gql, useQuery} from "@apollo/client"
import {Query} from "graphql/types"
import Link from 'next/link'
import {useState} from "react"
import RightMouseContextMenu from "components/RightMouseContextMenu"


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
	const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
	const [position, setPosition] = useState<number[]>([0, 0])

	return (
		<div className={"flex justify-center bg-gray-200"} onContextMenu={(e) => {
			e.preventDefault()
			setShowContextMenu(!showContextMenu)
			setPosition([e.clientX, e.clientY])
		}}>
			{showContextMenu &&
			<RightMouseContextMenu positionX={position[0]} positionY={position[1]} onMouseLeave={() => setShowContextMenu(false)}/>}
			<div className={"flex flex-col w-5/6 my-4 bg-gray-100 min-h-screen px-8 py-4"}>
				<h1 className={"flex text-4xl justify-center pb-4"}>
					GraphQL Api test
				</h1>
				<Link passHref={true} href={"/itemsPage"}>
					<div className={"bg-blue-600 text-white w-1/2 px-8 py-4 my-4 self-center flex flex-col hover:bg-blue-700"}>
						<p className={"text-center"}>
							Go to items
						</p>
					</div>
				</Link>

				<Filter refetch={refetch}/>
				Result list
				<ResultList loading={loading} data={data?.users}/>
			</div>
		</div>
	)
}
