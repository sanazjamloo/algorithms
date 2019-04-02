def merge_sort(list):
    """
    Sorts a list in ascending order
    Returns a new sorted List
    Divide: Find the midpoint of the list and divide into sublists
    Conquer: Recursively sort the sublists created in previous step
    Combine: Merge the sorted sublists created in previous step
    Takes O(n log n) time and O(n) space
    """

    #Stopping condition of the recursion
    if len(list) <= 1:
        return List

        left_half, right_half = split(list)
        left = merge_sort(left_half)
        right = merge_sort(right_half)

        return merge(left, right)

    def split(list):
        """
        Divide the unsorted list at midpoint into sublists
        Returns two sublists - left and right_half
        Takes overal O(log n) time
        """
        # // for floor operation
        mid = len(list) //2
        left = list[:mid]
        right = list[mid:]

        return left, right


    def merge (left, right):
        """
        Merges two lists (left and right), sorting them in the process
        Returns a new merged list
        Runs in overall O(n) time
        """

        l = []
        i = 0
        j = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                l.append(left[i])
                i+ = 1
            else:
                l.append(right[j])
                j+ = 1

            return l
