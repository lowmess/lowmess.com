import fs from "fs";
import React, {
	type HTMLAttributes,
	type PropsWithChildren,
	type ReactNode,
} from "react";
import satori from "satori";
import sharp from "sharp";

export async function generateOgImage(template: ReactNode) {
	const svg = await satori(template, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Izoard",
				data: fs.readFileSync("./src/assets/fonts/izoard-regular-webfont.woff"),
				weight: 400,
				style: "normal",
			},
			{
				name: "Strawford",
				data: fs.readFileSync(
					"./src/assets/fonts/strawford-regular-webfont.woff",
				),
				weight: 400,
				style: "normal",
			},
			{
				name: "Strawford",
				data: fs.readFileSync("./src/assets/fonts/strawford-bold-webfont.woff"),
				weight: 700,
				style: "normal",
			},
		],
	});
	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return png;
}

type OgImageLayoutProps = PropsWithChildren<{
	style?: HTMLAttributes<"div">["style"];
	footerText?: string;
}>;

function OgImageLayout({ style, footerText, children }: OgImageLayoutProps) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				color: "hsl(35 10% 95%)",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					height: "459px",
					paddingTop: "24px",
					paddingRight: "32px",
					paddingLeft: "32px",
					backgroundColor: "hsl(35 10% 18%)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						width: "100%",
						height: "100%",
						border: "16px solid hsl(35 20% 35%)",
						borderBottomWidth: 0,
						borderTopRightRadius: "16px",
						borderTopLeftRadius: "16px",
						padding: "96px",
						backgroundColor: "hsl(35 10% 18%)",
						...style,
					}}
				>
					<div
						style={{
							position: "absolute",
							top: "-16px",
							left: "-16px",
							width: "96px",
							height: "112px",
							backgroundColor: "hsl(35 10% 18%)",
						}}
					/>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 281 241"
						width="112"
						height="96"
						preserveAspectRatio="xMinYMid"
						style={{
							position: "absolute",
							top: "-16px",
							left: "-16px",
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

			<div
				style={{
					display: "flex",
					width: "100%",
					height: "176px",
					paddingBottom: "32px",
					paddingRight: "32px",
					paddingLeft: "32px",
					backgroundColor: "hsl(35 10% 15%)",
					color: "hsl(35 20% 50%)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						width: "100%",
						height: "100%",
						border: "16px solid hsl(35 20% 35%)",
						borderTopWidth: 0,
						borderBottomRightRadius: "16px",
						borderBottomLeftRadius: "16px",
						padding: "32px",
						backgroundColor: "hsl(35 10% 15%)",
						fontFamily: "Strawford",
						fontWeight: 400,
						fontSize: "36px",
					}}
				>
					{footerText}
				</div>
			</div>
		</div>
	);
}

export function OgBlogPostImage({
	title,
	date,
	slug,
}: {
	title: string;
	date: Date;
	slug: string;
}): React.ReactNode {
	const formatter = new Intl.DateTimeFormat("en-US", {
		dateStyle: "long",
	});

	return (
		<OgImageLayout footerText={`lowmess.com/blog/${slug}`}>
			<span
				style={{
					fontFamily: "Izoard",
					fontSize: "32px",
					textTransform: "uppercase",
					letterSpacing: "4px",
					lineHeight: 1,
					textAlign: "center",
					color: "hsl(35 20% 50%)",
				}}
			>
				{formatter.format(date)}
			</span>

			<span
				style={{
					marginTop: "16px",
					fontFamily: "Strawford",
					fontSize: "96px",
					fontWeight: 700,
					lineHeight: 1,
					textAlign: "center",
					textWrap: "balance",
					textTransform: "lowercase",
				}}
			>
				{title}
			</span>
		</OgImageLayout>
	);
}

export function OgSiteImage(): React.ReactNode {
	return (
		<OgImageLayout
			style={{ paddingTop: "128px", paddingRight: 0, paddingLeft: 0 }}
			footerText="lowmess.com"
		>
			<span
				style={{
					fontFamily: "Strawford",
					fontSize: "96px",
					fontWeight: 700,
					lineHeight: 1,
					textAlign: "center",
					textTransform: "lowercase",
				}}
			>
				my name is alec lomas<span style={{ color: "hsl(35 90% 50%)" }}>,</span>
			</span>

			<span
				style={{
					fontFamily: "Strawford",
					fontSize: "96px",
					fontWeight: 700,
					lineHeight: 1,
					textAlign: "center",
					textTransform: "lowercase",
				}}
			>
				and i make websites<span style={{ color: "hsl(35 90% 50%)" }}>.</span>
			</span>
		</OgImageLayout>
	);
}
