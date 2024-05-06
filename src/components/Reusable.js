import { useInView } from "react-intersection-observer";

export function Title(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<>
			<h3
				id={props.id}
				className={`mt-20 mb-10 tracking-widest text-white uppercase font-playfair text-lg animate__animated animate__fast ${
					inView && "animate__fadeIn"
				}`}
				ref={ref}
			>
				{props.title}
			</h3>
		</>
	);
}

export function Skills(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		// bg-white/90  bg-slate-100
		<div
			className={`bg-slate-700/90 rounded-xl flex flex-col gap-y-3 justify-between items-center p-5  duration-200 hover:bg-slate-600/90 ${
				inView &&  ""
			} hover:scale-105`}
			ref={ref}
		>
			<img src={props.imgUrl} alt={`${props.label} icon`}></img>
			<p className={`${props.color} uppercase pr-3`}>{props.label}</p>
		</div>
	);
}

export function Projects(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<a
			className={`flex flex-col gap-y-3 md:p-7 p-4 rounded-md text-white bg-black/80 hover:bg-black/20
			duration-300 shadow-md hover:scale-105 shadow-slate-600/20  ${
				inView && ""
			}`}
			href={props.link}
			target="_blank"
			rel="noreferrer"
			ref={ref}
		>
			<img
				src={props.imgUrl}
				alt={props.title}
				className="h-[14rem] w-[22rem]"
			/>
			<p className="uppercase  text-lg">{props.title}</p>
			<div className="flex gap-x-2">
				{props.icons.map((icon, index) => {
					return <img src={icon} className="h-7" key={index} />;
				})}
			</div>
			<p className="text-sm 2xl:w-[22rem] xl:w-[20rem] leading-5 text-white/85">
				{props.description}
			</p>
		</a>
	);
}

export function Contacts(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<div
			className={`flex items-center gap-x-5 animate__animated animate__fast ${
				inView && "animate__fadeIn"
			}`}
			ref={ref}
		>
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="rounded-md bg-slate-800 p-8"
			>
				<img src={props.imgUrl} className="h-10" />
			</a>
			<a
				href={props.link}
				target="_blank"
				rel="noreferrer"
				className="max-md:text-sm"
			>
				{props.label}
			</a>
		</div>
	);
}

export function Education(props) {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});
	const imageUrl = props.mode === 'work'? "images/work-svg.svg" : "images/icons8-education-50.png"
	return (
		<div
			className={`hover:bg-slate-800/50 rounded-md p-2 relative ${
				inView && "animUp"
			}`}
			ref={ref}
		>
			<time className="text-sm">{props.date}</time>
			<h3 className="capitalize font-bold text-xl mt-1">{props.school}</h3>
			<p className="mb-2 text-[17px] capitalize">{props.course}</p>
			<ul className="list-disc text-sm space-y-2">
				{props.lists.map((list) => (
					<li className="max-w-lg">{list}</li>
				))}
			</ul>
			<div className="p-2 bg-blue-500 rounded-full inline-block ring-2 ring-white/85 absolute top-[1rem] -left-[43.5px]">
				<img
					src={imageUrl}
					className="h-5"
					alt="education icon"
				/>
			</div>
		</div>
	);
}
