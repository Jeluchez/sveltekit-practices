/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const url = 'https://jsonplaceholder.typicode.com'
	try {
		const preAlbums = fetch(`${url}/albums`)
		const prePhotos = fetch(`${url}/photos`)
	
		const [albumsRes,photosRes] = await Promise.all([preAlbums, prePhotos])

		if (!albumsRes.ok || !photosRes.ok) {
            throw new Error('Network response was not ok');
        }
		return {
			albums: await albumsRes.json(),
			photos: await photosRes.json()
		};
	} catch (error) {
		throw new Error('It was not possible to resolve the request' + error)
	}
   
}
