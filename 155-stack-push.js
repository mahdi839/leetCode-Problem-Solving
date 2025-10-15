class MinStack {
    constructor(){
        this.stack = [];
        this.minStack = []
    }

    push (value){
        this.stack.push(value)
        if(this.minStack.length ===0){
            this.minStack.push(value)
        }else{
          let curMin = this.minStack[this.minStack.length-1];
          this.minStack.push(Math.min(value,curMin))
        }
    }

    pop(){
        this.stack.pop();
        this.minStack.pop();
    }

    top(){
        return this.stack[this.stack.length-1]
    }

    getMin(){
        return this.minStack[this.minStack.length-1]
    }
}

const mn = new MinStack();
const ms = new MinStack();
ms.push(5);   // stack: [5],  min: [5]
ms.push(2);   // stack: [5,2], min: [5,2]
ms.push(8);   // stack: [5,2,8], min: [5,2,2]
console.log(ms.getMin()); // 2
ms.pop();                  // pop 8
console.log(ms.getMin()); // 2
ms.pop();                  // pop 2
console.log(ms.getMin()); // 5