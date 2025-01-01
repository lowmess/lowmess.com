import { z } from "astro:content";

/**
 * a zod version of the jsonresume schema. automatically converted using transform.tools.
 * @link https://github.com/jsonresume/resume-schema/blob/50798e359292ad4448d95b3bb0de5f694d6bcc4b/schema.json
 * @link https://transform.tools/json-schema-to-zod
 */
export const resumeSchema = z
	.object({
		$schema: z
			.string()
			.url()
			.describe(
				"link to the version of the schema that can validate the resume",
			)
			.optional(),
		basics: z
			.object({
				name: z.string().optional(),
				label: z.string().describe("e.g. Web Developer").optional(),
				image: z
					.string()
					.describe("URL (as per RFC 3986) to a image in JPEG or PNG format")
					.optional(),
				email: z.string().email().describe("e.g. thomas@gmail.com").optional(),
				phone: z
					.string()
					.describe(
						"Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923",
					)
					.optional(),
				url: z
					.string()
					.url()
					.describe(
						"URL (as per RFC 3986) to your website, e.g. personal homepage",
					)
					.optional(),
				summary: z
					.string()
					.describe("Write a short 2-3 sentence biography about yourself")
					.optional(),
				location: z
					.object({
						address: z
							.string()
							.describe(
								"To add multiple address lines, use \n. For example, 1234 Glücklichkeit Straße\nHinterhaus 5. Etage li.",
							)
							.optional(),
						postalCode: z.string().optional(),
						city: z.string().optional(),
						countryCode: z
							.string()
							.describe("code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN")
							.optional(),
						region: z
							.string()
							.describe(
								"The general region where you live. Can be a US state, or a province, for instance.",
							)
							.optional(),
					})
					.catchall(z.any())
					.optional(),
				profiles: z
					.array(
						z
							.object({
								network: z
									.string()
									.describe("e.g. Facebook or Twitter")
									.optional(),
								username: z
									.string()
									.describe("e.g. neutralthoughts")
									.optional(),
								url: z
									.string()
									.url()
									.describe("e.g. http://twitter.example.com/neutralthoughts")
									.optional(),
							})
							.catchall(z.any()),
					)
					.describe(
						"Specify any number of social networks that you participate in",
					)
					.optional(),
			})
			.catchall(z.any())
			.optional(),
		work: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. Facebook").optional(),
						location: z.string().describe("e.g. Menlo Park, CA").optional(),
						description: z
							.string()
							.describe("e.g. Social Media Company")
							.optional(),
						position: z.string().describe("e.g. Software Engineer").optional(),
						url: z
							.string()
							.url()
							.describe("e.g. http://facebook.example.com")
							.optional(),
						startDate: z.any().optional(),
						endDate: z.any().optional(),
						summary: z
							.string()
							.describe(
								"Give an overview of your responsibilities at the company",
							)
							.optional(),
						highlights: z
							.array(
								z
									.string()
									.describe(
										"e.g. Increased profits by 20% from 2011-2012 through viral advertising",
									),
							)
							.describe("Specify multiple accomplishments")
							.optional(),
					})
					.catchall(z.any()),
			)
			.optional(),
		volunteer: z
			.array(
				z
					.object({
						organization: z.string().describe("e.g. Facebook").optional(),
						position: z.string().describe("e.g. Software Engineer").optional(),
						url: z
							.string()
							.url()
							.describe("e.g. http://facebook.example.com")
							.optional(),
						startDate: z.any().optional(),
						endDate: z.any().optional(),
						summary: z
							.string()
							.describe(
								"Give an overview of your responsibilities at the company",
							)
							.optional(),
						highlights: z
							.array(
								z
									.string()
									.describe(
										"e.g. Increased profits by 20% from 2011-2012 through viral advertising",
									),
							)
							.describe("Specify accomplishments and achievements")
							.optional(),
					})
					.catchall(z.any()),
			)
			.optional(),
		education: z
			.array(
				z
					.object({
						institution: z
							.string()
							.describe("e.g. Massachusetts Institute of Technology")
							.optional(),
						url: z
							.string()
							.url()
							.describe("e.g. http://facebook.example.com")
							.optional(),
						area: z.string().describe("e.g. Arts").optional(),
						studyType: z.string().describe("e.g. Bachelor").optional(),
						startDate: z.any().optional(),
						endDate: z.any().optional(),
						score: z
							.string()
							.describe("grade point average, e.g. 3.67/4.0")
							.optional(),
						courses: z
							.array(
								z
									.string()
									.describe("e.g. H1302 - Introduction to American history"),
							)
							.describe("List notable courses/subjects")
							.optional(),
					})
					.catchall(z.any()),
			)
			.optional(),
		awards: z
			.array(
				z
					.object({
						title: z
							.string()
							.describe("e.g. One of the 100 greatest minds of the century")
							.optional(),
						date: z.any().optional(),
						awarder: z.string().describe("e.g. Time Magazine").optional(),
						summary: z
							.string()
							.describe("e.g. Received for my work with Quantum Physics")
							.optional(),
					})
					.catchall(z.any()),
			)
			.describe(
				"Specify any awards you have received throughout your professional career",
			)
			.optional(),
		certificates: z
			.array(
				z
					.object({
						name: z
							.string()
							.describe("e.g. Certified Kubernetes Administrator")
							.optional(),
						date: z.any().optional(),
						url: z
							.string()
							.url()
							.describe("e.g. http://example.com")
							.optional(),
						issuer: z.string().describe("e.g. CNCF").optional(),
					})
					.catchall(z.any()),
			)
			.describe(
				"Specify any certificates you have received throughout your professional career",
			)
			.optional(),
		publications: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. The World Wide Web").optional(),
						publisher: z
							.string()
							.describe("e.g. IEEE, Computer Magazine")
							.optional(),
						releaseDate: z.any().optional(),
						url: z
							.string()
							.url()
							.describe(
								"e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html",
							)
							.optional(),
						summary: z
							.string()
							.describe(
								"Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.",
							)
							.optional(),
					})
					.catchall(z.any()),
			)
			.describe("Specify your publications through your career")
			.optional(),
		skills: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. Web Development").optional(),
						level: z.string().describe("e.g. Master").optional(),
						keywords: z
							.array(z.string().describe("e.g. HTML"))
							.describe("List some keywords pertaining to this skill")
							.optional(),
					})
					.catchall(z.any()),
			)
			.describe("List out your professional skill-set")
			.optional(),
		languages: z
			.array(
				z
					.object({
						language: z.string().describe("e.g. English, Spanish").optional(),
						fluency: z.string().describe("e.g. Fluent, Beginner").optional(),
					})
					.catchall(z.any()),
			)
			.describe("List any other languages you speak")
			.optional(),
		interests: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. Philosophy").optional(),
						keywords: z
							.array(z.string().describe("e.g. Friedrich Nietzsche"))
							.optional(),
					})
					.catchall(z.any()),
			)
			.optional(),
		references: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. Timothy Cook").optional(),
						reference: z
							.string()
							.describe(
								"e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.",
							)
							.optional(),
					})
					.catchall(z.any()),
			)
			.describe("List references you have received")
			.optional(),
		projects: z
			.array(
				z
					.object({
						name: z.string().describe("e.g. The World Wide Web").optional(),
						description: z
							.string()
							.describe(
								"Short summary of project. e.g. Collated works of 2017.",
							)
							.optional(),
						highlights: z
							.array(
								z
									.string()
									.describe("e.g. Directs you close but not quite there"),
							)
							.describe("Specify multiple features")
							.optional(),
						keywords: z
							.array(z.string().describe("e.g. AngularJS"))
							.describe("Specify special elements involved")
							.optional(),
						startDate: z.any().optional(),
						endDate: z.any().optional(),
						url: z
							.string()
							.url()
							.describe(
								"e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html",
							)
							.optional(),
						roles: z
							.array(z.string().describe("e.g. Team Lead, Speaker, Writer"))
							.describe("Specify your role on this project or in company")
							.optional(),
						entity: z
							.string()
							.describe(
								"Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'",
							)
							.optional(),
						type: z
							.string()
							.describe(
								" e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'",
							)
							.optional(),
					})
					.catchall(z.any()),
			)
			.describe("Specify career projects")
			.optional(),
		meta: z
			.object({
				canonical: z
					.string()
					.url()
					.describe("URL (as per RFC 3986) to latest version of this document")
					.optional(),
				version: z
					.string()
					.describe("A version field which follows semver - e.g. v1.0.0")
					.optional(),
				lastModified: z
					.string()
					.describe("Using ISO 8601 with YYYY-MM-DDThh:mm:ss")
					.optional(),
			})
			.catchall(z.any())
			.describe(
				"The schema version and any other tooling configuration lives here",
			)
			.optional(),
	})
	.catchall(z.any());
