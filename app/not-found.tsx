'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NotFound() {
	const baseUrl = 'https://www.permit.io';
	const pathname = usePathname();

	useEffect(() => {
		window.location.href = baseUrl + pathname;
	}, []);

	return <div></div>;
}
