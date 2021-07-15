import { groups, descending, mean, sum } from "d3";

const MP_MIN = 150;

export default function getData({ players, metric }) {
	const clean = players.map(d => ({ ...d, [[metric]]: +d[metric], warposs: +d.war / +d.poss * 100 }))
		.filter(d => +d.mp >= MP_MIN);

	const byTeamSeason = groups(clean, (d) => `${d.team}${d.season}`).map(([key, data]) => {
		data.sort((a, b) => descending(a[metric], b[metric]));
		return {
			top: data[0],
			others: data.slice(1)
		};
	});

	const withComps = byTeamSeason.map(({ top, others }) => {
		const delta2 = top[metric] - others[0][metric];
		const mate2 = others[0].player_name;

		const mean5 = mean(others.slice(0, 4).map(d => d[metric]));
		const delta5 = top[metric] - mean5;
		const mate5 = others.slice(0, 4).map(d => d.player_name.split(" ")[1]).join(", ");

		const total = top[metric] + sum(others.map(d => d[metric]));
		const share = top[metric] / total;
		top.share = share;

		others.forEach(d => {
			d.share = d[metric] / total;
		});

		const share2 = share - others[0].share;

		return {
			...top,
			total,
			others,
			delta2,
			mate2,
			delta5,
			mate5,
			share2,
		};
	});

	return withComps;
}