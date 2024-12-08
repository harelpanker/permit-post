import { FC } from 'react';
import Link from 'next/link';
import styles from '@/styles/post/styles.module.css';

type ArticleBreadcrumbsProps = { postName: string };

const ArticleBreadcrumbs: FC<ArticleBreadcrumbsProps> = ({ postName }) => {
	return (
		<div className='flex flex-wrap gap-2 text-sm font-medium'>
			<Link href='/' className={`${styles.breadcrumbsLink}`}>
				Home
			</Link>
			/
			<Link href='/blog' className={`${styles.breadcrumbsLink}`}>
				Blog
			</Link>
			/<div className={`${styles.breadcrumbsLink} pointer-events-none`}>{postName}</div>
		</div>
	);
};

export default ArticleBreadcrumbs;
