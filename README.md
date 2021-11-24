# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tahmidmehdi/lotide`

**Require it:**

`const _ = require('@tahmidmehdi/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Checks if two arrays are equal.
* `assertEqual(actual, expected)`: Checks if two variables are equal.
* `assertObjectsEqual(object1, object2)`: Checks if two objects are equal.
* `countOnly(allItems, itemsToCount)`: Counts the number of occurrences of certain items in an array.
* `eqArrays(arr1, arr2)`: Checks if two arrays are equal.
* `eqObjects(object1, object2)`: Checks if two objects are equal.
* `findKey(obj, callback)`: Returns the first key in obj that returns true from callback.
* `findKeyByValue(obj, val)`: Returns the first key in obj that equals val.
* `head(array)`: Returns the first element of array.
* `map(array, callback)`: Creates a new array by applying callback on every element in the array.
* `middle(arr)`: Returns the middle element(s) of an array.
* `takeUntil(array, callback)`: Returns elements of an array until the first element that returns true from callback.
* `without(source, itemsToRemove)`: Returns an array of elements in source without the elements in itemsToRemove.
