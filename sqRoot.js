/*Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
Since the return type is an integer, the decimal digits are truncated and only the integer
part of the result is returned.*/

  const mySqrt = x => {
      let logic = (start, end) => {
      let mid = start + Math.floor((end - start) / 2);
      let square = mid * mid;
      if (start === mid || square === x) {
        return mid;
      } else if (square > x) {
        return logic(start, mid);
      } else {
        return logic(mid, end);
      }
    };

    return logic(1, x);
  };
