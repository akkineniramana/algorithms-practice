function Node(data) {
    this.data = data;
    this.next = null;
}

function SingleList() {
    this.head = null;
    this.length = 0;
}

SingleList.prototype = {
    add: function(data) {
        var newNode = new Node(data);
        var current = this.head;
        if (!current) {
            this.head = newNode;
            this.length++;
            return newNode;
        }

        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.length++;
        return newNode;
    },
    insert: function(data, position) {
        var newNode = new Node(data);
        current = this.head;
        if (position === 0) {
            this.head = newNode;
            this.head.next = current;
            this.length++;
            return newNode;

        } else if (position === this.length) {
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
            return newNode;
        } else if (position < this.length) {
            var i = 0;
            while (position > 0 && position < this.length && i !== position - 1) {
                current = current.next;
                i++;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.length++;
            return newNode;
        } else {
            console.log(" There is no position")
        }
    },

    printList: function() {
        current = this.head;
        var arr = [];
        while (current.next) {
            arr.push(current.data)
            current = current.next;
        }
        arr.push(current.data)
        console.log(arr);
    },

    deleteItemAtPosition: function(position) {
        current = this.head;
        if (position === 0) {
            this.head = current.next;
            return;
        } else if (position < this.length) {
            for (var i = 0; i < position - 1; i++) {
                current = current.next;
            }
            current.next = (current.next) ? current.next.next : null;
        } else {
            console.log("there is no position like that");
        }


    },

    reverseList: function() {
        current = this.head;
        prev = null;
        while (current) {
            var thead = current.next;
            current.next = prev;
            prev = current;
            current = thead;
        }
        this.head = prev;
    }

}

var list = new SingleList();
list.add(1);
list.add(2);
list.insert(10, 1);

list.insert(24, 0);
list.insert(14, 4);
list.insert(9, 3);
console.log("before deletion");
list.printList();
console.log("After deletion");
list.deleteItemAtPosition(2);
list.printList();

list.reverseList();

list.printList();