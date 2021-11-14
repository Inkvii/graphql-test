import {useState} from "react"

interface Props {
	refetch: CallableFunction
}

export default function Filter(props: Props) {
	const [fromId, setFromId] = useState<number>()
	const [toId, setToId] = useState<number>()
	const [firstName, setFirstname] = useState<string>("")
	const [lastName, setLastname] = useState<string>("")
	const [userId, setUserId] = useState<string>("")


	const onFilter = () => {
		const queryParams = {
			fromId: fromId || 1,
			toId: toId || 2,
			firstName,
			lastName,
			userId
		}
		console.log(JSON.stringify(queryParams))
		props.refetch({fromId: queryParams.fromId, toId: queryParams.toId})

	}

	return (
		<div className={"my-2"}>
			Filter
			<div className={"flex"}>

				<div className={"flex flex-col w-full"}>
					<label>From id</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setFromId(parseInt(e.target.value))}/>
					<label>To id</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setToId(parseInt(e.target.value))}/>
					<label>First name</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setFirstname(e.target.value)}/>
					<label>Last name</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setLastname(e.target.value)}/>
					<label>User id</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setUserId(e.target.value)}/>
				</div>
			</div>
			<div className={"grid grid-cols-2 gap-1"}>
				<button className={"bg-blue-500 text-white px-8 py-2 my-2 hover:bg-blue-600"}>Reset</button>
				<button className={"bg-blue-700 text-white px-8 py-2 my-2 hover:bg-blue-800"} onClick={() => onFilter()}>Filter</button>
			</div>
		</div>
	)
}
