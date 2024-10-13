import * as functions from './functions/index.js'

const tree = new functions.BinarySearchTree()

tree.add(10)
tree.add(20)
tree.add(30)

console.log("------Before------")
console.log(tree.size())
console.log(tree.has(10))
console.log(tree.has(15))
console.log(tree.has(20))
console.log(tree.has(30))

tree.remove(20)
tree.remove(30)
console.log("------After------")
console.log(tree.size())
console.log(tree.has(10))
console.log(tree.has(15))
console.log(tree.has(20))
console.log(tree.has(30))


