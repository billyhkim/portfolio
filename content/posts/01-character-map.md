---
id: '01'
title: The First Time I...Learned the Character Map
description: Feat. reduce()
date: 2021-01-11
wordCount: 298
---

I loved how my old co-workers would take time before tackling bigger PRs in the afternoons to do some coding exercises. The character map was one of the first neat tools they showed me that proved to be useful for both coding challenges and working with data (of course, with some changes).

The challenge can look something like this: here's a string and tell us which character(s) appear the most. In case there's more than one answer, let's use an array to hold all viable keys.

```js
const string = 'Hello World!';

// 1.
const stringArray = string.split('');

// 2.
const characterMap = stringArray.reduce((map, character) => {
  map[character] ? map[character]++ : (map[character] = 1);
  return map;
}, {});

// 3.
const results = Object.keys(characterMap).filter(
  (character) =>
    characterMap[character] ===
    Math.max.apply(null, Object.values(characterMap))
);

// console.log(results) = ['l']
```

Let's walk through this:

1. We'll split the string to be able to iterate over it using a loop or another array function.
2. We use reduce, where the first argument is the callback and the second the empty object we'll be starting with. The meat of the callback is the ternary that checks if the key exists in the object, then increment; otherwise, start a new key-value pair starting at 1.
3. We've already accomplished the character map, but since the prompt asks for the results (and considering the possibility of multiple keys with the same value) we want to provide them in this case in an array.

   We need to pull the keys into an array that can be iterated over. The comparison in the filter() is saying, "Hello! Pray tell if the number of times this character shows up is the max (or equal to) compared to the other values. If true, push me into the results."

Note: <a
            href="https://twitter.com/dan_abramov/status/1338253118199508992"
            target="_blank"
            rel="noopener noreferrer"
          >Using reduce isn't necessary at all</a>, it doesn't really offer more over forEach, and <a
            href="https://twitter.com/Moe_V2/status/1338254633328922627"
            target="_blank"
            rel="noopener noreferrer"
          >isn't the most readable or performant option</a>, but, why not.
