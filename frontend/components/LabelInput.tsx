import {Fragment, useEffect, useState} from "react"

export interface Validator {
	regex: string,
	textOnError: string
}

export interface FormDto {
	label: string,
	value: string,
	validators?: Validator[]
	valid: boolean | null
}

interface Props {
	formDto: FormDto,
	onChange: (updatedValue: string, valid: boolean | null) => void
}

export default function LabelInput(props: Props) {
	const [errorText, setErrorText] = useState<string>("")
	const [className, setClassName] = useState<string>("")

	const changeValue = (updatedValue: string) => {
		let text = ""
		let result: boolean | null = true

		if (props.formDto.validators && updatedValue.length > 0) {
			for (let validator of props.formDto.validators) {
				result = result && updatedValue.search(new RegExp(validator.regex)) >= 0
				if (!result) {
					text = validator.textOnError
					break
				}
			}

			setErrorText(text)
		} else {
			result = null
			setErrorText("")
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
