
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
    //(length of table / size) * 100 - this gives you percentage  
    //if loadFactor is above the limit 
      //then autoScale
  }

  set(item) {
    //checkLoadFactor
    //make hash
    //check if its already in the the table
      //if so then edit
    //check if it collides
      //if so then create a linked list
    //set item in table
  } 

  delete(item) {
    //make hash
    //check if item is in linked list and if removed will leave only one left
      //if so then remove linked list
    //remove item
    //checkLoadFactor
  }

  edit(item) {
    //make hash
    //check if its already in the the table
      //if so then edit
      //else warn user
  }
}



export default function CreateHasTable(size) {
  return new HasTable(size)
}