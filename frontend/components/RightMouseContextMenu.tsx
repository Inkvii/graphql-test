import {animated, useTransition} from "@react-spring/web"
import {useState} from "react"

interface Fish {
	__type: "Fish"
	speed: number
	age: number
}

interface Cat {
	__type: "Cat"
	age: number
	name: string
}


export default function RightMouseContextMenu(props: { positionX: number, positionY: number, onMouseLeave: Function }) {
	const [active, setActive] = useState<boolean>(true)
	const transitions = useTransition(active, {
		from: {
			opacity: active ? 0 : 1
		},
		enter: {
			opacity: active ? 1 : 0
		},
		onRest: () => {
			console.log("Transition on rest. Active: " + active)
			if (!active) props.onMouseLeave()
		},
	})


	const getInfo = (input: Cat | Fish) => {
		console.log(JSON.stringify(input))
		if (input.__type === "Fish") {
			console.log("I am a fish with " + JSON.stringify(input as Fish))
		} else if (input.__type === "Cat") {
			console.log("I am a cat with " + JSON.stringify(input as Cat))
		} else {
			console.log("Unknown type")
		}
	}

	return transitions((style, item) => {

		return (

			<animated.div
				className={"absolute w-56 bg-gray-200 rounded flex flex-col shadow-md"}
				key={"divik"}
				style={{
					left: props.positionX - 20,
					top: props.positionY - 20,
					...style
				}}
				onMouseLeave={() => {
					setActive(false)
				}}>
				<div className={"px-4 pt-1 bg-gray-400 rounded-t"}>
					Context menu has appeared

				</div>
				<ul className={"text-md"}>
					<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}
					    onClick={() => getInfo({__type: "Fish", age: 10, speed: 50} as Fish)}>Fish
					</li>
					<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}
					    onClick={() => getInfo({__type: "Cat", name: "asd", age: 30} as Cat)}>Cat
					</li>
					<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}>Something 3</li>
					<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}>Something 5</li>

				</ul>

			</animated.div>
		)
	})
}

