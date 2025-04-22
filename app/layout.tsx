import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const deanDisplay = localFont({
	src: "./../public/fonts/Dean-Display.woff2",
	display: "swap",
	variable: "--font-dean-display",
})

export const metadata: Metadata = {
	title: "Relax Dean",
	description: "bodaciously bittersweet ballads",
	keywords: [
		"music",
		"artist",
		"lofi",
		"lo-fi",
		"spotify",
		"apple music",
		"producer",
		"performer",
		"songs",
		"songwriter",
		"singer",
		"drummer",
		"singer songwriter",
		"singer-songwriter",
		"relax dean",
		"relax dean band",
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="h-full w-full min-w-[375px]">
			<body className={`${deanDisplay.variable} antialiased h-full grid justify-center content-start pb-4`}>
				{children}
			</body>
		</html>
	)
}
