package main

func Twosum(nums []int, target int) bool {
	sumMaps := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		if _, exists := sumMaps[target-nums[i]]; exists {
			return true
		} else {
			sumMaps[nums[i]]++
		}
	}
	return false
}
