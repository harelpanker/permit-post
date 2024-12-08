import { notFound } from 'next/navigation';
// service
import { getMax3PostsCards, getMembersTotalNumber, getPostDetails } from '@/lib/services/index';

type PageProps = { params: { slug: string } };

import '@/styles/post/style.css';
import Article from '@/components/blog-slug/Article';

export default async function PostPage({ params: { slug } }: PageProps) {
	const memberNumber = await getMembersTotalNumber();
	const postD = await getPostDetails(slug);
	const postData = postD[0];
	const readMoreData = await getMax3PostsCards(postData.id, postData.tags);

	if (!postD || !postData) notFound();

	return (
		<div>
			<Article post={postData} readMore={readMoreData || []} />
		</div>
	);
}
