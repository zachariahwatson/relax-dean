import { ReactNode } from "react"

export default function Shows({ children }: { children?: ReactNode }) {
	return (
		<div className="relative">
			<div className="font-bold text-center mb-2">upcoming shows</div>
			{children ? (
				<div className="p-2 h-60 overflow-y-scroll space-y-2 rounded-xl">{children}</div>
			) : (
				<div className="h-60 text-md text-center">no shows :(</div>
			)}
			<div className="absolute w-full h-[241px] top-10 left-0 rounded-xl shadow-[inset_0_-1px_10px_#00b0ba] pointer-events-none" />
		</div>
	)
}
