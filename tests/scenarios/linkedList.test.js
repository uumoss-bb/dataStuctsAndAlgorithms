import createLinkedList from "../../linkedList";

const newLink = 'newLink'
const newLinkA = 'newLinkA'


const editedLink = 'editedLink'


describe('Linked List', () => {
  it('add a link to head', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)

    const link = linkedList.getByIndex(0)
    expect(link).toBe(newLink)
  })

  it('add a link to body', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)
    linkedList.add(newLinkA)

    const link = linkedList.getByIndex(1)
    expect(link).toBe(newLinkA)
  })

  it('remove link from head', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)
    linkedList.remove(newLink)

    const link = linkedList.getByIndex(0)
    expect(link).toBe(undefined)
  })

  it('remove link from body', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)
    linkedList.add(newLinkA)
    linkedList.remove(newLinkA)

    const link = linkedList.getByIndex(0)
    expect(link).toBe(newLink)

    const linkA = linkedList.getByIndex(1)
    expect(linkA).toBe(undefined)
  })

  it('edit link in the head', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)
    linkedList.edit(newLink, editedLink)

    const link = linkedList.getByIndex(0)
    expect(link).toBe(editedLink)
  })

  it('edit link in the body', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)
    linkedList.add(newLinkA)
    linkedList.edit(newLinkA, editedLink)

    const link = linkedList.getByIndex(0)
    expect(link).toBe(newLink)

    const linkA = linkedList.getByIndex(1)
    expect(linkA).toBe(editedLink)
  })

  it('get length', () => {
    const linkedList = createLinkedList()
    linkedList.add(newLink)
    linkedList.add(newLink)
    linkedList.add(newLink)
    linkedList.remove(newLink)
    linkedList.remove(newLink)
    linkedList.add(newLink)


    expect(linkedList.length).toBe(2)
  })
})