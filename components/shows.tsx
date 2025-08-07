import { ReactNode } from "react"

export default function Shows({ children }: { children?: ReactNode }) {
	return (
		<div className="relative p-1 pt-0">
			<div className="font-bold text-center mb-2">upcoming shows</div>
			{children ? (
				<div className="p-2 pr-3 mr-0.5 py-1 h-60 overflow-y-scroll space-y-2 rounded-xl scrollbar">{children}</div>
			) : (
				<div className="h-60 text-md text-center">no shows :(</div>
			)}
			<div className="absolute w-[calc(100%-8px)] h-[240px] top-10 left-1 rounded-xl shadow-[inset_0_-2px_8px_#2f707c] pointer-events-none" />
		</div>
	)
}
