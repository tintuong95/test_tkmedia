export async function getListGames(params) {
	const newParams = new URLSearchParams(params);
	const res = await fetch(
		'https://backrequiredspecialist--tintuong95.repl.co/list?' + newParams,
		{next: {revalidate: 0}}
	);
	return res.json();
}


export async function updateGame(id,data) {
	
	const res = await fetch(
		`https://backrequiredspecialist--tintuong95.repl.co/${id}/update`,
		{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data),
		}
	);
	return res.json();
}



export async function getGameDetails(id) {
	
	const res = await fetch(
		`https://backrequiredspecialist--tintuong95.repl.co/${id}/details?`
	);
	return res.json();
}

