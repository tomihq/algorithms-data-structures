class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
    hashMethod(key){
        let hash = 0;
        for(let i = 0; i < key.length;i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        const address = this.hashMethod(key);
        //Si el address no existe creamos un array para almacenar los datos en esa posicion
        if(!this.data[address]){
            this.data[address] = []; //Los valores siempre estaran en 0,1. La key siempre es el 0, el value el 1.
        }
        //Si ya existe o recien fue creada, se agrega el elemento. Si antes habia uno, entonces se colisionan.
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key){
        //Obtenemos la direccion en donde esta almacenado nuestro keyvalue.
        const address = this.hashMethod(key);
        //Esto nos regresará los n cantidad de arrays que tiene ese key. Si hay mas de uno, habrá un array padre, y dentro los hijos
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i<currentBucket.length; i++){
               return currentBucket[i][0]===key && currentBucket[i][1]; //Todas las listas tienen la key en el indice 0.
            }

        }
     return undefined;   
    }

    delete(key){
        const address = this.hashMethod(key);
        //Esto nos regresará los n cantidad de arrays que tiene ese key. Si hay mas de uno, habrá un array padre, y dentro los hijos
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i<currentBucket.length; i++){
                   if(currentBucket[i][0]===key){
                        let deletedItem =  currentBucket.splice(i, 1);
                        return deletedItem;
                   }
            }

        }
        return "The key doesn't exists";   
    }

    getAllKeys(){
        //Retornar todos los key que existe en toda la hash table. Tengo que recorrer todos los array dentro de todos los arrays y retornar su key. 
        //Verificar la longitud, si es un array dentro de array itero dos veces, sino una sola vez.
        let keys = [];
        for(let i = 0; i<this.data.length; i++){
            if(this.data[i]){
                    for(let j = 0; j<this.data[i].length; j++){
                        keys.push(this.data[i][j][0]);
                    }
            }
        }
        return keys;

    }

    

}
const myHashTable = new HashTable(50); //Inicializamos con 50 buckets.

myHashTable.set("name", "Tomas");
/* console.log(myHashTable); */
myHashTable.set("name", "Gonzalo");
/* console.log(myHashTable); */
//En este momento veremos que tenemos 2 key iguales (name) por lo tanto colisionaran. Dentro de un espacio de memoria habrá 1 array padre con 2 arrays hijos. 
//["name", "Gonzalo"], ["name", "Tomas"]
myHashTable.set("age", "18");
/* console.log(myHashTable); */
//En este momento veremos que tenemos otro array pero que no colisiona con las anteriores porque las key son distintas.

//Los empty items son los espacios de memoria que nos queda dentro de la hash table.
/* console.log(myHashTable.get("age")); */
myHashTable.delete("age");
/* console.log(myHashTable); */
myHashTable.set("age", "19");
myHashTable.set("age", "18");
myHashTable.set("age", "20");
myHashTable.set("size", "25");
console.log(myHashTable.getAllKeys());