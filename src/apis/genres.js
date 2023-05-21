export async function getListGenres() {

	const res = await fetch(
		'https://backrequiredspecialist--tintuong95.repl.co/genres/list' 
	);
	return res.json();
}
