
/*
========================================================================================================================
====================================================== VARIABLES =======================================================
========================================================================================================================

1. What is a Variable?
A variable is a container used to store data.

Example:
let age = 18;

Here:
let  = Keyword
age  = Variable Name
18   = Value
=    = Assignment Operator



2. Types of Variable Declaration
JavaScript has three keywords:

1. var
2. let
3. const



----------------------------------------
A. var
----------------------------------------

- var is used to declare a variable.
- We can declare it again.
- We can change its value.
- It has function scope.

Declaration:
var a;

Initialization:
a = 20;

Declaration + Initialization:
var a = 20;

Reassignment:
a = 50;



Example:-

var a = 20;
console.log(a);

a = 50;
console.log(a);

Redeclaration:

var a = 100;
console.log(a);



----------------------------------------
B. let
----------------------------------------

- let is used to declare a variable.
- We can change its value.
- We cannot redeclare it in the same scope.
- It has block scope.

Declaration:
let b;

Initialization:
b = 10;

Declaration + Initialization:
let b = 10;

Reassignment:
b = 30;



Example:

let b = 10;
console.log(b);

b = 30;
console.log(b);


----------------------------------------
C. const
----------------------------------------

- const is used to declare a variable.
- Its value cannot be reassigned.
- It cannot be redeclared in the same scope.
- It has block scope.
- It must be initialized during declaration.

Declaration + Initialization:
const c = 80;



Example:

const c = 80;
console.log(c);

! c = 100;  // Error


----------------------------------------
3. Multiple Variable Declaration
----------------------------------------

We can declare multiple variables in one line.

Example:

var x = 10, y = 20, z = 30;

console.log(x);
console.log(y);
console.log(z);


----------------------------------------
4. Difference Between var, let and const
----------------------------------------

var:
- Can be redeclared with same variable name. 
- Can be reassigned.
- Function scoped.
- var has accessible before initialization. 

let:
- Cannot be redeclared in same variable.
- Can be reassigned.
- Block scoped.
- let has not accessible before initialization

const:
- Assignment is mandatory. 
- Cannot be redeclared in same variable.
- Cannot be reassigned.
- Block scoped.


----------------------------------------
5. Important Rules
----------------------------------------

1. Variable names cannot start with numbers.
2. Spaces are not allowed in variable names.
3. JavaScript is case-sensitive.
4. Use meaningful variable names.
5. Prefer const and use let when reassignment is needed.
6. Avoid var in modern JavaScript.


*/


var a = 10;
var b = 20;

console.log(a,b);



var a = 100;
var a = 40;

console.log(a);




var b;
console.log(b);      // Undefined




var a = 10;
let b = 60;

console.log(b);




let b ;
console.log(b);       // Undefined




let b = 60;
let b = 100;

console.log(b);        // Not Possible ( Redeclaration )




// Updatation - 

var a = 10;
a = 50 ;

console.log(a);



let a = 10;
a = 50 ;

console.log(a);






console.log(a);
var a = 50 ;          // Undefined





console.log(a);
let a = 50 ;           // Cannot access 'a' before initialization





console.log(a);        // a is not defined





var a = 10;
console.log(window);


let a = 10;
console.log(window);





const a = 90;
a = 80;
console.log(a);       // Assignment to constant variable.






{
    var b = 80;
    let c = 90;
    const ab = 50;
    console.log(b);
    console.log(c);
    console.log(ab);

}

console.log(b);
console.log(c);           // c is not defined
console.log(ab);          // ab is not defined







/*
========================================================================================================================
=================================================== VARIABLE SCOPE =====================================================
========================================================================================================================

1. What is Scope?

Scope defines where a variable can be
accessed or used in a program.

JavaScript has 3 main types of Scope:

1. Global Scope
2. Function Scope
3. Block Scope


================================================
1. GLOBAL SCOPE
================================================

A variable declared outside any function
or block is called a Global Variable.

It can be accessed from different parts
of the program, subject to its scope.

Example:

var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

Output:
10
20
30


================================================
2. BLOCK SCOPE
================================================

A block is a piece of code written inside
curly brackets { }.

Variables declared using let and const
inside a block can only be accessed
within that block.

Example:

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);  // 10

! console.log(b); // Error
! console.log(c); // Error

IMPORTANT:

var   = Not Block Scoped
let   = Block Scoped
const = Block Scoped


================================================
3. FUNCTION SCOPE
================================================

Variables declared inside a function
can only be accessed inside that function.

var, let and const all have function scope
when declared inside a function.

Example:-

function display() {

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

display();

! console.log(a); // Error
! console.log(b); // Error
! console.log(c); // Error


================================================
4. DIFFERENCE BETWEEN SCOPES
================================================

GLOBAL SCOPE:
- Declared outside functions and blocks.
- Accessible throughout its enclosing scope.

BLOCK SCOPE:
- Created using { }.
- let and const are block scoped.
- var is not block scoped.

FUNCTION SCOPE:
- Created inside a function.
- var, let and const are function scoped.


================================================
5. DIFFERENCE BETWEEN var, let AND const
================================================

                 var       let       const

Redeclaration     Yes       No         No
Reassignment      Yes       Yes        No
Block Scope       No        Yes        Yes
Function Scope    Yes       Yes        Yes


================================================
6. IMPORTANT POINTS
================================================

1. Scope decides where a variable can be used.
2. var is function scoped, not block scoped.
3. let and const are block scoped.
4. Variables declared inside a function
   cannot be accessed outside that function.
5. A global variable can be accessed inside
   functions and blocks in its scope.

*/

