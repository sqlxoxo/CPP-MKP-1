export default function filter(arr, callback) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) result.push(arr[i])
	}
	return result
}
