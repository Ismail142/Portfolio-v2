import { Contacts, Education, Projects, Skills, Title } from "./Reusable";
import { useInView } from "react-intersection-observer";

function Content() {
	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className="grow max-md:mt-7">
			<h1
				className={`heading-primary md:text-5xl text-4xl mt-16 tracking-widest mb-3 animate__animated ${
					inView && "animate__fadeIn"
				}`}
				ref={ref}
			>
				I am a Frontend <br />
				Web Developer
			</h1>
			<p>Let's Build Massive & Quality Projects Together</p>
			<Title id="about-me" title="ABOUT ME" />
			<p className="leading-8 md:tracking-wider">
				Hi, my name Ismail Yahya, a passionate and dedicated frontend developer
				with a strong foundation in frontend development, I have spent
				considerable time honing my skills in creating visually captivating and
				user-friendly web interfaces.
				<br />
				<br />
				As a hardworking and passionate frontend developer, I'm dedicated to
				crafting exceptional projects that leave a lasting impression. With a
				solid skill set in HTML, CSS, SASS, Python, Javascript, Typescript, Git
				& GitHub, React.js, and Tailwind.css, I'm ready to bring your ideas to
				reality.
				<br />
				<br />I thrive on the opportunity to merge creativity and technical
				expertise to build engaging digital experience and beyond technical
				skills, I strongly value effective communication and teamwork and I
				believe that successful projects are the result of open collaboration
				where ideas are shared, perspectives are respected and collective
				efforts drive success.
			</p>

			<section id="section-skills">
				<Title id="skills" title="my skills" />
				<p>Here are my most important skills as a Creative Web Developer:</p>
				<div className="grid 2xl:grid-cols-4 mt-10 gap-7 grid-cols-1 md:grid-cols-3">
					{/* <Skills label="github" imgUrl="../../public/images" color="text-slate-500"/> */}
					<Skills
						label="html"
						imgUrl="images/icons8-html-5-100.f4f8f9f3.svg"
						color="text-red-500"
						animate="animate__slideInLeft"
					/>
					<Skills
						label="css"
						imgUrl="images/icons8-css3-100.910e90d7.svg"
						color="text-blue-500"
						animate="animate__slideInLeft"
					/>
					<Skills
						label="react"
						imgUrl="images/icons8-react-native-100.cb22b6eb.svg"
						color="text-[#80deea]"
						animate="animate__slideInRight"
					/>
					<Skills
						label="Javascript"
						imgUrl="images/icons8-javascript-logo-100.68bd372e.svg"
						color="text-yellow-300"
						animate="animate__slideInRight"
					/>
					<Skills
						label="Tailwind"
						imgUrl="images/icons8-tailwind-css-100.c76a1934.svg"
						color="text-blue-200"
						animate="animate__slideInLeft"
					/>
					<Skills
						label="github"
						imgUrl="images/icons8-github-100.8aa3ea86.svg"
						color="text-slate-500"
						animate="animate__slideInLeft"
					/>
					<Skills
						label="python"
						imgUrl="images/icons8-python.svg"
						color="text-lime-400"
						animate="animate__slideInRight"
					/>
					<Skills
						label="sass"
						imgUrl="images/icons8-sass-avatar.svg"
						color="text-pink-400"
						animate="animate__slideInRight"
					/>
					<Skills
						label="typescript"
						imgUrl="images/icons8-typescript-100.4303fe83.svg"
						color="text-blue-400"
						animate="animate__slideInLeft"
					/>
					<Skills
						label="bootstrap"
						imgUrl="images/icons8-bootstrap-100.e596746c.svg"
						color="text-blue-600"
						animate="animate__slideInRight"
					/>
				</div>
			</section>

			<section id="section-education">
				<Title id="education" title="education" />
				<p>
					My educational background serves as a solid foundation for my growth
					and achievements. Throughout my academic journey, I have pursued
					excellence in learning and embracing challenges to broaden my
					knowledge and develop valuable skills.
				</p>
				<div className="border-l-2 border-slate-400 my-10 pl-6 space-y-7">
					<Education
						school="akenten appiah menka university"
						course="Bsc. Information Technology"
						date="January 2023 - Now"
						description=""
					/>
					<Education
						school="osei kyeretwie senior high school"
						course="general science diploma"
						date="January 2015 - September 2018"
						description=""
					/>
				</div>
			</section>

			<section id="section-project">
				<Title id="project" title="my projects" />
				<p>These are some of the projects that I have worked on.</p>
				<div className="grid 2xl:grid-cols-[repeat(3,max-content)] my-10 gap-10 grid-cols-1 md:grid-cols-2">
					<Projects
						imgUrl="images/web-dev.jpg"
						link="https://webdevlinks.vercel.app"
						title="web dev links"
						icons={[
							"images/icons8-react-native-100.cb22b6eb.svg",
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
						]}
						description="After learning the basics of react I challenged myself in building this
					astounding project called Web Dev Links. Web Dev Links is a site where I
					have carefully curated collection of the web's best and most
					comprehensive web development resources all in one place."
					/>

					<Projects
						imgUrl="images/expense.jpg"
						link="https://expense-tracker-ismail142.vercel.app/"
						title="expense tracker"
						icons={[
							"images/icons8-react-native-100.cb22b6eb.svg",
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-css3-100.910e90d7.svg",
						]}
						description="Expense tracker is a web application that helped individuals to manage their personal finances effectively.
					 This web application empower the user to categorized it's expenses in a specific year."
					/>

					<Projects
						imgUrl="images/easybank.jpg"
						link="https://easybanking-ismail.netlify.app/"
						title="easy bank"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-css3-100.910e90d7.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
							"images/icons8-javascript-logo-100.68bd372e.svg",
						]}
						description="Easybank is  a one-stop-shop for spending, saving, budgeting, investing, and much more.
					 This user-friendly app offers a range of features that simplify financial transactions, enhance accessibility,
					 and provide comprehensive control over personal finances."
					/>

					<Projects
						imgUrl="images/urlshort.jpg"
						link="https://url-shortner-ismail142.vercel.app/"
						title="url shortner"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
							"images/icons8-react-native-100.cb22b6eb.svg",
						]}
						description="The URL Shortener Web App is a powerful online tool designed to simplify the process of shortening long 
					URLs into concise and shareable links. This app provides users with an efficient way to create shortened URLs,
					 track click statistics, and manage their shortened links effectively."
					/>

					<Projects
						imgUrl="images/age.png"
						link="https://age-calculator-challenge-app.netlify.app"
						title="age calculator"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
							"images/icons8-css3-100.910e90d7.svg",
							"images/icons8-javascript-logo-100.68bd372e.svg",
						]}
						description="Age calculator let you know the years, month and days you have spent on this beautiful earth."
					/>

					<Projects
						imgUrl="images/interactiveCard.jpg"
						link="https://interactive-card-ismail142.netlify.app"
						title="interactive card form"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
							"images/icons8-css3-100.910e90d7.svg",
							"images/icons8-javascript-logo-100.68bd372e.svg",
						]}
						description="The Interactive Card Form project is a web application that provides users with an engaging and user-friendly experience for filling out card-based forms. This project aims to enhance the traditional form-filling process by incorporating interactive elements, real-time validation, and intuitive design."
					/>

					<Projects
						imgUrl="images/clipboard.jpg"
						link="https://clipboard-project-ismail.netlify.app"
						title="clipboard landing page"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
							"images/icons8-css3-100.910e90d7.svg",
						]}
						description="The Clipboard Landing Page project is a visually appealing and user-friendly web page designed to showcase the features and benefits of a clipboard management tool. This landing page aims to engage visitors, highlight key functionalities, and encourage them to sign up or try out the clipboard application."
					/>

					<Projects
						imgUrl="images/loop.jpg"
						link="https://ismail142.github.io/LoopStudios-Landing-Page"
						title="LoopStudios landing page"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-tailwind-css-100.c76a1934.svg",
							"images/icons8-css3-100.910e90d7.svg",
							"images/icons8-javascript-logo-100.68bd372e.svg",
						]}
						description="I was tasked to create LoopStudios Landing Page Page which is a visually stunning and immersive web page designed to showcase the creative work and services offered by LoopStudios. 
					This project aims to captivate visitors, highlight the company's portfolio, and provide a seamless user experience."
					/>

					<Projects
						imgUrl="images/contact.jpg"
						link="https://ismail142.github.io/vincentlaw-firm"
						title="VINCENT law firm"
						icons={[
							"images/icons8-html-5-100.f4f8f9f3.svg",
							"images/icons8-css3-100.910e90d7.svg",
						]}
						description="This is was my first project as I began my frontend web development journey. This project
					drives me to puruse higher and I do love this project above all."
					/>
				</div>
			</section>

			<section id="section-contact">
				<Title id="contact" title="contact" />
				<p>
					I welcome the opportunity to connect and discuss potential
					collaborations or opportunities further and please feel free to reach
					out to me using the contact information provided below.
				</p>
				<div className="grid md:grid-cols-2 grid-cols-1 my-10 text-blue-300 gap-10">
					<Contacts
						imgUrl="images/github-contact.svg"
						link="https://github.com/Ismail142"
						label="Ismail Yahya"
					/>
					<Contacts
						imgUrl="images/linkedin-contact.svg"
						link="https://www.linkedin.com/in/ismail142"
						label="Ismail Yahya"
					/>
					<Contacts
						imgUrl="images/mail-contact.svg"
						link="mailto:yahyaismail142@gmail.com"
						label="yahyaismail142@gmail.com"
					/>
					<Contacts
						imgUrl="images/whatsapp-contact.svg"
						link="https://wa.me/+233593661751"
						label="+233 593 661 751"
					/>
				</div>
			</section>
		</div>
	);
}
export default Content;
