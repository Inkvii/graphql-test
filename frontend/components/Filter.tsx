import {Fragment, useEffect, useState} from "react"
import {UserCondition} from "graphql/types"


interface UserFormDto {
	fromId: string,
	toId: string,
	firstName: string,
	lastName: string,
	userId: string
}

const initialState: UserFormDto = {fromId: "", userId: "", firstName: "", lastName: "", toId: ""}

interface Props {
	refetch: CallableFunction
}


export default function Filter(props: Props) {
	const [dto, setDto] = useState<UserFormDto>(initialState)

	const onFilter = () => {

		const condition: UserCondition = {
			firstName: dto.firstName.length > 0 ? dto.firstName : undefined,
			lastName: dto.lastName.length > 0 ? dto.lastName : undefined,
			userId: parseInt(dto.userId) || undefined
		}

		const queryParams = {
			fromId: parseInt(dto.fromId) || null,
			toId: parseInt(dto.toId) || null,
			condition
		}
		console.log(JSON.stringify(queryParams))
		props.refetch(queryParams)

	}

	const onReset = () => {
		console.log("Resetting")
		setDto({...initialState})
	}

	const setValue = (property: keyof UserFormDto, value: string) => {
		setDto({...dto, [property]: value})
	}

	useEffect(() => {
		console.log(dto)
	}, [dto])


	return (
		<div className={"my-2"}>
			Filter
			<div className={"flex"}>

				<div className={"flex flex-col w-full"}>
					{Object.keys(dto).map((key) => {
						return (
							<Fragment key={key}>
								<label>{key}</label>
								<input type={"text"} className={"border p-1 my-1"} value={dto[key as unknown as keyof UserFormDto]}
								       onChange={e => setValue(key as unknown as keyof UserFormDto, e.target.value)}/>
							</Fragment>
						)
					})}
				</div>
			</div>
			<div className={"grid grid-cols-2 gap-1"}>
				<button className={"bg-blue-500 text-white px-8 py-2 my-2 hover:bg-blue-600"} onClick={() => onReset()}>Reset</button>
				<button className={"bg-blue-700 text-white px-8 py-2 my-2 hover:bg-blue-800"} onClick={() => onFilter()}>Filter</button>
			</div>
		</div>
	)
}


