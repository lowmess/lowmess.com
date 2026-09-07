import fs from "fs";
import React, {
	type HTMLAttributes,
	type PropsWithChildren,
	type ReactNode,
} from "react";
import satori from "satori";
import sharp from "sharp";

const framboisier = fs.readFileSync("./src/assets/fonts/framboisier-bold.woff");
const framboisierItalic = fs.readFileSync(
	"./src/assets/fonts/framboisier-bolditalic.woff",
);
const hankenFetch = await fetch(
	"https://cdn.jsdelivr.net/fontsource/fonts/hanken-grotesk@5.3.0/latin-500-normal.woff",
);
const hanken = await hankenFetch.arrayBuffer();

export async function generateOgImage(template: ReactNode) {
	const svg = await satori(template, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Framboisier",
				data: framboisier,
				weight: 700,
				style: "normal",
			},
			{
				name: "Framboisier",
				data: framboisierItalic,
				weight: 700,
				style: "italic",
			},
			{
				name: "Hanken Grotesk",
				data: hanken,
				weight: 500,
				style: "normal",
			},
		],
	});
	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return png;
}

type OgImageLayoutProps = PropsWithChildren<{
	style?: HTMLAttributes<"div">["style"];
}>;

function OgImageLayout({ style, children }: OgImageLayoutProps) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				paddingTop: "32px",
				paddingRight: "32px",
				paddingLeft: "32px",
				color: "hsl(35 10% 95%)",
				backgroundColor: "hsl(35 12% 15%)",
			}}
		>
			<div
				style={{
					flex: 1,
					position: "relative",
					display: "flex",
					flexDirection: "column",
					paddingTop: "128px",
					paddingLeft: "40px",
					paddingBottom: "32px",
					borderLeft: "8px solid hsl(35 90% 50%)",
					...style,
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 281 241"
					width="56"
					height="48"
					preserveAspectRatio="xMinYMid"
					style={{
						position: "absolute",
						top: "0",
						left: "-8px",
					}}
				>
					<path
						fill="hsl(35 90% 50%)"
						d="M280 120v120c-46.795 0-93.59.148-140.385-.001-24.624-.235-48.379-16.914-56.455-40.76-2.093-6.18-3.139-12.726-3.16-19.207V40H40v200H0V0h120c0 60.088-.568 120.178.002 180.263.164 10.317 9.135 19.703 20.03 19.737H240v-40h-80V0h40v120h80z"
					></path>
				</svg>

				{children}
			</div>
		</div>
	);
}

export function OgBlogPostImage({
	title,
	date,
}: {
	title: string;
	date: Date;
}): React.ReactNode {
	const formatter = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	});

	return (
		<OgImageLayout style={{ paddingTop: "32px", justifyContent: "center" }}>
			<span
				style={{
					fontFamily: "Framboisier",
					fontSize: "96px",
					fontWeight: 700,
					lineHeight: 1,
					fontStyle: "italic",
					textWrap: "balance",
				}}
			>
				{title}
			</span>

			<span
				style={{
					marginTop: "56px",
					fontFamily: "Hanken Grotesk",
					fontSize: "32px",
					fontWeight: 500,
					color: "hsl(35 25% 65%)",
				}}
			>
				{formatter.format(date)}
			</span>
		</OgImageLayout>
	);
}

export function OgSiteImage(): React.ReactNode {
	return (
		<OgImageLayout>
			<span
				style={{
					fontFamily: "Framboisier",
					fontSize: "96px",
					fontWeight: 700,
					lineHeight: 1,
					fontStyle: "italic",
				}}
			>
				My name is Alec Lomas,
			</span>

			<span
				style={{
					fontFamily: "Framboisier",
					fontSize: "96px",
					fontWeight: 700,
					lineHeight: 1,
					fontStyle: "italic",
				}}
			>
				and I make websites.
			</span>

			<span
				style={{
					marginTop: "56px",
					fontFamily: "Hanken Grotesk",
					fontSize: "32px",
					fontWeight: 500,
					color: "hsl(35 25% 65%)",
				}}
			>
				lowmess.com
			</span>
		</OgImageLayout>
	);
}
