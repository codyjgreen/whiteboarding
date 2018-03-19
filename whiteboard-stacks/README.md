## Whiteboard Challenge: Stacks
#### Question: Write a function called `isBalanced` that accepts a string of left and right brackets and returns true if the brackets are balanced. Use a stack! Push whenever you see an opening curly brace. Pop whenever you see a closing curly brace. If you see a closing curly brace when the stack is empty, that's an error.
```
"" returns true
"{" returns false
"}" returns false
"{}" returns true
"}{" returns false
"{{}}" returns true
"{{}" returns false
"}{}" returns false
```
### Answer: 
```
function isBalanced(str){
  let stack = [];
  for(let i = 0; i< str.length; i++){
    
    if(str.charAt(i) === '{'){
      stack.push(str.charAt(i));
    }
    if(str.charAt(i) === "}"){
      stack.pop()
    }
  }
  if(stack = []){
    return true;
  }
  else{
    return false
  }
}
```