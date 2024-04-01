/*
22.O que retorna a expressão false || (true && false)?

Dentro dos parênteses, temos a expressão (true && false), que avalia para false, pois o operador && (E lógico) só retorna true se ambos os operandos forem verdadeiros, o que não é o caso aqui.

Agora, aplicamos o operador || (OU lógico) à false e ao resultado da expressão dentro dos parênteses:

false || false resulta em false.
*/