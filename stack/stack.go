package stack

import "fmt"

// Stack represents a stack that holds a slice.
type Stack struct {
	items []int
}

// Push will add a value at the end
func (s *Stack) Push(i int) {
	s.items = append(s.items, i)
}

// Pop will remove a value at the end and returns the removed value
// If the stack is empty, it returns -1 or an error message.
func (s *Stack) Pop() int {
	length := len(s.items)
	if length == 0 {
		fmt.Println("Stack is empty")
		return -1 // or return an error that stack is empty
	}

	// Extract the last element, and shorten the slice.
	item, items := s.items[length-1], s.items[0:length-1]
	s.items = items
	return item
}

// Peek returns the last element without removing it
// If the stack is empty, it returns -1 or an error message.
func (s *Stack) Peek() int {
	length := len(s.items)
	if length == 0 {
		fmt.Println("Stack is empty")
		return -1 // or return an error that stack is empty
	}

	return s.items[length-1]
}
