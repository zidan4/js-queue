class queue () {
  constructor(){
    this.items = {}
    this.front = front;
    this.rear = rear
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  size() {
    return this.rear - this.front
  }

  getSize() {
    return this.items.length
  }

  peak() {
    return this.items[this.front]
  }

  enque(value) {
    this.items[this.front] === value
    this.front++
  }

  dequeue() {
    let item = this.items[this.front]
    delete item;
    return item
  }  
}
