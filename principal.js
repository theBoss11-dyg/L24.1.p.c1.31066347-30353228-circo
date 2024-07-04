/*CIRCO 
Para un espectáculo de circo se tienen 3 tipos de entrada: niños (hasta 12 años), adolescentes (hasta 18) y 
adultos (mayores de 18, respectivamente), el precio de la entrada general es de 15$. Por cada espectador se 
tiene: nombre, edad y sexo. Además, se sabe que si el espectador es niño o adolescente obtiene un descuento del 10%. 
Se requiere mostrar: a) Precio Cancelado por cada espectador, b) Promedio de las Ventas hechas a espectadores adolescentes, 
c) Entre niños y adolescentes cuál asistió más al circo, d) Porcentaje que representa la cantidad de niños que asistieron al 
circo con respecto al total de espectadores procesados. 
El circo suministra la siguiente información demostrativa, para 4 espectadores: (nombre, edad, sexo) (Ana, 8, F) (Luis, 15, M) 
(Valeria, 12, F) (Fabian, 21, M), según lo cual la salida 
requerida presenta el siguiente formato: 
 
El espectador Ana debe cancelar 13.5$ 
El espectador Luis debe cancelar 13.5$ 
El espectador Valeria debe cancelar 13.5$ 
El espectador Fabián debe cancelar 15.0$ 
Promedio de las Ventas hechas a espectadores adolescentes 13.5 
Entre niños y adolescentes el espectador que asistió más al circo fue Niños 
Porcentaje que representa la cantidad de niños que asistieron al circo 50%*_*/

import Cl_circo from './CL_circo.js'
import Cl_espectador from './CL_espectador.js'

let espectador1 = new Cl_espectador('Ana', 8, 'F')
let espectador2 = new Cl_espectador('Luis', 15, 'M')
let espectador3 = new Cl_espectador('Valeria', 12, 'F')
let espectador4 = new Cl_espectador('Fabian', 21, 'M')
let circo = new Cl_circo()
circo.procesarEspectador(espectador1)
circo.procesarEspectador(espectador2)
circo.procesarEspectador(espectador3)
circo.procesarEspectador(espectador4)

let salida = document.getElementById('salida')
salida.innerHTML = 'Resultados:'
salida.innerHTML +=
  '<br>Espectador ' +
  espectador1.nombre +
  ' debe cancelar :' +
  espectador1.precio_Espectador() +
  '$'
salida.innerHTML +=
  '<br>Espectador ' +
  espectador2.nombre +
  ' debe cancelar :' +
  espectador2.precio_Espectador() +
  '$'
salida.innerHTML +=
  '<br>Espectador ' +
  espectador3.nombre +
  ' debe cancelar :' +
  espectador3.precio_Espectador() +
  '$'
salida.innerHTML +=
  '<br>Espectador ' +
  espectador4.nombre +
  ' debe cancelar :' +
  espectador4.precio_Espectador() +
  '$'
salida.innerHTML +=
  '<br>Promedio de las Ventas hechas a espectadores adolescentes :' +
  circo.Promedio_Ventas_Adol()
salida.innerHTML +=
  '<br>Entre niños y adolescentes el espectador que asistió más al circo fue :' +
  circo.Asis_Nin_Esp()
salida.innerHTML +=
  '<br>Porcentaje que representa la cantidad de niños que asistieron al circo :' +
  circo.Porcent_Nin() +
  '%'
