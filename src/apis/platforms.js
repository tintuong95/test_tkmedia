export async function getListPlatforms() {
	const res = await fetch(
		process.env.SERVER+'/plastform/list'
	);
	return res.json();
}
