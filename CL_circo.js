export default class Cl_circo {
  constructor() {
    this.acumVentasAdol = 0
    this.contAdol = 0
    this.contNin = 0
    this.contEsp = 0
  }
  procesarEspectador(es) {
    this.contEsp++
    if (es.edad > 12 && es.edad <= 18) {
      this.contAdol++
      this.acumVentasAdol += es.precio_Espectador()
    }
    if (es.edad <= 12) {
      this.contNin++
    }
  }
  Promedio_Ventas_Adol() {
    return this.acumVentasAdol / this.contAdol
  }
  Asis_Nin_Esp() {
    if (this.contNin > this.contAdol) {
      return 'niños'
    } else {
      return 'adolescente'
    }
  }

  Porcent_Nin() {
    return (this.contNin / this.contEsp) * 100
  }
}
