import HashMap from './functions/HashMap.js'

const hashmap = new HashMap()

hashmap.set('key1', 10)
hashmap.set('key2', 20)
hashmap.set('key3', 30)

console.log(hashmap.get('key1'))
console.log(hashmap.get('key2'))
console.log(hashmap.get('key3'))