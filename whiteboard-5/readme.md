# Cody Green WhiteBoard Problems

## Linked List Problem

### Problem Domain: 
write a function called `isSorted()`that accepts a linked list as
a parameter and returns true if the linked list is sorted in
ascending order

an empty or single item list should be considered sorted.
because it’s not not sorted.

### stretch goal: 
return true if it’s either ascending or descending

### Solution:

function isSorted() {
    let current = this.root;
    if(current === null || current.next === null)
        return true;
}
    while(current.next) {
        if(current.data > current.next.data){
            return false;
        }
        current = current.next;
    }
    return true;
    }