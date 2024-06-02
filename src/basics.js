/*Formulas */
const ladoCuadrado = 5;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;

//perimetro Cuadrado
function perimetroCuadrado() {
  return ladoCuadrado * 4;
}

//area cuadrado
function areaCuadrado() {
  return ladoCuadrado * ladoCuadrado;
}

//perimetro triangulo
function perimetroTriangulo() {
  return ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
}

//area de triangulo
function areaTriangulo() {
  return (ladoTrianguloBase * ladoTriangulo1) / 2;
}
