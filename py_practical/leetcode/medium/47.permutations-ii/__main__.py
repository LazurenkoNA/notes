# TODO: https://leetcode.com/problems/permutations-ii/


from typing import Counter, List


class Solution:
    def permuteUnique(self, numbs: List[int]) -> List[List[int]]:
        permutations = []
        counter = Counter(numbs)

        def findAllPermutations(res):
            if len(res) == len(numbs):
                permutations.append(res)
                return

            for key in counter:
                if counter[key]:
                    counter[key] -= 1
                    findAllPermutations(res + [key])
                    counter[key] += 1

        findAllPermutations([])

        return permutations


solution = Solution()
print(solution.permuteUnique([1, 1, 2]))
print(solution.permuteUnique([1, 2, 3]))
