---
title: 'UoM Programming proficiency test'
date: '2025-03-10'
---

## Preface

So, I'm a biomed student at the University of Melbourne who wants to do [Foundations of Algorithms](https://handbook.unimelb.edu.au/subjects/comp10002) (FoA) instead of [Foundations of Computing](https://handbook.unimelb.edu.au/subjects/comp10000) (FoC), because FoC really only covers the basics in Python. In order to do this, you need to get at least 75% in a [Programming proficiency test](https://cis.unimelb.edu.au/study/programming-proficiency-test). So, here's my experience with the test, what I did to prepare, and what the *2025 Wk1 Programming proficiency test* was like.

## Background knowledge

I learnt Python in year 7-8 as it was part of our mathematics curriculum at high school. Having moved on from Python to Javascript, Rust, etc., I thought that this test would be challenging, as the test is **based off Python**. You don't *have* to use Python to answer questions, however considering that Python is the language that was intended, I would recommend using it. For me personally, I believed the main difficulty I would face was maintaining consistent usage of proper Python syntax, as opposed to solving the general programming questions. However, this actually did not turn out to be the case! Instead, I was genuinely stumped by the fundamental computing challenge that the questions posed. I think this happened because, as someone who coded primarily with the assistance of documentation and libraries, while I had been working on projects (such as [demeter](https://demeter.toomwn.xyz/), [CEDICT-Search](https://github.com/EddieTheEd/CEDICT-Search)) I had not actually been practicing the basic computing concepts (e.g. search algorithms) that underpin the FoC course.

## Preparing

The first thing I did was try and refresh my memory on Python's syntax. This [online book](https://runestone.academy/ns/books/published/fopp/index.html) was a very good refresher, and if I wasn't certain on a specific inbuilt function in Python, I would consult [w3schools](https://www.w3schools.com/python/default.asp).

Once I had regained consistency in remembering Python syntax, I started working on [leetcode](https://leetcode.com/) problems. For this test in particular, I would recommend **leetcode easy** questions. Do note that some questions labelled 'easy' are not actually 'easy'! Fortunately, for this test you **do not need to know specific algorithms, e.g. breadth-first search**. Instead, questions that test your knowledge on:
- String manipulation
- List manipulation
- [Slicing](https://www.w3schools.com/python/gloss_python_string_slice.asp)
- Recursion/iteration

Should prepare you sufficiently for the test.

For example, [this question](https://leetcode.com/problems/day-of-the-year/submissions/1568682245/) is a pretty good one for the test. ~~That is, until you get stuck on 10958 / 10959 testcases passed because of some silly rule about leap years.~~

## The test

As I wasn't too confident in my Python, I elected to sit the test in Week 1 of Semester 1, instead of during [Orientation week](https://students.unimelb.edu.au/new-students/melbourne-orientation). However, I heard from my friends that the tests were 'eerily similar', so take that information with a grain of salt.

Anyways, these are the questions, as best as I can remember! We had 50 minutes to write out our answers with pen and paper. The first 4 questions required you to write code, while the last question involved reading code and answering about what the code does. I can (somewhat confidently) give you the answers for question 5, but the rest of the questions can have a multitude of answers.

### 1.

Write a function that checks whether letters in a string `sentence` are capitalised after punctuation, including at the start of the string.
e.g.
```
"hello" -> False
"Hello. world" -> False
"Hello. World. Hello" -> True
```

### 2.
Write a function that, given a string `sentence`, it returns the string with each instance of a UoM subject code having its number increased by one. A UoM subject code consists of 4 letters and 5 integers in sequence.
e.g.
```
"I do MAST10024." -> "I do MAST10025."
"Why do BIOM10001 when you can do BIOL10002?" -> "Why do BIOM10002 when you can do BIOL10003?"
```

### 3.
Write a function that, given a **rectangular** matrix (list with sublists) and a total (integer), will return `True` if the total exists through summing up the numbers in the matrix *horizontally* and *vertically*.
e.g.
```
Given:
[[1,1,1,1],
[1,2,3,1],
[1,1,4,1],
[1,3,5,9]]

and a total of 10, return True.

If it was a total of 20, return False.
```

### 4.
Write a function that, given a string `sentence` and a special letter `letter`, it will return a string that contains the *first* letter of every *word*, in *order*, that **doesn't contain** the special letter.
e.g.
```
"hi, elephants might like american pie" -> "help"
```

Here, the definition of a 'word' is that it is separated by spaces.

### 5a.
How many times is multiplication done for this sample of code?
```
sum = 0
for i in range(0, M):
    for j in range(1, M-N+1):
        sum += i*j
```

<details><summary>Answer</summary>M^2 - MN</details>

### 5b.
We are given a binary search function to find vowels.
How many times will this function be called (including initial call) for the word "programmer"?

<details><summary>Answer</summary>19, it's best to draw out a tree.</details>

## A note about how the test is marked

I spoke to the (very kind) invigilator after the test, and he said that the test is unique in terms of it's marking. The markers are not specifically ticking off a checklist of what they expect in an answer, i.e. did they use a for loop, etc., instead, they are looking for general programming patterns. In other words, as long as your ideas are *roughly* correct and make sense, they can give you some leeway in terms of strict syntax. This means that, while its definitely helpful to have a strong understanding of Python's syntax, it may not be necessary. Do what you will with this information.

## In conclusion
This was an interesting experience. I feel like I've been stressed about this test for a month, and though I felt it wasn't particularly difficult, I'm a bit worried that the methods I used are too sketchy to give me a good score. Hopefully I pass, and I hope this was helpful to anyone taking the test in the future :)

*Editor's note*: I passed :)))))))
