import { groups, descending, format, mean } from "d3";

const f = (x) => format(".2f")(x);

export default function getData({ players, metric }) {
	const clean = players.map(d => ({ ...d, [[metric]]: +d[metric] }));

	const byTeamSeason = groups(clean, (d) => `${d.team}${d.season}`).map(([key, data]) => {
		data.sort((a, b) => descending(a[metric], b[metric]));
		return {
			top: data[0],
			others: data.slice(1)
		};
	});

	const withComps = byTeamSeason.map(({ top, others }) => {
		const delta2 = f(top[metric] - others[0][metric]);
		const mate2 = others[0].player_name;

		const mean5 = mean(others.slice(0, 4).map(d => d[metric]));
		const delta5 = f(top[metric] - mean5);
		const mate5 = others.slice(0, 4).map(d => d.player_name.split(" ")[1]).join(", ");


		return {
			...top,
			others,
			delta2,
			mate2,
			delta5,
			mate5,
		};
	});

	return withComps;
}