'use strict';
let obj1 = {foo: 'bar'};
let obj2 = {foo: 'pop'};

function isDiff(obj1, obj2, isTwisted = false){

  for(let key in obj1){
    if(!obj2.hasOwnProperty(key)){
      return true;
    }
    if(obj1[key] !== obj2[key]){
      return true;
    }
    if (!isTwisted){return isDiff(obj2 ,obj1, isTwisted);
    }
    return false;
  };
};