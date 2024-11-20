### - randomiz documentation
-------
#### Version 1.4.0
- [github repo](https://github.com/manerr/randomiz) - [npm page](https://www.npmjs.com/package/randomiz)

-------

- function randBits(**n**)
    - returns an array of **n** bits (integers) → randBits(**8**) gives **[0,0,0,1,0,0,1,0]**.


- function randBool()
    - returns a random boolean.


- function randBytes(**n**)
    - returns an array of **n** bytes (integers) → randBits(**4**) gives **[150,12,77,0]**.


- function randFloat(**a**,**b**)
    - returns a random floating number between **a** and **b**.
    

- function randInt(**a**,**b**)
    - returns a random integer number between **a** and **b**.


- function randSign()
    - returns a random sign (returns either 1 or -1).


- function randToken(**n**)
    - returns a random URL-safe token string with **n** characters.


- function shuffle(**array**)
    - returns a shuffled copy of **array** - works on strings too, but you'll get a splitted array based on the original string. 


- function choice(**l**,**n**)
    - returns a **n** long random sliced version of **array** - works on strings too, but you'll get a splitted array based on the original string. 


- function pick(**array**)
    - returns a random element from **array** - works on strings but same behaviour than **choice**. 


- function pickPop(**array**)
    - returns (and pop) a random element from **array** 
    Unlike pick, it modify **array** (it'll "pop" an element from the original and returns it)


-------

- function randEmoji()
    - Well, just an easter egg.