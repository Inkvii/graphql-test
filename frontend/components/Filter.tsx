import {Fragment, useEffect, useState} from "react"
import {UserCondition} from "graphql/types"


interface Validator {
	regex: string,
	textOnError: string
}

interface FormDto {
	label: string,
	value: string,
	validators?: Validator[]
}

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
		]
	},
	toId: {
		label: "To Id",
		value: "",
		validators: [
			{regex: "[0-9]+", textOnError: "Must be a number"}
		]
	},
	userId: {
		label: "User id",
		value: "",
		validators: [
			{regex: "[0-9]+", textOnError: "Must be a number"}
		]
	},
	firstName: {
		label: "First name",
		value: "",
		validators: [
			{regex: "^[A-Z]", textOnError: "Must start with uppercase A-Z"},
			{regex: "^[A-Za-z]*$", textOnError: "Cannot contain whitespaces"}
		]
	},
	lastName: {
		label: "Last name",
		value: "",
		validators: [
			{regex: "^[A-Z]", textOnError: "Must start with uppercase A-Z"},
			{regex: "^[A-Za-z]*$", textOnError: "Cannot contain whitespaces"}
		]
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
							<LabelInput key={key}
							            formDto={{label: dto[keyLiteral].label, value: dto[keyLiteral].value, validators: dto[keyLiteral].validators}}
							            onChange={(updatedValue: string) => setValue(keyLiteral, updatedValue)}/>
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

const LabelInput = (props: { formDto: FormDto, onChange: Function }) => {
	const [value, setValue] = useState(props.formDto.value)
	const [valid, setValid] = useState<boolean | null>(null)
	const [errorText, setErrorText] = useState<string>("")

	const [className, setClassName] = useState<string>("")

	const changeValue = (updatedValue: string) => {
		setValue(updatedValue)

		let text = ""
		let result = true


		if (props.formDto.validators) {
			for (let validator of props.formDto.validators) {
				result = result && updatedValue.search(new RegExp(validator.regex)) >= 0
				if (!result) {
					text = validator.textOnError
					break
				}
			}

			setValid(result)
			setErrorText(text)
		}

		props.onChange(updatedValue)
	}

	useEffect(() => {
		if (valid === true) {
			const css = "border-green-700"
			setClassName(css)
		} else if (valid === false) {
			const css = "border-red-700"
			setClassName(css)
		} else {
			const css = "border-black"
			setClassName(css)
		}
		console.log("Triggered use effect on valid to: " + valid)
	}, [valid])

	return (
		<Fragment>
			<label>{props.formDto.label}</label>
			<input type={"text"} className={`p-1 my-1 border  outline-none ${className}`}
			       value={value}
			       onChange={e => changeValue(e.target.value)}/>
			<label className={"text-center text-sm text-red-500"}>{errorText}</label>
		</Fragment>
	)
}


