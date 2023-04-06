El contexto del error es el siguiente: Al evaluar algunas operaciones antecedidas por un 0, el resultado final no es correcto. Por ejemplo, el valor de 062/2 
da 25 cuando debería dar 31. Esto es por la función eval, que evalua un string y entrega un resultado en este caso incorrecto). 
En conversación con el profesor sobre el programa mencionó que no deberíamos usar eval, sino una función separada para cada operación aritmética (+-*/), por
lo tanto eso es lo que hay que implementar. 
