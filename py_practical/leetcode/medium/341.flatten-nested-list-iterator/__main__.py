from typing import Generator, List

NestedInteger: any


class NestedIterator:
    def __init__(self, nestedList: List[NestedInteger]):
        def get(currentList: List[NestedInteger]) -> Generator[int, None, None]:
            for nestedInteger in currentList:
                if nestedInteger.isInteger():
                    yield nestedInteger.getInteger()
                else:
                    yield from get(nestedInteger.getList())

        self.generator = get(nestedList)
        self.nextInteger = next(self.generator, None)

    def next(self) -> int:
        result = self.nextInteger
        self.nextInteger = next(self.generator, None)
        return result

    def hasNext(self) -> bool:
        return self.nextInteger is not None


# initialize iterator with nestedList
# res = []
# while iterator.hasNext()
#     append iterator.next() to the end of res
# return res
# If `res` matches the expected flattened list, then your code will be judged as correct.
