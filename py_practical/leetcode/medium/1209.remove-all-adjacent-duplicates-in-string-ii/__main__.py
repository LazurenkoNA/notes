class Solution:
    def removeDuplicates(self, string: str, k: int) -> str:
        stack = []

        for symbol in string:
            if stack and stack[-1][0] == symbol:
                stack[-1][1] += 1
                if stack[-1][1] == k:
                    stack.pop()
            else:
                stack.append([symbol, 1])

        return "".join(symbol * quantity for symbol, quantity in stack)


solution = Solution()

print(solution.removeDuplicates("deeedbbcccbdaa", 3))
