export default function permute(str) {
	if (str.length === 0) return []
	if (str.length === 1) return [str]

	let permutations = []
	for (let i = 0; i < str.length; i++) {
		let char = str[i]
		let remainingStr = str.slice(0, i) + str.slice(i + 1)
		for (let subPermutation of permute(remainingStr)) {
			permutations.push(char + subPermutation)
		}
	}
	return permutations
}
