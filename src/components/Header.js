import "../styles/Header.css";

function Header() {
	return (
		<div className="w-96 shrink-0">
			<div className="left-info">
				<img
					src="/images/img.png"
					alt="Ismail profile"
					className="my-6 animate-pulse"
				/>
				<h2 className="my-2 heading-primary text-[1.68rem] font-bold">
					Ismail Yahya
				</h2>
				<p className="mb-2 font-bold text-[#C6CDDC] text-sm">
					Frontend Developer
				</p>
				<ul className="links">
					<li>
						<a href="#">HOME</a>
					</li>
					<li>
						<a href="#about-me">ABOUT</a>
					</li>
					<li>
						<a href="#skills">SKILLS</a>
					</li>
					<li>
						<a href="#education">EDUCATION</a>
					</li>
					<li>
						<a href="#project">PROJECTS</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Header;
