// defining and creating a node class
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}
// defining linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}
// adds an element at the end of the list
add(element)
{
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;

        // iterate to the end of the list
        while (current.next) {
            current = current.next;
        }

        // add node
        current.next = node;
    }
    this.size++;
}

// insert element at the position index of the list
insertAt(element, index) {
    if (index > 0 && index > this.size)
        return false;
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;

        curr = this.head;

        // add the element to the first index
        if (index == 0) {
            node.next = head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            // iterate over the list to find the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}

// removes an element from the specified location
removeFrom(index)
{
    if (index > 0 && index > this.size)
        return -1;
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        // deleting first element
        if (index == = 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the position to removce an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }
}
