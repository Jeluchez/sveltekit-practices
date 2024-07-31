export async function load({ fetch }) {
	const url = 'https://jsonplaceholder.typicode.com/users'
	const res = await fetch(`${url}/1`);
    const user = await res.json()
	return {user};
}