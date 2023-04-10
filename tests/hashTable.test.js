import CreateHashTable from "../hashTable";

const item = { key: 'test', value: 'data' }

describe('Hash Table', () => {
  it('table.hash takes a string, gets the ascii code for each char, addes them up and divides them by the size (10) and returns the remainder', () => {
    const size = 10 
    const HashTable = CreateHashTable(size)
    const hash = HashTable.hash('test')
    expect(hash).toBe(8)
  })

  it('table.hash takes a string, gets the ascii code for each char, addes them up and divides them by the size (10) and returns the remainder', () => {
    const size = 100 
    const HashTable = CreateHashTable(size)
    const hash = HashTable.hash('test')
    expect(hash).toBe(48)
  })

  it('table.set takes a key and value then adds it to the table', () => {
    const size = 10 
    const HashTable = CreateHashTable(size)
    HashTable.set(item)
    const result = HashTable.get(item.key)
    expect(result).toStrictEqual(item)
  })
})
