-------
### - randomiz documentation

#### Version 1.5.0
- [github repo](https://github.com/manerr/randomiz) - [npm page](https://www.npmjs.com/package/randomiz)

### Installation

Add the library to your project by copying the code or using a package manager (like npm :3 )  -> `npm -i randomiz`
Just use `randomiz = require('randomiz')` or `import {randBytes,randToken} from 'randomiz'` as for any other npm package ;) 

##### (Note that Math.random() which is used here doesn't give very long floating poing numbers so forgive randInt(10\*\*20) .
 
-------

- function randBits(**n**)
    - returns an string of **n** bits → randBits(**8**) gives **"00010010"**.


- function randBool(**weight = 0.5**)
    - returns a random boolean with **weight**.


- function randBytes(**n**)
    - returns an array of **n** bytes (integers) → randBits(**4**) gives **[150,12,77,0]**.


- function randFloat(**a**,**b**)
    - returns a random floating number between **a** and **b**.


- function randID(**n**)
    - returns a random numerical ID string with **n** characters: randID(**4**) = 1000>r>10000.
    

- function randInt(**a**,**b**)
    - returns a random integer number between **a** and **b**.


- function randSign(**weight = 0.5**)
    - returns a random sign (returns either 1 or -1) with **weight**.


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