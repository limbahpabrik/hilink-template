import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className='flexCenter mb-24 '>
			<div className='max-container padding-container w-full flex flex-col gap-14'>
				<div className='flex flex-col justify-center items-start gap-[10%] md:flex-row'>
					<Link href={"/"} className='mb-10'>
						<Image
							src={"/hilink-logo.svg"}
							alt='Logo'
							width={74}
							height={29}
						/>
					</Link>

					<div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
						{FOOTER_LINKS.map((link) => (
							<FooterItems title={link.title}>
								<ul className='regular-14 flex flex-col gap-4 text-gray-30'>
									{link.links.map((item) => (
										<Link
											href={"/"}
											className=' transition-all hover:font-bold'>
											{item}
										</Link>
									))}
								</ul>
							</FooterItems>
						))}

						<div className='flex flex-col gap-5'>
							<FooterItems title={FOOTER_CONTACT_INFO.title}>
								{FOOTER_CONTACT_INFO.links.map((item) => (
									<Link
										href={"/"}
										key={item.label}
										className='flex gap-4 md:flex-col lg:flex-row'>
										<p className='whitespace-nowrap'>
											{item.label}:
										</p>
										<p className='medium-14 whitespace-nowrap text-blue-70'>
											{item.value}
										</p>
									</Link>
								))}
							</FooterItems>
						</div>

						<div className='flex flex-col gap-5'>
							<FooterItems title={SOCIALS.title}>
								<ul className='regular-14 flex gap-4 text-gray-30'>
									{SOCIALS.links.map((item) => (
										<Link href={"/"}>
											<Image
												src={item}
												key={item}
												alt='social'
												width={28}
												height={28}
												className=' transition-all hover:scale-110'
											/>
										</Link>
									))}
								</ul>
							</FooterItems>
						</div>
					</div>
				</div>
				<div className='border bg-gray-20' />
				<p className='regular-16 text-center w-full text-gray-30'>
					© 2022. All rights reserved
				</p>
			</div>
		</footer>
	);
};

const FooterItems = ({ title, children }: FooterProps) => {
	return (
		<div className='flex flex-col gap-5'>
			<h4 className='bold-16 whitespace-nowrap'>{title}</h4>
			{children}
		</div>
	);
};

type FooterProps = {
	title: string;
	children: React.ReactNode;
};

export default Footer;
