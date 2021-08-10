const fs = require("fs");
const d3 = require("d3");
const MP_MIN = 150;

const players = d3.csvParse(fs.readFileSync("tasks/players.csv", "utf8"));

const clean = players.map(d => ({
	name: d.player_name,
	id: d.player_id,
	season: d.season,
	team: d.team,
	poss: +d.poss,
	mp: +d.mp,
	raptor: +d.raptor_total,
	war: +d.war,
	winner: d.winner === "true",
	warposs: +d.war / +d.poss * 100
})).filter(d => +d.mp >= MP_MIN);

const byTeamSeason = d3.groups(clean, (d) => `${d.team}${d.season}`).map(([key, data]) => {
	data.sort((a, b) => d3.descending(a.war, b.war));
	return {
		top: data[0],
		others: data.slice(1)
	};
});


const withComps = byTeamSeason.map(({ top, others }) => {

	const total = top.war + d3.sum(others.map(d => d.war));

	others = others.map(d => ({
		name: d.name,
		team: d.team,
		season: d.season,
		mp: d.mp,
		war: d.war,
	}));

	return {
		...top,
		total,
		others
	};
});

const output = JSON.stringify(withComps);

fs.writeFileSync("src/data/players.json", output);