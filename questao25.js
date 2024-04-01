/*
25.O que significa a expressão true && !(false || true)?


Dentro dos parênteses, temos false || true, que é verdadeiro porque pelo menos um dos operandos é verdadeiro.

Em seguida, aplicamos a negação ! a esse resultado:

!(false || true) resulta em !(true), que é falso, pois estamos negando o resultado verdadeiro.
Agora, vamos considerar a expressão true && !(false || true):

true && !(false || true) é equivalente a true && false, pois o resultado dentro dos parênteses é falso.
Por fim, true && false resulta em false, pois o operador && (E lógico) requer que ambos os operandos sejam verdadeiros para que a expressão total seja verdadeira.
*/