const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

// 2 
// 2 + 1 (3) addOne
// 3 x 2 (6) double
// 6 * 6 (36) square
// => 36

// Usual Way
const usualResult = square(double(addOne(2)));

// ?  addOneDoubleItThenSquareIt

const compositionOperator = (...composableFuncs) => (ogArg) => {
  return composableFuncs.reduceRight((arg, composableFunc) => composableFunc(arg), ogArg);
}

const addOneDoubleItThenSquareIt = (x) => compositionOperator(square, double, addOne)(x);

const resultByComposition = addOneDoubleItThenSquareIt(2);

console.log({
  usualResult,
  resultByComposition
});