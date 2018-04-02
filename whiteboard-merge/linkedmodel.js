
'use strict';

class LinkedNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value){
    this.root = null;
  }
};

module.exports = {LinkedNode, LinkedList};
