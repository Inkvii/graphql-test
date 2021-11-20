import {useEffect, useMemo, useState} from "react"
import {UserCondition} from "graphql/types"
import LabelInput, {FormDto} from "components/LabelInput"


interface UserFormDto {
	fromId: FormDto,
	toId: FormDto,
	firstName: FormDto,
	lastName: FormDto,
	userId: FormDto,
}

const initialState: UserFormDto = {
	fromId: {
		label: "From id",
		value: "",
		validators: [
			{regex: "[0-9]+", textOnError: "Must be a number"}
		],
		valid: null
	},
	toId: {
		label: "To Id",
		value: "",
		validators: [
			{regex: "[0-9]+", textOnError: "Must be a number"}
		],
		valid: null
	},
	userId: {
		label: "User id",
		value: "",
		validators: [
			{regex: "[0-9]+", textOnError: "Must be a number"}
		],
		valid: null
	},
	firstName: {
		label: "First name",
		value: "",
		validators: [
			{regex: "^[A-Z]", textOnError: "Must start with uppercase A-Z"},
			{regex: "^[A-Za-z]*$", textOnError: "Cannot contain whitespaces"}
		],
		valid: null
	},
	lastName: {
		label: "Last name",
		value: "",
		validators: [
			{regex: "^[A-Z]", textOnError: "Must start with uppercase A-Z"},
			{regex: "^[A-Za-z]*$", textOnError: "Cannot contain whitespaces"}
		],
		valid: null
	}
}

interface Props {
	refetch: CallableFunction
}


export default function Filter(props: Props) {
	const [dto, setDto] = useState<UserFormDto>(JSON.parse(JSON.stringify(initialState)))

	const disableFilter = useMemo(() => {
		const result = Object.keys(dto).some((key) => {
			const keyLiteral = key as unknown as keyof UserFormDto
			const form = dto[keyLiteral]
			console.log("Form " + keyLiteral + " is " + form.valid)
			return !(form.valid || form.valid === null)
		})
		console.log("Disable filter rememoied to " + result)
		return result
	}, [dto])


	const onFilter = () => {
		// prepare graphql stuff for filtering
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
		setDto(JSON.parse(JSON.stringify(initialState)))
	}

	const setValue = (property: keyof UserFormDto, value: string, valid: boolean | null) => {
		const changedValue = dto[property]
		changedValue.value = value
		changedValue.valid = valid
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
							<LabelInput key={key}
							            formDto={{
								            label: form.label,
								            value: form.value,
								            validators: form.validators,
								            valid: form.valid
							            }}
							            onChange={(updatedValue, valid) => setValue(keyLiteral, updatedValue, valid)}/>
						)
					})}
				</div>
			</div>
			<div className={"grid grid-cols-2 gap-1"}>
				<button className={"bg-blue-500 text-white px-8 py-2 my-2 hover:bg-blue-600"} onClick={() => onReset()}>Reset</button>
				<button
					className={disableFilter ? "bg-gray-600 text-white px-8 py-2 my-2" : "bg-blue-700 text-white px-8 py-2 my-2 hover:bg-blue-800"}
					disabled={disableFilter} onClick={() => onFilter()}>Filter
				</button>
			</div>
		</div>
	)
}

