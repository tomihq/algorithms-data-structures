#1. Comenzamos agarrando un pivote de nuestro array y lo comparamos con el siguiente.
#Si el siguiente es MENOR entonces el MENOR pasa a la POSICION actual.
#Una vez que terminó de iterarse con el primer número, el pivote cambia.
change = 1;
def bubbleSort(array):
    n = len(array);

    for i in range(n):
        print(array);
        change = 0; 
        for j in range(0, n-i-1):
            if array[j] > array[j+1]: 
                array[j], array[j+1] = array[j+1], array[j]
                change = 1;
            if change<1: break;

#Para ordenar hará lo siguiente:
#PRIMERA ITERACION:
# Agarra 100: 100 es mayor que 20? Sí, por lo tanto 20 pasa a primera posicion. 100 es mayor que 3? Sí, por lo tanto 3 pasa a segunda posicion. 100 es mayor que 10? Sí, por lo tanto 10 pasa a tercera posición. 100 es mayor que 800? No, por lo tanto el 800 momentaneamente queda ahí. 100 es mayor que 240? No, por lo tanto queda ahí.
# Nuestro array queda: 20 3 10 100 800 240 
#Y así sucesivamente...


# así sucesivamente. Su peor caso es un total de n^2 (36 veces).
array = [100, 20, 3, 10, 800, 240];
print(array);
bubbleSort(array);
print(array);