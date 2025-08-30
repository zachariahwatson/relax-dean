import Link from "next/link"

interface Props {
	message?: string
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
export default function Show({
	message,
	venueName,
	city,
	state,
	dayName,
	month,
	day,
	time,
	link,
	last = false,
}: Props) {
	return (
		<div>
			{message && <div className="font-bold italic pb-1 pulse">{`${message}`}</div>}
			<div className="flex justify-between text-xl font-bold">
				<div>{`${dayName}, ${month} ${day}`}</div>
				{link && (
					<div className="bg-[#FFB427] px-1 font-normal rounded-sm text-md pulse2">
						<Link href={link} target="_blank">
							tickets
						</Link>
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
