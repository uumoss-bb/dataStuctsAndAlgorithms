import CreateHasTable from "../hashTable";

describe('Hash Table', () => {
  it('table.hash takes a string, gets the ascii code for each char, addes them up and divides them by the size (10) and returns the remainder', () => {
    const size = 10 
    const HasTable = CreateHasTable(size)
    const hash = HasTable.hash('test')
    expect(hash).toBe(8)
  })

  it('table.hash takes a string, gets the ascii code for each char, addes them up and divides them by the size (10) and returns the remainder', () => {
    const size = 100 
    const HasTable = CreateHasTable(size)
    const hash = HasTable.hash('test')
    expect(hash).toBe(48)
  })
})
