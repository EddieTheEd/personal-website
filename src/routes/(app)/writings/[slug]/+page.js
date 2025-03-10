export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	
	if (post.metadata.draft == 'true') {
		throw new Error('Draft');
	}
  else {
    const title = post.metadata.title;
    const date = post.metadata.date;
    const content = post.default;

    return {
      content,
      title,
      date
    };
  }
}
