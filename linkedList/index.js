

class LinkedList {

  constructor() {
    this.head = null
  }

  newLin = (data) => ({
    next: null,
    data
  })

  findLastLink = (link) => link.next ? this.findLastLink(link.next) : link
  
  checkNextForData(data, link) {
    if(!link) {
      return null
    }

    const normalizedData = JSON.stringify(data)
    const normalizedLinkData = JSON.stringify(link.next.data)

    return normalizedData !== normalizedLinkData ? this.checkNextForData(data, link.next) : link
  }

  checkHeadForData(data) {
    const normalizedData = JSON.stringify(data)
    const normalizedLinkData = JSON.stringify(this.head.data)
    
    return normalizedData === normalizedLinkData ? true : false
  }

  add(data) {
    if(this.head) {
      const lastLink = this.findLastLink(this.head)
      lastLink.next = this.newLink(data)
    } else {
      this.head = this.newLink(data)
    }
  }

  remove(data) {
    if(this.checkHeadForData(data)) {
      return this.head = null
    }

    const link = this.checkNextForData(data, this.head)

    if(!link) {
      throw new Error('Not Found')
    }
    
    link.next = link.next.next
  }

  edit(oldData, newData) {
    if(this.checkHeadForData(oldData)) {
      return this.head = null
    }

    const link = this.checkNextForData(oldData, this.head)

    link.next.data = newData
  }

  indexOf(index) {
    const link = this.head
    const currentIndex = 0

    while(link && currentIndex !== index) {
      currentIndex++
      link = link.next
    }

    return link
  }

  length() {
    const link = this.head
    const length = 0

    while(link) {
      length++
      link = link.next
    }

    return length
  }
}
export default function createLinkedList() {
  return new LinkedList()
}