class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

export default class BinarySearchTree {
	constructor() {
		this.root = null
		this._size = 0
	}

	add(value) {
		const newNode = new Node(value)
		if (!this.root) {
			this.root = newNode
		} else {
			this._addRecursive(this.root, newNode)
		}
		this._size++
	}

	_addRecursive(current, newNode) {
		if (newNode.value < current.value) {
			if (!current.left) {
				current.left = newNode
			} else {
				this._addRecursive(current.left, newNode)
			}
		} else {
			if (!current.right) {
				current.right = newNode
			} else {
				this._addRecursive(current.right, newNode)
			}
		}
	}

	has(value) {
		return this._hasRecursive(this.root, value)
	}

	_hasRecursive(current, value) {
		if (!current) return false
		if (current.value === value) return true
		return value < current.value
			? this._hasRecursive(current.left, value)
			: this._hasRecursive(current.right, value)
	}

	remove(value) {
		this.root = this._removeRecursive(this.root, value)
	}

	_removeRecursive(current, value) {
		if (!current) return null

		if (value === current.value) {
			if (!current.left && !current.right) return null
			if (!current.left) return current.right
			if (!current.right) return current.left

			let smallestValue = this._findSmallestValue(current.right)
			current.value = smallestValue
			current.right = this._removeRecursive(current.right, smallestValue)
			return current
		}

		if (value < current.value) {
			current.left = this._removeRecursive(current.left, value)
			return current
		}

		current.right = this._removeRecursive(current.right, value)
		return current
	}

	_findSmallestValue(node) {
		return node.left ? this._findSmallestValue(node.left) : node.value
	}

	size() {
		return this._size
	}
}
