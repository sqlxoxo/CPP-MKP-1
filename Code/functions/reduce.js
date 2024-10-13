export default function reduce(arr, callback, initialValue) {
	let acc = initialValue
	for (let i = 0; i < arr.length; i++) {
		acc = callback(acc, arr[i])
	}
	return acc
}
