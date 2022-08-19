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

    unshift(value){
        //Obtengo valor nuevo, entonces todos los valores que tenian antes, se guardaran uno adelante.
        for(let i = this.length; i>0; i--){
          
            this.data[i] = this.data[i-1];
        }
        this.data[0] = value;
        this.length++;
        return this.data;
    }

    delete(index){
        for (let i = index; i < this.length; i++) {
            if(i>index) this.data[i-1] = this.data[i]
        }
        delete this.data[this.length-1];
        this.length--;
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
/* console.log(myArray); */
myArray.delete(5)
/* console.log(myArray); */
console.log(myArray);
myArray.unshift("Fernando");
console.log(myArray);


