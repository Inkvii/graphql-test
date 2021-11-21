export default function RightMouseContextMenu(props: { positionX: number, positionY: number, onMouseLeave: Function }) {

	return (
		<div
			className={"absolute w-56 opacity-0 bg-gray-200 rounded flex flex-col shadow shadow-md transition transition-opacity hover:opacity-100 duration-300 ease-in-out"}
			style={{left: props.positionX - 20, top: props.positionY - 20}}
			onMouseLeave={() => props.onMouseLeave()}>
			<div className={"px-4 pt-1 bg-gray-400 rounded-t"}>
				Context menu has appeared

			</div>
			<ul className={"text-md"}>
				<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}>Something 1</li>
				<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}>Something 23</li>
				<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}>Something 3</li>
				<li className={"py-1 hover:bg-gray-300 px-3 border-b border-gray-300"}>Something 5</li>

			</ul>

		</div>
	)
}
