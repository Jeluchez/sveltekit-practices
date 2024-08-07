// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load({ fetch }) {
	const url = 'https://jsonplaceholder.typicode.com/users'
	const res = await fetch(`${url}/1`);
    const user = await res.json()
	return {user};
}
