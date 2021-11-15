import {Maybe, UsersConnection} from "graphql/types"
import {useState} from "react"
import ResultListModal from "components/ResultListModal"

interface Props {
	loading: boolean
	data: Maybe<UsersConnection> | undefined
}

export default function ResultList(props: Props) {

	const [modalIndex, setModalIndex] = useState<number | null>(null)

	if (props.loading || !props.data) {
		return <div>Loading...</div>
	}
	return (
		<ul>
			{props.data?.nodes.map((item, id) =>
				<li key={id} className={"shadow w-full p-4 m-2"}>
					<div>
						<ul>
							{
								Object.entries(item)
									.filter(([key, value]) => key.toLowerCase() !== "__typename")
									.map(([key, value]) => {
											// render simple values as list item
											if (typeof value !== "object") {
												return <li key={key}>{key}: {JSON.stringify(value)}</li>
											} else if (modalIndex === id) {
												// render modal component instead of list item
												return <ResultListModal onClose={setModalIndex} data={value}/>
											} else return <button className={"w-full p-2 mt-4 bg-blue-700 hover:bg-blue-800 text-white"}
											                      key={key}
											                      onClick={() => {
												                      setModalIndex(id)
											                      }}
											>
												Details of {value?.__typename}</button>


										}
									)
							}
						</ul>
					</div>
				</li>
			)}

		</ul>
	)
}

