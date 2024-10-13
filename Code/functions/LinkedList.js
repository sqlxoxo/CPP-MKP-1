class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

export default class LinkedList {
	constructor() {
		this.head = null
	}

	add(value) {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = newNode
		} else {
			let current = this.head
			while (current.next) {
				current = current.next
			}
			current.next = newNode
		}
	}

	has(value) {
		let current = this.head
		while (current) {
			if (current.value === value) return true
			current = current.next
		}
		return false
	}
}
