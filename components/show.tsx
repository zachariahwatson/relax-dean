import Link from "next/link"

interface Props {
	venueName: string
	city: string
	state: string
	dayName: string
	month: string
	day: number
	time: string
	link?: string
	last?: boolean
}
export default function Show({ venueName, city, state, dayName, month, day, time, link, last = false }: Props) {
	return (
		<div>
			<div className="flex justify-between text-xl font-bold">
				<div>{`${dayName}, ${month} ${day}`}</div>
				{link && (
					<div className="bg-[#FFC74A] px-1 font-normal rounded-sm text-md">
						<Link href={link}>tickets</Link>
					</div>
				)}
			</div>
			<div className="text-lg break-words">
				<div>{`${venueName} @ ${time}`}</div>
				<div className="text-md">{`${city}, ${state}`}</div>
			</div>
			{!last && <hr className="mr-2 border-t border-dashed" />}
		</div>
	)
}
