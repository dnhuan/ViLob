// https://github.com/mandreasen/CSGOCoordinator
module.exports = class Rank {
	constructor() {
		this.ranks = {
			0: "Unranked",
			1: "Silver I",
			2: "Silver II",
			3: "Silver III",
			4: "Silver IV",
			5: "Silver Elite",
			6: "Silver Elite Master",
			7: "Gold Nova I",
			8: "Gold Nova II",
			9: "Gold Nova III",
			10: "Gold Nova Master",
			11: "Master Guardian I",
			12: "Master Guardian II",
			13: "Master Guardian Elite",
			14: "Distinguished Master Guardian",
			15: "Legendary Eagle",
			16: "Legendary Eagle Master",
			17: "Supreme Master First Class",
			18: "The Global Elite"
		};
	}

	/**
	 * Get rank name
	 * @param  {integer|string} rankId Rank id/number
	 * @return {string}                Rank name
	 */
	getName(rankId) {
		return this.ranks[rankId] || "Unknown";
	}
}