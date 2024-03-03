This is auto-generated documentation. 
# Stack Readme

## Description
This code defines a Stack data structure that holds a slice of integers. The Stack supports operations like Push to add a value at the end, Pop to remove and return the last element, and Peek to return the last element without removing it.

## Functions
### Push
- Description: Adds a value at the end of the stack.
- Input: Integer value to be pushed onto the stack.
- Output: None

### Pop
- Description: Removes and returns the last element from the stack.
- Input: None
- Output: Returns the removed integer value. If the stack is empty, returns -1 or an error message.

### Peek
- Description: Returns the last element from the stack without removing it.
- Input: None
- Output: Returns the last integer value. If the stack is empty, returns -1 or an error message.

## Output
The output of the code is based on the operations performed on the stack using the Push, Pop, and Peek functions. If the stack is empty, appropriate error messages or -1 values are returned.

```go
package main

import "fmt"

func main() {
	stack1 := Stack{}
	stack1.Push(10)
	stack1.Push(20)
	fmt.Println(stack1.Peek()) // Output: 20
	fmt.Println(stack1.Pop())  // Output: 20
	fmt.Println(stack1.Pop())  // Output: 10
	fmt.Println(stack1.Pop())  // Output: Stack is empty or -1
}
```