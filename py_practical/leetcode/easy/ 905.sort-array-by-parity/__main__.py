from typing import List


class Solution:
    def sortArrayByParity(self, numbs: List[int]) -> List[int]:
        even = []
        odd = []

        for n in numbs:
            if n % 2 == 0:
                even.append(n)
            else:
                odd.append(n)

        even.extend(odd)
        return even


class Solution:
    def sortArrayByParity(self, numbs: List[int]) -> List[int]:
        if len(numbs) == 0:
            return []

        j = 0

        for i in range(len(numbs)):
            if numbs[i] % 2 == 0:
                numbs[i], numbs[j] = numbs[j], numbs[i]
                j += 1

        return numbs
