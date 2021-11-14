import {useState} from "react"
import {UserCondition} from "graphql/types"

interface Props {
	refetch: CallableFunction
}

export default function Filter(props: Props) {
	const [fromId, setFromId] = useState<string>("")
	const [toId, setToId] = useState<string>("")
	const [firstName, setFirstname] = useState<string>("")
	const [lastName, setLastname] = useState<string>("")
	const [userId, setUserId] = useState<string>("")


	const onFilter = () => {

		const condition: UserCondition = {
			firstName: firstName.length > 0 ? firstName : undefined,
			lastName: lastName.length > 0 ? lastName : undefined,
			userId: parseInt(userId) || undefined
		}

		const queryParams = {
			fromId: parseInt(fromId) || null,
			toId: parseInt(toId) || null,
			condition
		}
		console.log(JSON.stringify(queryParams))
		props.refetch(queryParams)

	}

	const onReset = () => {
		console.log("Resetting")
		setFromId("")
		setToId("")
		setFirstname("")
		setLastname("")
		setUserId("")
	}

	return (
		<div className={"my-2"}>
			Filter
			<div className={"flex"}>

				<div className={"flex flex-col w-full"}>
					<label>From id</label>
					<input type={"text"} className={"border p-1 my-1"} value={fromId} onChange={e => setFromId(e.target.value)}/>
					<label>To id</label>
					<input type={"text"} className={"border p-1 my-1"} value={toId} onChange={e => setToId(e.target.value)}/>
					<label>First name</label>
					<input type={"text"} className={"border p-1 my-1"} value={firstName} onChange={e => setFirstname(e.target.value)}/>
					<label>Last name</label>
					<input type={"text"} className={"border p-1 my-1"} value={lastName} onChange={e => setLastname(e.target.value)}/>
					<label>User id</label>
					<input type={"text"} className={"border p-1 my-1"} value={userId} onChange={e => setUserId(e.target.value)}/>
				</div>
			</div>
			<div className={"grid grid-cols-2 gap-1"}>
				<button className={"bg-blue-500 text-white px-8 py-2 my-2 hover:bg-blue-600"} onClick={() => onReset()}>Reset</button>
				<button className={"bg-blue-700 text-white px-8 py-2 my-2 hover:bg-blue-800"} onClick={() => onFilter()}>Filter</button>
			</div>
		</div>
	)
}
