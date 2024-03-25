This is auto-generated documentation. 
# Find Duplicate Number in Array

This code snippet implements a function `FindDuplicate` that takes in an array of integers `nums` and returns the duplicate number in the array.

### Code Explanation
1. Initialize three variables `first`, `second`, and `temp` to the first element of the input array `nums[0]`.
2. Use Floyd's Tortoise and Hare algorithm to find the intersection point where the cycle begins.
3. Move `first` by one step and `second` by two steps at a time until they meet at the intersection point.
4. Reset `first` to the beginning of the array and move both `first` and `temp` by one step until they meet at the entrance of the cycle.
5. Return the duplicate element found at the entrance of the cycle.

### Example
```go
nums := []int{1, 3, 4, 2, 2}
output := FindDuplicate(nums)
fmt.Println(output) // Output: 2
```

### Time Complexity
The time complexity of this algorithm is O(n) where n is the length of the input array `nums`.