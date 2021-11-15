interface Props {
	onClose: Function
	data: { [key: string]: any } | any
}

export default function ResultListModal(props: Props) {


	return (
		<div className={"w-full h-48 bg-gray-100 border flex flex-col mt-4"}>
			<ul className={"m-2"}>
				{props.data.nodes.map((item: any, id: any) =>
					<li key={id} className={"shadow w-full p-4"}>
						<div>
							<ul>
								{
									Object.entries(item)
										.filter(([key, value]) => key.toLowerCase() !== "__typename")
										.map(([key, value]) => {
												// render simple values as list item
												return <li key={id + key}>{key}: {JSON.stringify(value)}</li>
											}
										)
								}
							</ul>
						</div>
					</li>
				)}

			</ul>
			<div className={"flex flex-row h-full w-full items-end justify-center m-2"}>

				<button onClick={() => props.onClose(null)} className={"bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 mt-2 "}>Close</button>
			</div>
		</div>
	)
}
