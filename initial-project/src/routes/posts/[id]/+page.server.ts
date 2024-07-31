/** @type {import('./$types').PageServerLoad} */
export async function load({ params }:any) {
	const url = 'https://jsonplaceholder.typicode.com'
	try {
		const prePost = fetch(`${url}/posts/${params.slug}`)
		const preComment = fetch(`${url}/posts/${params.slug}/comments`)
	
		const [postRes,commentsRes] = await Promise.all([prePost, preComment])

		if (!postRes.ok || !commentsRes.ok) {
            throw new Error('Network response was not ok');
        }
		return {
			post: await postRes.json(),
			comments: commentsRes.json()
		};
	} catch (error) {
		throw new Error('It was not possible to resolve the request')
	}
   
}
