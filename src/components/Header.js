import { useEffect } from "react";
import "../styles/Header.css";

function Header() {
	let mobileNav, mobileMenu, stickyHeader, overlay;
	const body = document.body;
	let toogle = false;

	const activateMenu = () => {
		body.classList.toggle("overflow-hidden");
		mobileNav.classList.toggle("active");
		mobileMenu.classList.toggle("open");
		overlay.classList.toggle("hidden");

		if (toogle && window.scrollY > 100) {
			stickyHeader.classList.remove("hidden");
		} else {
			stickyHeader.classList.add("hidden");
		}

		toogle = toogle ? false : true;
	};

	const load = () => {
		mobileNav = document.querySelector(".mobile-nav");
		mobileMenu = document.querySelector(".menu-btn");
		stickyHeader = document.querySelector(".sticky-header");
		console.log(stickyHeader);
		overlay = document.querySelector(".overlay");
	};

	const overlayFunction = () => {
		if (toogle) {
			overlay.classList.add("hidden");
			body.classList.remove("overflow-hidden");
			mobileNav.classList.remove("active");
			mobileMenu.classList.remove("open");
			if (window.scrollY > 100) stickyHeader.classList.remove("hidden");
			toogle = toogle ? false : true;
		}
	};

	useEffect(() => {
		if (window.innerWidth < 1024) {
			window.addEventListener("scroll", () => {
				if (window.scrollY > 100) {
					stickyHeader.classList.remove("hidden");
				} else {
					stickyHeader.classList.add("hidden");
				}
			});
		}
	}, []);

	return (
		<div onLoad={load}>
			<div className="fixed bg-slate-700 p-8 md:p-10 top-0 left-0 right-0 z-[2] sticky-header hidden duration-200 opacity-90"></div>
			<div className="mobile-menu" onClick={activateMenu}>
				<div className="menu-btn">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="lg:w-96 md:w-80 shrink-0 mobile-parent">
				<div className="overlay hidden" onClick={overlayFunction}></div>
				<div className="left-info mobile-nav">
					<img src="/images/img.png" alt="Ismail profile" className="my-6" />
					<h2 className="my-2 heading-primary text-[1.68rem] font-bold">
						Ismail Yahya
					</h2>
					<p className="mb-2 font-bold text-[#C6CDDC] text-sm">
						Frontend Developer
					</p>
					<ul className="links" onClick={overlayFunction}>
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
		</div>
	);
}
export default Header;
