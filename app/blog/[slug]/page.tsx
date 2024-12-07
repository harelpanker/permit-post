type PageProps = { params: { slug: string } };

export default async function PostPage({ params: { slug } }: PageProps) {
	return (
		<div>
			<h1>{slug}</h1>
		</div>
	);
}
