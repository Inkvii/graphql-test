import {useState} from "react"

interface Props {

}

export default function Filter(props: Props) {
	const [fromId, setFromId] = useState<string>("")
	const [toId, setToId] = useState<string>("")
	const [firstname, setFirstname] = useState<string>("")
	const [lastname, setLastname] = useState<string>("")
	const [userId, setUserId] = useState<string>("")

	const onFilter = () => {
		console.log(fromId)

	}

	return (
		<div className={"my-2"}>
			Filter
			<div className={"flex"}>

				<div className={"flex flex-col w-full"}>
					<label>From id</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setFromId(e.target.value)}/>
					<label>To id</label>
					<input type={"text"} className={"border p-1 my-1"} onChange={e => setToId(e.target.value)}/>
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
