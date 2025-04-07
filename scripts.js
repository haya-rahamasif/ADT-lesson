//Stack
function stack() {

}

//Queue
function queue() {
    
}

//Linked Lists
function linkedList() {
    let array = []
    return {
        prepend: (element) => array.unshift(element),
        append: (element) => array.push(element),
        pop: () => array.pop(),
        popFirst: () => array.shift(),
        head: () => array[0],
        tail: () => array[array.length-1],
        remove: (element) => array.splice(array.indexOf(element), 1),
        toString: () => String(array),
        size: () => array.length
    }
}


