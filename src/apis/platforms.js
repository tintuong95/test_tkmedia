export async function getListPlatforms() {
	const res = await fetch(
		'https://backrequiredspecialist--tintuong95.repl.co/plastform/list'
	);
	return res.json();
}
