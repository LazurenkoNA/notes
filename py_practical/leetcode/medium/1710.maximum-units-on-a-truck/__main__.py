from typing import List

# TODO: https://leetcode.com/problems/maximum-units-on-a-truck/


class Solution:
    def maximumUnits(self, box_types: List[List[int]], truck_size: int) -> int:
        box_types.sort(key=lambda box: -box[1])

        total_units = 0

        for number_of_boxes, units_per_box in box_types:
            num_boxes = min(truck_size, number_of_boxes)
            total_units += num_boxes * units_per_box
            truck_size -= num_boxes
            if truck_size == 0:
                return total_units

        return total_units
