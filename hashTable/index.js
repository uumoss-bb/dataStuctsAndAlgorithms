
class HasTable {

  constructor(size) {
    this.table = new Array(size)
    this.size = size
    this.loadLimit = 70
  }

  hash(key) {
    let asciiSum = 0
    for (let i = 0; i < key.length; i++) {
      asciiSum += key.charCodeAt(i); 
    }

    const hash = asciiSum % this.size
    
    return hash
  }

  checkLoadFactor() {
    const tableSize = this.table.lenght + 1
    const loadFactor = (tableSize / this.size) * 100 //this gives you percentage  
    //(length of table / size) * 100 - this gives you percentage  
    if(loadFactor >= this.loadLimit) {
      console.log('AUTOSCALE')
    }
  }

  doesItemExists({ hash, key, value }) {
    const item = this.table[hash]
    const alreadyExists = item && JSON.stringify(item) === JSON.stringify({ key, value })

    return alreadyExists
  }

  get(key) {
    const hash = this.hash(key)

    //check if a linked list
      //if so then travers through link
    return this.table[hash]
  }

  set({ key, value }) {
    console.log(this.table[0])
    const hash = this.hash(key)

    const alreadyExists = this.doesItemExists({ hash, key, value })

    if(alreadyExists) {
      throw new Error('Item Already Exists')
    }

    const collisionDetected = this.table[hash]
    if(collisionDetected) {
      console.log('handle collision')
      //if so then create a linked list
    }

    this.table[hash] = { key, value }
    this.checkLoadFactor()
  } 

  delete({ key, value }) {
    const hash = this.hash(key)
    //check if item is in linked list and if removed will leave only one left
      //if so then remove linked list
    //remove item
    this.checkLoadFactor()
  }

  edit({ key, value }) {
    const hash = this.hash(key)
    //check if its already in the the table
      //if so then edit
      //else warn user
  }
}



export default function CreateHashTable(size) {
  return new HasTable(size)
}