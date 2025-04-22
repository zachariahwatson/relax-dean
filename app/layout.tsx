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
		"relax dean",
		"music",
		"artist",
		"band",
		"lofi",
		"lo-fi",
		"indie",
		"spotify",
		"apple music",
		"producer",
		"songwriter",
		"singer songwriter",
		"singer-songwriter",
	],
	openGraph: {
		title: "Relax Dean",
		description: "bodaciously bittersweet ballads",
		url: "https://relaxdean.com",
		siteName: "Relax Dean",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Relax Dean",
		description: "bodaciously bittersweet ballads",
	},
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
