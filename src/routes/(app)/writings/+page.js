export async function load() {
	const modules = import.meta.glob('./*.md');
	const writings = await Promise.all(
		Object.entries(modules).map(async ([path, resolver]) => {
			const post = await resolver();
			const slug = path.split('/').pop().replace('.md', '');
			return {
				slug,
				...post.metadata
			};
		})
	);

	const publishedWritings = writings.filter(writing => !(writing.draft == 'true'));

	publishedWritings.sort((a, b) => new Date(b.date) - new Date(a.date));

	return { writings: publishedWritings };
}

