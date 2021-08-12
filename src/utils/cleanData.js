import teamMap from "$data/teams.json";

export default function cleanData(data) {
	const MP_MIN = 150;

	const clean = data
		.map((d) => ({
			name: d.player_name,
			id: d.player_id,
			season: +d.season,
			team: d.team,
			ts: `${d.team}-${d.season}`,
			poss: +d.poss,
			mp: +d.mp,
			raptor: +d.raptor_total,
			war: +d.war,
			place: d.winner === "true" ? "winner" : "loser",
			warposs: (+d.war / +d.poss) * 100
		}))
		.filter((d) => +d.mp >= MP_MIN);

	const teams = {};

	clean.forEach(d => {
		if (!teams[d.ts]) teams[d.ts] = [];
		teams[d.ts].push(d);
	});

	const output = Object.keys(teams).map(ts => {
		const players = teams[ts];
		players.sort((a, b) => b.war - a.war);
		const { team, season, place } = players[0];
		const teamName = teamMap[team];
		return { players, team, teamName, season, place, ts };
	});

	return output;
}
