export default function isPalindrome(str) {
	str = str.toLowerCase().replace(/\s+/g, '')
	return str === str.split('').reverse().join('')
}
