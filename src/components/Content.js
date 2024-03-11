import { Contacts, Education, Projects, Skills, Title } from "./Reusable";
import { useInView } from "react-intersection-observer";

function Content(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});

	return (
		<div className="grow max-md:mt-7">
			<h1
				className={`heading-primary md:text-5xl text-4xl mt-16 tracking-widest mb-3 animate__animated animate__faster	${
					inView && "animate__fadeIn"
				}`}
				ref={ref}
			>
				I am a Frontend <br />
				Web Developer
			</h1>
			<p>Let's Build Massive & Quality Projects Together</p>
			<Title id="about-me" title="ABOUT ME" />
			<p className="leading-8 md:tracking-wider animUp ">
				Hello, my name is Ismail Yahya. As a frontend developer, I take pleasure
				in transforming complex designs into intuitive, user-friendly
				experiences. I thoroughly enjoy crafting accessible interfaces that
				deliver optimal performance across all devices.
				<br />
				With experience in technologies such as HTML, CSS, JavaScript, Tailwind CSS,  React
				and Typescript, I am well-equipped to bring lifeless designs to life as
				fully functional web applications
			</p>

			<section id="section-skills">
				<Title id="skills" title="my skills" />
				<p>Here are my most important skills as a Creative Web Developer:</p>
				<div className="grid 2xl:grid-cols-5 mt-10 gap-7 grid-cols-2 md:grid-cols-3">
					{/* <Skills label="github" imgUrl="../../public/images" color="text-slate-500"/> */}

					{props.datas.skills.map((skill) => {
						return (
							<Skills
								label={skill.label}
								imgUrl={skill.imgUrl}
								color={skill.color}
								animate='animUp'
							/>
						);
					})}
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
					{props.datas.educations.map((education) => {
						return (
							<Education
								school={education.school}
								course={education.course}
								date={education.date}
								lists={education.lists}
							/>
						);
					})}
				</div>
			</section>

			<section id="section-experience">
				<Title id="experience" title="experience" />
				<p>
					Throughout my career, I've had the privilege to work on real world
					peoblems and here are some of the most impactful companies I've worked
					with.
				</p>
				<div className="border-l-2 border-slate-400 my-10 pl-6 space-y-7">
					{props.datas.works.map((work) => {
						return (
							<Education
								school={work.school}
								course={work.course}
								date={work.date}
								lists={work.lists}
								mode="work"
							/>
						);
					})}
				</div>
			</section>

			<section id="section-project">
				<Title id="project" title="my projects" />
				<p>These are some of the projects that I have worked on.</p>
				<div className="grid 2xl:grid-cols-[repeat(3,max-content)] my-10 gap-10 grid-cols-1 sm:grid-cols-2 max-lg:gap-4 max-md:justify-center">
					{props.datas.projects.map((project) => {
						return (
							<Projects
								imgUrl={project.imgUrl}
								link={project.link}
								title={project.title}
								icons={project.icons}
								description={project.description}
							/>
						);
					})}
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
