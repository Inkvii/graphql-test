import {Query} from "graphql/types"

interface Props {
	loading: boolean
	items: Query | undefined
}

export default function ResultList(props: Props) {
	if (props.loading || !props.items) {
		return <div>Loading...</div>
	}
	return (
		<ul>
			{props.items.users?.nodes.map((item, id) =>
				<li key={id} className={"shadow w-full p-4 m-2"}>
					<div>
						{JSON.stringify(item)} <br/>
						First name: {item?.firstName} <br/>
						Age: {item?.age} <br/>
						First Item: {item?.items.nodes[0]?.name}
					</div>
				</li>
			)}

		</ul>
	)
}
