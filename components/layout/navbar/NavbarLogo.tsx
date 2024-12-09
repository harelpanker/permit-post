import Image from 'next/image';

import logo from '@/public/images/company/nav_logo.svg';

const NavbarLogo = () => {
	return (
		<a
			className='max-w-[150px] lg:max-w-[196px]'
			target='_blank'
			rel='noopener noreferrer'
			href='https://www.permit.io/'>
			<Image src={logo} alt='Permit logo' priority />
		</a>
	);
};

export default NavbarLogo;
