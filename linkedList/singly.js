// 1 --> 2 --> 3 --> 4 --> 5 --> null

//Append - value: 1, next: null. Para agregar uno, el next de la cola actual debe ser el nuevo nodo. Y por ultimo, la cola, tendrá a nuestro ultimo nodo. 

//Preppend - value: 1, next: null. Para agregar uno antes, tenemos que hacer que el next de nuestro nuevo nodo, sea el valor anterior (head) y luego hacemos que la cabeza ahora sea igual a nuestro nodo nuevo.  

let singlyLinkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3, 
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    },

}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(value){ //Obligamos a que tenga al menos un nodo.
        this.head = {
            value,
            next: null //Dejamos nulo para agregar otro valor en el futuro
        }
        this.tail = this.head //Al inicializar, la cola será igual a la cabeza.
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value); //Creamos un nuevo nodo
        this.tail.next = newNode; //Al nodo anterior, en el next le colocamos el nuevo nodo.
        this.tail = newNode; //Ahora, la cola de nuestros nodos será el recien creado
        this.length++; //Aumentamos la longitud
     

    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head; //Colocaremos una nueva cabeza. Y enlazaremos el anterior primer item.
        this.head = newNode;
        this.length++;
    }

    insert(value, position){
      if(position>=1){
        this.prepend(value);
        return;
      };

      if(position===this.length){
        this.append(value);
        return;
      }
      
      const newNode = new Node(value);
      const firstPointer = this.getIndex(index); //Este seria el Nodo viejo 4.
      const holdingPointer = firstPointer.next; 
      firstPointer.next = newNode;
      newNode.next = holdingPointer; //Al nuevo nodo, le agregamos como siguiente el Nodo 4. 
      this.length++;

      return this;
      
        
    }

    getIndex(index){
        let counter = 0; 
        let currentNode = this.head;
        while(index!==counter){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index){
        if(index>this.length-1) return `Ooops, no pudimos hacer nada. No hay ningun nodo en esa posicion.`
        
        if (index<0)  return 'El indice debe ser mayor a cero.';
        
        if(index==this.length-1){ //Si quiere remover el último nodo y ponerlo en el mismo lugar.
            return `Operación no admitida. No tiene lógica eliminar el último elemento del Nodo, para colocarlo en el mismo lugar.`
        }

        const actualNode = this.getIndex(index); //Obtiene el valor del nodo en esa posicion.
        
        if(index==0){ //Significa que no tiene nada atrás. No podemos restar. Necesito solamente pasar todos uno a la izquierda.
            const nextNode = actualNode.next //Se espera el nodo siguiente al que queremos eliminar.
            this.head = nextNode; //Como es el primero el que queremos eliminar, entonces el siguiente elemento tiene que ser ahora la cabeza.
        }else{
            const previousNode = this.getIndex(index - 1); //Nodo anterior al que vamos a eliminar. 
            const nextNode = previousNode.next.next; //Nodo que le sigue al que vamos a eliminar. 
            previousNode.next = nextNode; //
        }

        this.append(actualNode.value); 
        this.length--; 
        return `El valor ${actualNode.value} que estaba en el indice ${index} ahora está al final`;
        
    }

}

let mySinglyLinkedList = new SinglyLinkedList(1);
let numbersToAppend = [2, 3, 4, 5, 6, 14, -1, 145, 190, 200, 210];
numbersToAppend.forEach((number) =>{
    mySinglyLinkedList.append(number);
})

mySinglyLinkedList.prepend(-2)

/* Antes  -2, 2, 3, 4, 5, 6, 14, -1, 145, 190, 200, 210 */
/* console.log(mySinglyLinkedList.remove(0)); */
/* Ahora   2, 3, 4, 5, 6, 14, -1, 145, 190, 200, 210, -2 */

/* No tiene logica. */ 
//console.log(mySinglyLinkedList.remove(-1));

/* No tiene logica eliminar el ultimo y agregarlo en la misma posicion */ 
//console.log(mySinglyLinkedList.remove(12));

/* Antes -2, 1, 2, 3, 4, 5, 6, 14, -1, 145, 190, 200, 210  */ 
console.log(mySinglyLinkedList.remove(6));
/* Ahora -2, 1, 2, 3, 4, 5, 14, -1, 145, 190, 200, 210, 6 */




