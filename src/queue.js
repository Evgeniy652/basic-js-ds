const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
	  this.length = 0;

	  this.end = null;

    this.start = null;

  }

  getUnderlyingList() {
  
    return this.start
  }

  enqueue( value ) {
    
    if (this.length === 0) {


      this.start = new ListNode(value);

      this.end = this.start.next;

    } else if (this.length === 1) {

      this.start.next = new ListNode(value);

      this.end = this.start.next;

    } else {

      this.end.next = new ListNode(value);

      this.end = this.end.next;
    }

    this.length++
  }

  dequeue() {
   
    let x = this.start.value;

    this.start = this.start.next;

    this.length--;
	
    return x
  }
}

module.exports = {
  Queue
};