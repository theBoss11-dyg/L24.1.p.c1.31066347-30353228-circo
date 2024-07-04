export default class Cl_espectador {
  constructor(n, e, s) {
    this.nombre = n
    this.edad = e
    this.sexo = s
  }
  set nombre(n) {
    this._nombre = n
  }
  get nombre() {
    return this._nombre
  }
  set edad(e) {
    this._edad = +e
  }
  get edad() {
    return this._edad
  }
  set sexo(s) {
    this._sexo = +s
  }
  get sexo() {
    return this._sexo
  }

  calc_Desc() {
    if (this.edad <= 18) {
      return 15 * 0.1
    } else {
      return 0
    }
  }

  precio_Espectador() {
    return 15 - this.calc_Desc()
  }
}
