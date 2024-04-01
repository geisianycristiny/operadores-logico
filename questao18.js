/*
18.O que retorna a expressão (true || false) && !(false && true)?
Dentro dos parênteses, temos:

(true || false): Esta expressão retorna true, pois pelo menos um dos operandos é verdadeiro.
Em seguida, vamos tratar a expressão dentro do segundo conjunto de parênteses:

(false && true): Esta expressão retorna false, pois ambos os operandos são falsos.
Agora, aplicamos a negação ! ao resultado da expressão dentro do segundo conjunto de parênteses:

!(false && true): Como o resultado de false && true é false, a negação retorna true.
Finalmente, aplicamos o operador && à expressão do primeiro conjunto de parênteses e à expressão negada:

(true || false) && !(false && true):
(true || false) é true.
!(false && true) é true (como determinamos anteriormente).
Agora, temos true && true:

true && true resulta em true.

*/