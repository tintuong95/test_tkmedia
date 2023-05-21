export async function getListGenres() {
	const res = await fetch(process.env.SERVER + '/genres/list');
	return res.json();
}
