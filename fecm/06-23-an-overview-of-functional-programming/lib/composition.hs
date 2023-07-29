-- "apple" + "pen" => "applepen"
-- ? Concatonate functions

addOne:: Int -> Int
addOne x =  x + 1

double:: Int -> Int
double x = x * 2 

square:: Int -> Int
square x = x * x

addOneDoubleItThenSquareIt = square . double . addOne -- composition operator 

-- 2 
-- 2 + 1 (3) addOne
-- 3 x 2 (6) double
-- 6 * 6 (36) square
-- => 36