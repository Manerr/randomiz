

-------
### - randomiz documentation

#### Version 2.1.0
- [github repo](https://github.com/manerr/randomiz) - [npm page](https://www.npmjs.com/package/randomiz)

### Installation

🤩Add the library to your project by copying the code or using a package manager (like npm :3 )  -> `npm -i randomiz`
👉 Just use `randomiz = require('randomiz')` or `import {randBytes,randToken} from 'randomiz'` as for any other npm package ;) 

**🥺** Since version 2.0.0 , randomiz use a cryptographically strong random generator instead of Math.random(). It could reduces performances, so if you're looking for performances and if you don't need a secure generator (like for game development or client-side randomization cases),just use versions under v.2.0.0 🫠.

 
-----
#### Basics:

 - function randBool(**weight = 0.5**)
    - returns a random boolean you can trick with **weight**.

- function randFloat(**a**,**b**)
    - returns a random floating number between **a** and **b**.

- function randInt(**a**,**b**)
    - returns a random integer number between **a** and **b**.
----
#### Arrays and strings tools:

##### - Modifiers (all of them works on both strings and 1-level array)

- function shuffle(**array**)
    - returns a shuffled copy of **array** 

- function choice(**l**,**n**)
    - returns a **n** long **array** of elements picked from **l** 
- function pick(**array**)
    - returns a random element from **array** 

- function pickPop(**array**)
    - returns (and pop) a random element from **array** 
    Unlike pick, it modify **array** (it'll "pop" an element from the original and returns it)

- function randSlice(**array**,**n**){
    - returns a **n** elements long slice from **array** 
    
    Acts like **pick(array)** but on various size instead of one ( consider using **pick** if you want only one element -> better performance )

##### - Generators

- function randArray(**n**,**min**,**max**,**float**=false)
    - returns a **n** long array of (floats or integers) numbers between **min** and **max**
  
- function randBytes(**n**)
    - returns an **Uint8Array** of **n** bytes (integers) → randBits(**4**) gives **[150,12,77,0]**.

- function randMat(**rows**,**cols**,**min**,**max**)
    - returns a matrix with (**rows**,**cols**) containing random integer between **min** and **max**

- function randID(**n**)
    - returns a random numerical ID string with **n** characters: randID(**4**) = 1000>r>10000.
    
- function randToken(**n**,**type**="all")
    - returns a random URL-safe token string with **n** characters.
    - if( type == "ABC"){
        og = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        else if( type == "abc"){
            og = "abcdefghijklmnopqrstuvwxyz";
        }
        else if(type == "ABC123"){
            og = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        }
        else if(type == "abc123"){
            og = "abcdefghijklmnopqrstuvwxyz0123456789";
        }



----
#### Misc

- function randBits(**n**)
    - returns an string of **n** bits → randBits(**8**) gives **"00010010"**.

- function randSign(**weight = 0.5**)
    - returns a random sign (returns either 1 or -1) with **weight**.


-------

- function randEmoji()
    - Well, just an easter egg.