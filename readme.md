# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @quinnvoker/lotide`

**Require it:**

`const _ = require('@quinnvoker/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: asserts that given arrays are equal, and prints pass or fail to command line
* `assertEqual(actual, expected)`: asserts that given primitive values are equal, and prints pass or fail to command line
* `assertObjectsEqual(actual, expected)`: asserts that given objects are equal, and prints pass or fail to command line
* `countLetters(string)`: returns an object containing all characters which appear in the string, along with how many times they appear
* `countOnly(allItems, itemsToCount)`: takes an array `allItems` and an array `itemsToCount` and returns an object containing the count of times each item appears in the main array
* `eqArrays(arrayA, arrayB)`: returns `true` if both arrays contain the same data, `false` otherwise. can work with nested arrays
* `eqObjects(objectA, objectB)`: returns `true` if both objects have the same properties and values, `false` otherwise. can handle nested objects
* `findKey(object, callback)`: runs `callback` on each property of the object, and returns the first key in which `callback` returns `true`.
* `findKeyByValue(object, value)`: returns key of first property of `object` which has a value of `value`
* `flatten(array)`: takes a nested array and returns an array that has no nesting, but retains all elements in order
* `head(array)`: returns the first element of a given array
* `letterPositions(string)`: returns an object with all the characters that appear in `string` as keys, and an array of the indices in the string in which they appear as values
* `map(array, callback)`: calls `callback` for each element of `array`, and returns a new array containing the results
* `middle(array)`: returns the middle element of a given array
* `tail(array)`: takes an array and returns a new array without the first element
* `takeUntil(array, callback)`: takes an array, runs `callback` on each element, and returns an array containing all of the elements up until the first point at which `callback` returned `true`
* `without(array, items)`: takes an array, and returns a copy of it with all of the elements of `items` removed from it