import { useInView } from "react-intersection-observer";

export function Title(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<>
			<h3
				id={props.id}
				className={`mt-20 mb-10 tracking-widest text-white uppercase font-playfair text-lg animate__animated ${
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
		<div
			className={`bg-white/90 rounded-xl flex justify-between items-center p-5  duration-500
			  hover:scale-105 hover:bg-slate-100 animate__animated ${
					inView && (window.innerWidth<768?'animate__fadeIn':props.animate)
				} animate__faster`}
			ref={ref}
		>
			<img src={props.imgUrl} alt={`${props.label} icon`}></img>
			<p className={`${props.color} uppercase`}>{props.label}</p>
		</div>
	);
}

export function Projects(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<a
			className={`flex flex-col gap-y-3 md:p-7 p-4  rounded-md text-white bg-black/80 hover:bg-black/20
			duration-300 shadow-md hover:scale-105 shadow-slate-600/20 animate__animated ${
				inView && "animate__fadeIn"
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
			<p className="lg:w-[22rem] text-sm leading-5 text-white/85">
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
		<a
			href={props.link}
			target="_blank"
			className={`flex items-center gap-x-5 animate__animated ${
				inView && "animate__fadeIn"
			}`}
			rel="noreferrer"
			ref={ref}
		 >
			<div className="rounded-md bg-slate-800 p-8">
				<img src={props.imgUrl} className="h-10" />
			</div>
			<p className="max-md:text-sm">{props.label}</p>
		</a>
	);
}

export function Education(props) {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<div
			className={`hover:bg-slate-800/50 rounded-md p-2 relative animate__animated ${
				inView && "animate__fadeIn"
			}`}
			ref={ref}
		>
			<time className="text-sm">{props.date}</time>
			<h3 className="capitalize font-bold text-xl mt-1">{props.school}</h3>
			<p className="mb-2 text-[17px] capitalize">{props.course}</p>
			<p>{props.description}</p>
			<div className="p-2 bg-blue-500 rounded-full inline-block ring-2 ring-white/85 absolute top-[1rem] -left-[43.5px]">
				<img
					src="images/icons8-education-50.png"
					className="h-5"
					alt="education icon"
				/>
			</div>
		</div>
	);
}
