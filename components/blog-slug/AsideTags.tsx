import { FC } from 'react';
import Link from 'next/link';
import Title from '@/components/ui/Title';

type AsideTagsProps = {
	tags: {
		id: string;
		name: string;
		slug: string;
	}[];
};

const AsideTags: FC<AsideTagsProps> = ({ tags }) => {
	return (
		<div className='flex flex-col gap-y-3'>
			<Title size={18}>
				<h2>Related Tags</h2>
			</Title>
			<ul className='group flex flex-wrap gap-x-3 gap-y-2'>
				{tags.map((tag) => (
					<li key={tag.id} className='flex'>
						<Link
							className='rounded-full border border-_451E11 px-3 py-1 text-xs font-medium transition duration-500 hover:bg-_451E11 hover:text-_FDF8F6 hover:!opacity-100 group-hover:opacity-50 md:text-sm'
							href={`/tags/${tag.slug}`}>
							{tag.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AsideTags;
