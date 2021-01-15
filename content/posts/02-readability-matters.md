---
id: '02'
title: Readability Matters
description: And, redoing the character map.
date: 2021-01-16
wordCount: 388
---

I'd always get mild butterfiles when submitting PRs <sup id="a-1">[1](#f-1)</sup> because I knew there'd be something that I overlooked and missed. But, there was an excitement to it since it was an opportunity to learn something new from the team. <sup id="a-2">[2](#f-2)</sup> One of the things that I quickly learned was that the shorter, _clever_ solution doesn't necessarily equate to the most readable or kind.

The character map implementation from my last post, while it certainly works and is shorter, isn't the nicest code to leave behind for someone else to deal with. The ternary should be used for assignment rather than logic, `reduce()` isn't readily readable, and `apply()` is cool but someone may have to go out of their way to look up on MDN/Stack Overflow.

Let's try this again:

```js
const string = 'Hello World!';

// 1.
const stringArray = string.split('');
const characterMap = {};

// 2.
stringArray.forEach((character) => {
  if (characterMap[character]) {
    characterMap[character]++;
  } else {
    characterMap[character] = 1;
  }
});

// 3.
const characterKeysArray = Object.keys(characterMap);
const results = characterKeysArray.filter(
  (character) =>
    characterMap[character] === Math.max(...Object.values(characterMap))
);

// console.log(results) = ['l']
```

Let's walk through this (again), with notes on the changes:

1. The string splits the same, but this time we explicitly declare an empty object for easier reference.
2. We no longer need `reduce()` and using `forEach()` immediately provides an easier reading experience. Instead of the ternary, we use an `if-else` statement.
3. We declare `characterKeysArray` as an added step for readability to take the keys in the `characterMap` object. In the `results`, one change was instead of using `apply()`, which allowed us to put the array in directly, was to simply spread the values of the `characterMap`.

The hope is that code can be readable and hopefully easy to debug. I know DRY ("don't repeat yourself") and KISS ("keep it simple stupid") all matter, but I can't help but think that those principles came to be out of the desire to keep code tidy and readable. This probably applies in some way to every discipline, but readability matters because another human will have to work with it (or, fight it 😠😆) eventually.

<hr>

<sup id="f-1">[1](#a-1)</sup> For non-tech friends, PR is short for pull request and are code submissions for team members to discuss and review before it gets published.

<sup id="f-2">[2](#a-2)</sup> Shoutout to old friends who still keep an eye out. 😄
