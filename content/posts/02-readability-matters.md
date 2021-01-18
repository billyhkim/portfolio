---
id: '02'
title: Readability Matters
description: And, redoing the character map.
date: 2021-01-18
wordCount: 359
---

I'd always get mild butterfiles when submitting PRs <sup id="a-1">[1](#f-1)</sup> because I knew there'd be something that I overlooked and missed. But, there was an excitement to it since it posed an opportunity to learn something new from the team. <sup id="a-2">[2](#f-2)</sup> One of the things that I quickly learned was that the shorter, _clever_ solution doesn't necessarily equate to the most readable or kind.

The character map implementation from my last post, while it certainly works and is shorter, isn't the nicest code to leave behind for someone else to deal with. The ternary should be used for assignment rather than logic, `reduce()` isn't readily readable, and `apply()` is cool but someone may have to go out of their way to look it up on MDN/Stack Overflow.

With that in mind, let's try this again:

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

Let's walk through this implementation, with notes on the changes:

1. The string splits the same, but this time we declare an empty object to reference in step 2.
2. We use `forEach()` over `reduce()` to provide an easier reading experience. Instead of the ternary, we opt for an `if-else` statement.
3. We declare `characterKeysArray` as an added step to take the keys in the `characterMap` object. In the `results` instead of using `apply()` (which allowed us to put the array in directly) was to simply spread the values of the `characterMap`.

While this isn't real code for production, it speaks to the goal helping others inherit code with good intent and execution. This probably applies in some way to every discipline, but readability matters because another human will have to work with the code (or, fight it 😠😆) eventually.

<hr>

<sup id="f-1">[1](#a-1)</sup> For non-tech friends, PR is short for pull request and are code submissions for team members to discuss and review before it gets published.

<sup id="f-2">[2](#a-2)</sup> Shoutout to those who still keep an eye out. 😄
