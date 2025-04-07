# ADT-lesson
ADT lesson assignment - ICS4UR

<hr><br>

## Test your knowledge!
Test your knowledge of ADTs with this [quiz](https://forms.gle/BgKVWuESZcEnH89s6)!

## Tips
  1. Comment your code
  2. Seperate parts of assignemnt to keep it organized

## ADT Operations
These are the operations you will need to understand and utilise to complete this assignment
| Operation       | Stack (LIFO)        | Queue (FIFO)        | Linked List               |
|-----------------|--------------------|--------------------|--------------------------|
| **Add**         | `push()` (top)     | `enqueue()` (rear) | `addFirst(), addLast(), insertAt(index)`|
| **Remove**      | `pop()` (top)      | `dequeue()` (front)| `removeFirst(), removeLast(), removeAt(index)` |
| **Examine**     | `peek()` (top)     | `front()`          | `getFirst(), getLast(), get(index)`    |
| **Check Empty** | `isEmpty()`        | `isEmpty()`        | `isEmpty()`               |
| **Size**        | `size()`           | `size()`           | `size()`                  |
| **Clear**       | `clear()`          | `clear()`          | `clear()`                 |
| **Search**      | -                  | -                  | `contains()`/`indexOf()`  |
| **Traversal**   | -                  | -                  | `forEach()`/iterator      |

Remember, these are only concepts of each of the methods, you must write the code to implement these concepts! Luckily, Javscript treats functions as [first-class objects](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function), meaning functions can have their own methods and attributes, like classes. You will use this to implement your ADTs.

## Function with methods setup
First define your function, this is what you will call to create an instance of your Array with the according methods. Then define each of your methods as seen below.
```JS
function createADT() {
    const emptyArray = [] // when function is called by itself with no methods, it will create an empty array
    return { // will return different results based on which method is called
        method1: (parameter) => console.log(`this is where you will manipulate the parameter given: ${parameter}, to return the according value`),
        method2: () => console.log(`method2 in this case, doesn't have a parameter and will perform some other function with the array`),
        method3: () => console.log(`method3 in this case, doesn't have a parameter and will perform some other function with the array`)
        /* method insertion structure:
          methodName: (parameter if relevant) => code to run if method gets called. don't forget to add a comma in between each method definition!
        */
    }
}

const array1 = new createADT()
array1.method1("hello!")
array1.method2()
array1.method3()

/* result:
this is where you will manipulate the parameter given: hello!, to return the according value
method2 in this case, doesn't have a parameter and will perform some other function with the array
method3 in this case, doesn't have a parameter and will perform some other function with the array
*/
```
Now it's your turn, your job is to set up the methods for each ADT, making sure each method follows the behavior described in [ADT Operations](#adt-operations). Don't forget to pass a parameter when calling methods that need them to provide an accurate result! Use [this page](https://www.w3schools.com/js/js_array_methods.asp) explaining all Javascript Array methods if you are unfamiliar with how to manipulate data in a JS Array.


## Stacks
Remember Stacks follow LIFO, last in, first out! This example has only one way of how the size method could be created for the Stack ADT (can be used with all ADTs specified in the first section), the rest is up to you to set up.
```JS
...stack function
        size: () => array.length // this will only return the length of the stack, not print to console. if you want it to display in the console, make sure to use console.log()
other methods...
```

Once you have set up, its time to experiment! Test out your methods by creating a stack that simulates a food meal plan, where each array is a meal and follows the structure of the food pyramid (bottom to top: veggies/fruit, wheat/grain, dairy, meat (poultry, fish, eggs), fatty, sugary/salty foods) leave each element of the stack as a string, and an "n/a" if it is not part of the meal.
``` JS
//Example
const breakfast = new createStack()
breakfast.push("strawberries") // veggies/fruits
breakfast.push("waffles") // wheat/grain
breakfast.push("glass of milk") // dairy
breakfast.push("n/a") // no meat in this meal
breakfast.push("syrup") // sugary food

console.log(breakfast.toString()) // result: strawberries,waffles,glass of milk,n/a,syrup

console.log(breakfast.peek()) // looks at next part of meal to eat result: syrup
breakfast.pop() // "eating" that part of the meal
console.log(breakfast.toString()) // leftover of meal result: strawberries,waffles,glass of milk,n/a
```


## Queues
Remember Queues follow FIFO, first in, first out! This example has only one way of how the enqueue method could be created for the Queue ADT, the rest is up to you to set up.
```JS
...queue function
        enqueue: (element) => array.push(element) // this pushes the given element to the end of the array, assuming the end of the array is considered in the back of the queue, and 'queues' it
other methods...
```

Once you have setup, its time to experiment! Test out your methods by creating a queue that simulates a music playlist queue. where you can add songs to the queue and check which song is currently playing, and remove played songs
``` JS
//Example
const songs = new createQueue()
songs.enqueue("linger by the cranberries") 
songs.enqueue("partridge by clairo") 
songs.enqueue("poetic justice by kendrick lamar and drake") 
songs.enqueue("chest pain (i love) by malcolm todd") 

console.log(songs.toString() // result: linger by the cranberries,partridge by clairo,poetic justice by kendrick lamar and drake,chest pain (i love) by malcolm todd

songs.dequeue() // removes first song in queue, simulates the song ending

console.log(songs.toString() // result: partridge by clairo,poetic justice by kendrick lamar and drake,chest pain (i love) by malcolm todd
console.log(songs.front()) // shows current song playing (front element of queue) result: partridge by clairo
```


### Linked Lists
Since linked lists have a large amount of methods, you will notice that the `js-sdsl` library, which contains a class with methods for the Linked List ADT, has been imported and setup for you in scripts.js. <br><br>
Your task is to manipulate the created linked list to ssimulate a todo list with items in the order you want to do them. Make sure to experiment with methods that add, remove and examine parts of the array!
<br><br>
🧇
