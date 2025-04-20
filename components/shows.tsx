import { ReactNode } from "react"

export default function Shows({ children }: { children?: ReactNode }) {
	return (
		<>
			<div className="font-bold text-center mb-2">upcoming shows</div>
			<hr className="mx-2" />
			{children ? (
				<div className="p-2 max-h-56 overflow-y-scroll space-y-2">{children}</div>
			) : (
				<div className="text-md text-center">no shows :(</div>
			)}
		</>
	)
}
