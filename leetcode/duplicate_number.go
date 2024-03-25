package leetcode

func FindDuplicate(nums []int) int {
	first := nums[0]
	second := nums[0]
	temp := nums[0]

	for {
		first = nums[first]
		second = nums[nums[second]]
		if first == second {
			break
		}
	}

	for {
		if first == temp {
			break
		}
		first = nums[first]
		temp = nums[temp]

	}

	return first
}
