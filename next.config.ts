import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async redirects() {
		return [
			// Basic redirect
			{
				source: "/bandcamp",
				destination: "https://relaxdean.bandcamp.com/",
				permanent: true,
			},
			{
				source: "/spotify",
				destination: "https://open.spotify.com/artist/0F3ZPvm6QuYgoGRYhkQCJw",
				permanent: true,
			},
			{
				source: "/apple",
				destination: "https://music.apple.com/us/artist/relax-dean/1833018025",
				permanent: true,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/@relaxdean",
				permanent: true,
			},
			{
				source: "/instagram",
				destination: "https://www.instagram.com/relaxdeanmusic",
				permanent: true,
			},
			{
				source: "/tiktok",
				destination: "https://www.tiktok.com/@relaxdeanmusic",
				permanent: true,
			},
		]
	},
}

export default nextConfig
