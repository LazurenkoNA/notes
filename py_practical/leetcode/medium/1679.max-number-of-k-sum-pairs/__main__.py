from typing import List

# TODO: https://leetcode.com/problems/max-number-of-k-sum-pairs/


class Solution:
    def maxOperations(self, numbs: List[int], k: int) -> int:
        hashTable = {}
        answer = 0

        for i in numbs:
            if k - i in hashTable and hashTable[k - i] > 0:
                answer += 1
                hashTable[k - i] -= 1
            elif i not in hashTable:
                hashTable[i] = 1
            else:
                hashTable[i] += 1

        return answer


solution = Solution()

solution.maxOperations([1, 2, 3, 4], 5)
solution.maxOperations([3, 1, 3, 4, 3], 6)
