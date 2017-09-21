function Node(data) {
    this._data = data;
    this._nextNode = null;
    this._prevNode = null;
};

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoublyLinkedList.prototype = {
    add: function(data) {
        var currentNode = this.head;
        var newNode = new Node(data)
        if (!currentNode) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode._prevNode = this.tail;
            this.tail._nextNode = newNode;
            this.tail = newNode;

        }
        this.length++;
        return newNode;
    },
    searchNodeAt: function(position) {
        if (this.length === 0 || position < 1 || position > this.length) {
            return "No postion like that"
        } else if (position === 1) {
            return this.head;
        } else if (position === this.length) {
            return this.tail;
        } else {
            var count = 1;
            var currentNode = this.head;
            while (position != count) {
                currentNode = currentNode._nextNode;
                count++;
            }
            return currentNode;
        }

    },
    removeNodeAt: function(position) {
        var currentNode = this.head;
        if (this.length === 0 || position < 1 || position > this.length) {
            return "No postion like that"
        } else if (position === 1) {
            currentNode = currentNode._nextNode;
            if (currentNode) {
                currentNode._prevNode = null;
            } else {
                this.tail = null;
            }
        } else if (position === this.length) {
            this.tail = this.tail._prevNode;
            this.tail._nextNode = null;
        } else {
            var count = 1;
            while (position !== count) {
                currentNode = currentNode._nextNode;
                count++;
            }
            var temp = currentNode._prevNode;
            currentNode._prevNode._nextNode = currentNode._nextNode;
            currentNode._nextNode._prevNode = temp;
        }
        this.length--;
    },
    printData: function() {
        var currentNode = this.head;
        if (currentNode) {
            while (currentNode._nextNode) {
                console.log(currentNode._data)
                currentNode = currentNode._nextNode;
            }
            console.log(currentNode._data);
        }
    },
    insertAt: function(data, position) {
        var currentNode = this.head;
        var newNode = new Node(data);
        if (position < 1 || position > this.length + 1) {
            return "Insertion is not possible";
        }
        if (position === 1) {
            if (currentNode) {
                newNode._nextNode = currentNode;
                currentNode._prevNode = newNode;
                this.head = newNode;
            } else {
                this.head = newNode;
                this.tail = newNode;
            }
        } else if (position === this.length + 1) {
            newNode._prevNode = this.tail;
            this.tail._nextNode = newNode;
            this.tail = newNode;
        } else {
            var count = 1;
            while (position != count) {
                currentNode = currentNode._nextNode;
                count++;
            }
            newNode._prevNode = currentNode._prevNode;
            newNode._nextNode = currentNode._prevNode._nextNode;
            currentNode._prevNode._nextNode = newNode;
            currentNode._prevNode = newNode;
        }
        this.length++;
    }
}

var list = new DoublyLinkedList();
// console.log(list.add(1));
// console.log(list.add(2));
// console.log(list.add(3));
// console.log(list.add(4));
// console.log(list.add(10));
// console.log("---------------searching Node----------");
// console.log(list.searchNodeAt(1));
// console.log(list.searchNodeAt(5));
// console.log("----------deleting Node -------");
// list.removeNodeAt(4);
// list.printData();
// list.insertAt(25, 3);
// list.insertAt(35, 1);
// list.insertAt(5, 7);
list.insertAt(35, 1);
console.log("After inserting at particular position");
list.printData();