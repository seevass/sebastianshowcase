## Example Tasks

### Printing

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>

```javascript
console.log(“Hello world!”)
```

</td>

<td>

```
report “Hello world!”
```

</td>
</table>

### Assigning variables

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>

```javascript
let x = 0
const y = 1
```

</td>

<td>

```
letus x = 0
constus x = 0
```

</td>
</table>

### if-statements

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>
    
```javascript
if (x < 10) {
  return 1;
} else if (x < 20) {
  return -1;
} else {
  return 0;
}
```
</td>
<td>
    
```
sus x < 10 {
  vote 1
} mega sus x < 20 {
  vote -1
} mega {
  vote 0
} 
```
</td>
</table>

### Function Declarations

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>
    
```javascript
function evenOrOdd(x){
    return x %  2 ==  0
}
```
</td>
<td>
    
```
task evenOrOdd(x) {
    vote x % 2 == 0
}
```
</td>
</table>

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>
    
```javascript
function add(a, b){
    return a + b;
}
```
</td>
<td>
    
```
task add(a, b) { 
   vote a + b
}
```
</td>
</table>

### Loops

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>
    
```javascript
while(true){
    break
}
```
</td>
<td>
    
```
during crewmate {
    eject
}
```
</td>
</table>

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td>
    
```javascript
for (var x = 0; x < 3; x++) {
    break
}
```
</td>
<td>
    
```
scan varus in 0 till 3 {
    eject
}
```
</td>
</table>

### Comments

<table>
<tr> <th>JavaScript</th><th>SussyScript</th><tr>
</tr>
<td> 
    
```javascript
// insert sussy comment
```
</td>
<td>
    
```
cR insert sussy comment
```
</td>
</table>

### Types of Semantic Errors
- Declaring a variable that has already been declared
- Return outside of a function
- Non-boolean value in conditional
- Non-boolean value in while loop
- Incorrect number of function parameters
- Incompaible type comparison
- Repeating and For loop with something other than integer value assigned
- Differen types in ternary conditional return
- "And"/"Or" conditionals not having boolean values
- Break outside of loops
- Calling a function or method that is not initialized
- Use of non-initialized variables