import {Fragment, useEffect, useMemo, useState} from "react"
import {UserCondition} from "graphql/types"


interface Validator {
	regex: string,
	textOnError: string
}

interface FormDto {
	label: string,
	value: string,
	validators?: Validator[]
	valid: boolean | null
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
			return !form.valid
		})
		console.log("Disable filter rememoied to " + result)
		return result
	}, [dto])


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
		setDto(JSON.parse(JSON.stringify(initialState)))
	}

	const setValue = (property: keyof UserFormDto, value: string, valid: boolean) => {
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
								            label: dto[keyLiteral].label,
								            value: dto[keyLiteral].value,
								            validators: dto[keyLiteral].validators,
								            valid: dto[keyLiteral].valid
							            }}
							            onChange={(updatedValue: string, valid: boolean) => setValue(keyLiteral, updatedValue, valid)}/>
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

const LabelInput = (props: { formDto: FormDto, onChange: Function }) => {
	const [errorText, setErrorText] = useState<string>("")
	const [className, setClassName] = useState<string>("")

	const changeValue = (updatedValue: string) => {
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

			setErrorText(text)
		}

		props.onChange(updatedValue, result)
	}

	useEffect(() => {
		if (props.formDto.valid === true) {
			const css = "border-green-700"
			setClassName(css)
		} else if (props.formDto.valid === false) {
			const css = "border-red-700"
			setClassName(css)
		} else {
			const css = "border-black"
			setClassName(css)
		}
		console.log("Triggered use effect on valid to: " + props.formDto.valid)
	}, [props.formDto.valid])

	return (
		<Fragment>
			<label>{props.formDto.label}</label>
			<input type={"text"} className={`p-1 my-1 border  outline-none ${className}`}
			       value={props.formDto.value}
			       onChange={e => changeValue(e.target.value)}/>
			<label className={"text-center text-sm text-red-500"}>{props.formDto.valid !== null ? errorText : ""}</label>
		</Fragment>
	)
}
