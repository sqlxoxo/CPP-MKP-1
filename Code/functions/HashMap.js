export default class HashMap {
	constructor() {
		this.map = new Array(100)
	}

	_hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i)
		}
		return hash % this.map.length
	}

	set(key, value) {
		const index = this._hash(key)
		this.map[index] = value
	}

	get(key) {
		const index = this._hash(key)
		return this.map[index]
	}
}
