This is auto-generated documentation. 
# XOR Function

This function calculates the bitwise XOR of two integer inputs.

## Function Signature

```go
func XOR(a int, b int) int
```

### Parameters
- `a` (int): An integer input
- `b` (int): Another integer input

### Returns
- Returns the result of the XOR operation between `a` and `b`

## Example

```go
package main

import "fmt"

func XOR(a int, b int) int {
    return a ^ b
}

func main() {
    result := XOR(3, 5)
    fmt.Println(result) // Output: 6
}
```