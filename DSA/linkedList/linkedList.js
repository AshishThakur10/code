/*
linked list

It is a linear data structure similar to an array
unlike arrays, elements are not stored in a particular memory location or index.
Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node. 
The data can be any valid data type.

The entry point to a linked list is called the head. 
The head is a reference to the first node in the linked list. 
The last node on the list points to null. 
If a list is empty, the head is a null reference.


const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};


An advantage of Linked Lists
Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
This is one advantage it has over arrays.


Disadvantages of Linked Lists
Search operations are slow in linked lists. Unlike arrays, 
random access of data elements is not allowed. 
Nodes are accessed sequentially starting from the first node.
It uses more memory than arrays because of the storage of the pointers.



types of linked list
Single linked list - Navigation is forward only
Doubly linked list - Forward and backward navigation is possible.
Circular linked list - Last element is linked to the first element.

*/