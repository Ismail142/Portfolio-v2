import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
	const datas = {
		skills: [
			{
				label: "html",
				imgUrl: "images/icons8-html-5-100.f4f8f9f3.svg",
				color: "text-red-500",
				animate: "animate__slideInLeft",
			},
			{
				label: "css",
				imgUrl: "images/icons8-css3-100.910e90d7.svg",
				color: "text-blue-500",
				animate: "animate__slideInLeft",
			},
			{
				label: "react",
				imgUrl: "images/icons8-react-native-100.cb22b6eb.svg",
				color: "text-[#80deea]",
				animate: "animate__slideInRight",
			},
			{
				label: "Javascript",
				imgUrl: "images/icons8-javascript-logo-100.68bd372e.svg",
				color: "text-yellow-500/90",
				animate: "animate__slideInRight",
			},
			{
				label: "Tailwind",
				imgUrl: "images/icons8-tailwind-css-100.c76a1934.svg",
				color: "text-blue-200",
				animate: "animate__slideInLeft",
			},
			{
				label: "github",
				imgUrl: "images/icons8-github-100.8aa3ea86.svg",
				color: "text-slate-500",
				animate: "animate__slideInLeft",
			},
			{
				label: "python",
				imgUrl: "images/icons8-python.svg",
				color: "text-lime-500",
				animate: "animate__slideInRight",
			},
			{
				label: "sass",
				imgUrl: "images/icons8-sass-avatar.svg",
				color: "text-pink-400",
				animate: "animate__slideInRight",
			},
			{
				label: "typescript",
				imgUrl: "images/icons8-typescript-100.4303fe83.svg",
				color: "text-blue-400",
				animate: "animate__slideInLeft",
			},
			{
				label: "bootstrap",
				imgUrl: "images/icons8-bootstrap-100.e596746c.svg",
				color: "text-blue-600",
				animate: "animate__slideInRight",
			},
		],
		educations: [
			{
				school: "akenten appiah menka university",
				course: "Bsc. Information Technology",
				date: "January 2023 - Now",
				lists: [
					"Practical learning have helped me through multiple group projects and case competitions. Which have made me more collaborative problem-solving, self-directed research, and commercial awareness of real-world business needs.",
				],
			},
		],
		projects: [
			{
				imgUrl: "images/web-dev.jpg",
				link: "https://webdevlinks.vercel.app",
				title: "web dev links",
				icons: [
					"images/icons8-react-native-100.cb22b6eb.svg",
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
				],
				description:
					"After learning the basics of react I challenged myself in building this astounding project called Web Dev Links. Web DeLinks is a site where I have carefully curated collection of the web's best and most comprehensive web development resources all in one place.",
			},
			{
				imgUrl: "images/postjob.jpg",
				link: "https://ismail142.github.io/PostJob-Finder-Landing-Page",
				title: "PostJob landing page",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
					"images/icons8-css3-100.910e90d7.svg",
				],
				description:
					"Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT",
			},
			{
				imgUrl: "images/fylo.jpg",
				link: "https://fylo-website-ismail142.netlify.app/",
				title: "fylo landing page",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-css3-100.910e90d7.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
				],
				description:
					"Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
			},
			{
				imgUrl: "images/easybank.jpg",
				link: "https://easybanking-ismail.netlify.app/",
				title: "easy bank",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-css3-100.910e90d7.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
				],
				description:
					"Easybank is  a one-stop-shop for spending, saving, budgeting, investing, and much more. This user-friendly app offers a range of features that simplify financial transactions, enhance accessibility, and provide comprehensive control over personal finances.",
			},
			{
				imgUrl: "images/urlshort.jpg",
				link: "https://url-shortner-ismail142.vercel.app/",
				title: "url shortner",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-react-native-100.cb22b6eb.svg",
				],
				description:
					"The URL Shortener Web App is a powerful online tool designed to simplify the process of shortening long URLs into concise and shareable links. This app provides users with an efficient way to create shortened URLs, track click statistics, and manage their shortened links effectively.",
			},
			{
				imgUrl: "images/calc-web.jpg",
				link: "https://calculator-web-app-ismail.vercel.app/",
				title: "Calculator",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
					"images/icons8-react-native-100.cb22b6eb.svg",
					"images/icons8-css3-100.910e90d7.svg",
				],
				description: "Let it take over your mathematical calculations.",
			},
			{
				imgUrl: "images/age.png",
				link: "https://age-calculator-challenge-app.netlify.app",
				title: "age calculator",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-css3-100.910e90d7.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
				],
				description:
					"Age calculator let you know the years, month and days you have spent on this beautiful earth.",
			},
			{
				imgUrl: "images/interactiveCard.jpg",
				link: "https://interactive-card-ismail142.netlify.app",
				title: "interactive card form",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-css3-100.910e90d7.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
				],
				description:
					"The Interactive Card Form project is a web application that ,provides users with an engaging and user-friendly experience for filling out card-based forms. This project aims to enhance the traditional form-filling process by incorporating interactive elements, real-time validation, and intuitive design.",
			},
			{
				imgUrl: "images/clipboard.jpg",
				link: "https://clipboard-project-ismail.netlify.app",
				title: "clipboard landing page",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-css3-100.910e90d7.svg",
				],
				description:
					"The Clipboard Landing Page project is a visually appealing and user-friendly web page designed to showcase the features and benefits of a clipboard management tool. This landing page aims to engage visitors, highlight key functionalities, and encourage them to sign up or try out the clipboard application.",
			},
			{
				imgUrl: "images/loop.jpg",
				link: "https://ismail142.github.io/LoopStudios-Landing-Page",
				title: "LoopStudios landing page",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-tailwind-css-100.c76a1934.svg",
					"images/icons8-css3-100.910e90d7.svg",
					"images/icons8-javascript-logo-100.68bd372e.svg",
				],
				description:
					"I was tasked to create LoopStudios Landing Page Page which is a visually stunning and immersive web page designed to showcase the creative work and services offered by LoopStudios. This project aims to captivate visitors, highlight the company's portfolio, and provide a seamless user experience.",
			},
			{
				imgUrl: "images/contact.jpg",
				link: "https://ismail142.github.io/vincentlaw-firm",
				title: "VINCENT law firm",
				icons: [
					"images/icons8-html-5-100.f4f8f9f3.svg",
					"images/icons8-css3-100.910e90d7.svg",
				],
				description:
					"This is was my first project as I began my frontend web development journey. This project drives me to puruse higher and I do love this project above all.",
			},
		],
		works: [{
			 school: "CodSoft",
			 date:  "February 2024 - March 2024", 
			 course: "Frontend Developer Intern",
			 lists: [
				"Collaborated with cross-functional teams to design and develop responsive web applications, ensuring optimal user experience across various devices and browsers.",
				"Translated UI/UX wireframes and designs into functional, efficient, and well-structured code using HTML, CSS, and JavaScript frameworks like ReactJS.",
				"Conducted thorough testing and debugging to identify and resolve frontend issues, ensuring high-quality and bug-free deliverables.",
				"Collaborated with the design team to provide feedback and suggestions for improving user interface and user experience aspects of the applications.",
				
			 ]
			}],
	};

	return (
		<main>
			<Header />
			<Content datas={datas} />
		</main>
	);
}

export default App;
