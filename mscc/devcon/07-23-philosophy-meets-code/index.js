const isAutological = (func, ...funcParams) => {
  // console.log("type of func -", typeof func);
  const funcReturnValue = func(...funcParams);
  return Object.is(funcReturnValue, func);
}

const isHeterological = (func, ...funcParams) => {
  return !isAutological(func, ...funcParams);
}

const anAutologicalFunc = () => anAutologicalFunc;

const aHeterologicalFunc = () => true;

console.log("Test Cases - isAutological", {
  should_be_true: isAutological(anAutologicalFunc),
  should_be_false: isAutological(aHeterologicalFunc)
});

console.log("Test Cases - isHeterological", {
  should_be_true: isHeterological(aHeterologicalFunc),
  should_be_false: isHeterological(anAutologicalFunc)
});

// ! Paradox

// isAutological(isHeterological)
// isHeterological(isHeterological)








// Actually, the paradox works with the word "autological" as well.
// Hence, the below throw errors as well.
// I'll let you run these yourself if you ever look at this file.
// isAutological(isAutological)
// isHeterological(isAutological)
