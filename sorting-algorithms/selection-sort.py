#Buscar el numero menor en mi array
#Crear dos subarrays para llevar el control de mi algoritmo.
#Imprimir el resultado.
import sys;
array = [50, 23, 15, 20, 10];

def selectionSort(array):
    n = len(array);

    for i in range(n):
        idxDes = i;
        for j in range(i+1, len(array)):
            if array[j] < array[idxDes]: 
                idxDes = j;
        #Encontramos minimo.
        #Metemos minimo en la primera posicion.
        array[i], array[idxDes] = array[idxDes], array[i]
print(array);
selectionSort(array);
print(array);
