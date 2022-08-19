class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(value){
        this.data[this.length] = value;
        this.length++;
        return this.data;
    }

    put(index, value){
        this.data[index] = value;
        return this.data[index];
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
        
    }

    delete(index){
        for (let i = index; i < this.length; i++) {
            if(i>index) this.data[i-1] = this.data[i]
        }
        delete this.data[this.length-1];
        return this.data;
    }


}

const myArray = new MyArray();
myArray.push('Tomas');
myArray.put(0, 'Gonzalo');
myArray.push('Mario');
myArray.push('Karina');
myArray.push('Andy');
myArray.push('Pedro');
myArray.push('Carlo');
myArray.push('Juan');
myArray.pop(); 
console.log(myArray);
myArray.delete(5)
console.log(myArray);
