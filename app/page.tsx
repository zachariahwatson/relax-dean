"use client"

import Background from "@/components/background"
import Show from "@/components/show"
import Shows from "@/components/shows"
import { faBandcamp, faInstagram, faSpotify, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<Background />
			<main className="grid grid-cols-1 gap-3 w-[375px] p-4 pb-2 content-start relative">
				<div className="px-2">
					<Image src="/images/logo.png" width={1000} height={275} alt="logo" priority={true} loading={"eager"} />
				</div>
				<div className="flex justify-center items-center font-[family-name:var(--font-dean-display)] text-4xl text-[#F0EAD6] relative h-[82.55px] pulse">
					*the rock* out soon!
					<svg className="absolute fill-[#FFC445] -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.62 78">
						<polygon points="301.31 78 294.2 64 287.09 78 279.98 64 272.87 78 265.76 64 258.65 78 251.54 64 244.43 78 237.33 64 230.22 78 223.11 64 216.01 78 208.9 64 201.79 78 194.68 64 187.57 78 180.46 64 173.35 78 166.24 64 159.13 78 152.02 64 144.91 78 137.79 64 130.68 78 123.57 64 116.46 78 109.34 64 102.23 78 95.12 64 88.01 78 80.89 64 73.78 78 66.67 64 59.55 78 52.43 64 45.31 78 39.74 63.52 29.57 75.24 29.31 59.72 15.74 67.24 20.79 52.57 5.47 55.01 15.23 42.95 0 39.98 13.31 32 .87 22.11 16.74 21.42 12.49 6.11 25.74 14.88 31.31 0 38.42 14 45.53 0 52.64 14 59.75 0 66.86 14 73.97 0 81.08 14 88.18 0 95.29 14 102.4 0 109.51 14 116.61 0 123.72 14 130.83 0 137.94 14 145.05 0 152.16 14 159.27 0 166.38 14 173.49 0 180.6 14 187.71 0 194.82 14 201.94 0 209.05 14 216.16 0 223.28 14 230.39 0 237.5 14 244.61 0 251.72 14 258.84 0 265.95 14 273.07 0 280.19 14 287.31 0 292.88 14.48 303.05 2.76 303.31 18.28 316.88 10.76 311.83 25.43 327.15 22.99 317.39 35.05 332.62 38.02 319.31 46 331.75 55.89 315.88 56.58 320.12 71.89 306.87 63.12 301.31 78" />
					</svg>
				</div>
				<div className="px-4 w-full h-10 absolute top-52 -z-10">
					<div className="bg-[#f0ead6] rounded-full w-full h-full"></div>
				</div>
				<div className="px-4 grid grid-rows-1 grid-flow-col gap-4 h-8 justify-items-center">
					<Link href="https://relaxdean.bandcamp.com/" target="_blank">
						<FontAwesomeIcon icon={faBandcamp} color="#FFC445" size="2x" />
					</Link>

					<FontAwesomeIcon icon={faSpotify} color="#FFC445" size="2x" />

					<Link href="https://www.youtube.com/@relaxdean" target="_blank">
						<FontAwesomeIcon icon={faYoutube} color="#FFC445" size="2x" />
					</Link>

					<Link href="https://www.instagram.com/relaxdeanmusic" target="_blank">
						<FontAwesomeIcon icon={faInstagram} color="#FFC445" size="2x" />
					</Link>

					<Link href="https://www.tiktok.com/@relaxdeanmusic" target="_blank">
						<FontAwesomeIcon icon={faTiktok} color="#FFC445" size="2x" />
					</Link>

					<Link href="mailto:relaxdeanmusic@gmail.com" target="_blank">
						<FontAwesomeIcon icon={faEnvelope} color="#FFC445" size="2x" />
					</Link>
				</div>
				<div className="px-1 w-full">
					<div className="stamp bg-[#42C9B9] text-2xl text-[#F0EAD6] p-3 w-full">
						<Shows>
							<Show
								venueName={"salty spitoon"}
								city={"bikini bottom"}
								state={"bikini atoll"}
								dayName={"wed"}
								month={"may"}
								day={37}
								time={"11:00 pm"}
								link={"https://www.youtube.com/watch?v=jgdrL0Bl_YY"}
								last
							/>
						</Shows>
					</div>
				</div>
				<div className="px-1 w-full">
					<div className="box bg-[#FF4B2B] text-center text-md text-[#F0EAD6] p-1 w-full">
						<span>booking:</span>
						<br />
						<Link href="mailto:relaxdeanmusic@gmail.com">relaxdeanmusic@gmail.com</Link>
					</div>
				</div>
			</main>
			<footer className="flex flex-col">
				<span className="text-center text-xs text-[#b67c00]">© 2025 Relax Dean</span>
			</footer>
		</>
	)
}
