import React, { type HTMLAttributes, type PropsWithChildren } from "react";

function OgImageLayout({
	style,
	children,
}: PropsWithChildren<{ style?: HTMLAttributes<"div">["style"] }>) {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "100%",
				backgroundColor: "hsl(35 10% 18%)",
				backgroundImage: "url(https://lowmess.com/images/topography-dark.svg)",
				backgroundSize: "1800px 1800px",
				backgroundPosition: "center",
				color: "hsl(35 10% 95%)",
				padding: "32px",
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
					borderRadius: "16px",
					padding: "96px",
					paddingBottom: "128px",
					backgroundColor: "hsl(35 10% 18%)",
					...style,
				}}
			>
				<div
					style={{
						position: "absolute",
						top: "-16px",
						left: "32px",
						width: "16px",
						height: "16px",
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
						fill="hsl(35 20% 35%)"
						d="M280 120v120c-46.795 0-93.59.148-140.385-.001-24.624-.235-48.379-16.914-56.455-40.76-2.093-6.18-3.139-12.726-3.16-19.207V40H40v200H0V0h120c0 60.088-.568 120.178.002 180.263.164 10.317 9.135 19.703 20.03 19.737H240v-40h-80V0h40v120h80z"
					></path>
				</svg>

				{children}

				<div
					style={{
						position: "absolute",
						bottom: "-16px",
						right: "32px",
						width: "16px",
						height: "16px",
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
						bottom: "-16px",
						right: "-16px",
						transform: "rotate(180deg)",
					}}
				>
					<path
						fill="hsl(35 20% 35%)"
						d="M280 120v120c-46.795 0-93.59.148-140.385-.001-24.624-.235-48.379-16.914-56.455-40.76-2.093-6.18-3.139-12.726-3.16-19.207V40H40v200H0V0h120c0 60.088-.568 120.178.002 180.263.164 10.317 9.135 19.703 20.03 19.737H240v-40h-80V0h40v120h80z"
					></path>
				</svg>
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
		<OgImageLayout>
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

			<div
				style={{
					height: "16px",
					width: "256px",
					marginTop: "64px",
					backgroundColor: "hsl(35 90% 50%)",
				}}
			/>
		</OgImageLayout>
	);
}

export function OgSiteImage(): React.ReactNode {
	return (
		<OgImageLayout style={{ paddingRight: 0, paddingLeft: 0 }}>
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
