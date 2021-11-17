import {Fragment, useEffect, useState} from "react"
import {UserCondition} from "graphql/types"

interface FormDto {
	label: string,
	value: string
}

interface UserFormDto {
	fromId: FormDto,
	toId: FormDto,
	firstName: FormDto,
	lastName: FormDto,
	userId: FormDto
}

const initialState: UserFormDto = {
	fromId: {
		label: "From id",
		value: ""
	},
	toId: {
		label: "To Id",
		value: ""
	},
	userId: {
		label: "User id",
		value: ""
	},
	firstName: {
		label: "First name",
		value: ""
	},
	lastName: {
		label: "Last name",
		value: ""
	}
}

interface Props {
	refetch: CallableFunction
}


export default function Filter(props: Props) {
	const [dto, setDto] = useState<UserFormDto>(initialState)

	const onFilter = () => {

		const condition: UserCondition = {
			firstName: dto.firstName.value.length > 0 ? dto.firstName.value : undefined,
			lastName: dto.lastName.value.length > 0 ? dto.lastName.value : undefined,
			userId: parseInt(dto.userId.value) || undefined
		}

		const queryParams = {
			fromId: parseInt(dto.fromId.value) || null,
			toId: parseInt(dto.toId.value) || null,
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
		const changedValue = dto[property]
		changedValue.value = value
		setDto({...dto, [property]: changedValue})
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
						const keyLiteral = key as unknown as keyof UserFormDto
						const form = dto[keyLiteral]
						return (
							<Fragment key={key}>
								<label>{form.label}</label>
								<input type={"text"} className={"border p-1 my-1"} value={form.value}
								       onChange={e => setValue(keyLiteral, e.target.value)}/>
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


