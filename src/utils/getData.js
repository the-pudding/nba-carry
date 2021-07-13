import { groups, descending, format } from "d3";

const f = (x) => format(".2f")(x);

export default function getData({ players, metric }) {
	const byTeamSeason = groups(players, (d) => `${d.team}${d.season}`).map(([key, data]) => {
		data.sort((a, b) => descending(+a[metric], +b[metric]));
		return {
			top: data[0],
			others: data.slice(1)
		};
	});

	const withComps = byTeamSeason.map(({ top, others }) => {
		const delta2 = f(+top[metric] - +others[0][metric]);
		const player2 = others[0].player_name;
		return {
			top,
			others,
			delta2,
			player2
		};
	});

	const topPlayers = withComps.map(({ top, player2, delta2 }) => ({
		...top,
		player2,
		delta2
	}));

	topPlayers.sort((a, b) => descending(a.delta2, b.delta2));

	return topPlayers;
}