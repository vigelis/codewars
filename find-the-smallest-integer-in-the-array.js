// Firstly array is sorted from smallest to largest and then firt element (smallest) is returned with [0].
// My Solution

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sorted = args.sort( (a, b) => a - b);
      return sorted[0]
    }
  }

// Better practice is to do this syntax:

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }