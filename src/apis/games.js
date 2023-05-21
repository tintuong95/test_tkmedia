export async function getListGames(params) {
	const newParams = new URLSearchParams(params);
	const res = await fetch(process.env.SERVER + '/list?' + newParams, {
		next: {revalidate: 0},
	});
	return res.json();
}

export async function updateGame(id, data) {
	const res = await fetch(`${process.env.SERVER}/${id}/update`, {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data),
	});
	return res.json();
}

export async function getGameDetails(id) {
	const res = await fetch(`${process.env.SERVER}/${id}/details?`);
	return res.json();
}
