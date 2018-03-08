"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno() {
        this.ar = Array();
    }
    Alumno.prototype.agregar = function (nc, n, a, p, g, f, ac) {
        var nal;
        nal = { nctrl: nc,
            nombre: n,
            apellidos: a,
            promedio: p,
            genero: g,
            f_nac: f,
            activo: ac };
        this.ar.push(nal);
        this.imprimir();
    };
    Alumno.prototype.borrar = function (nc) {
        for (var i = 0; i < this.ar.length; i++) {
            if (this.ar[i].nctrl == nc) {
                this.ar.splice(i, 1);
            }
        }
        this.imprimir();
    };
    Alumno.prototype.actualizar = function (nc, n, a, p, g, f, ac) {
        var nal;
        nal = { nctrl: nc,
            nombre: n,
            apellidos: a,
            promedio: p,
            genero: g,
            f_nac: f,
            activo: ac };
        for (var i = 0; i < this.ar.length; i++) {
            if (this.ar[i].nctrl == nc) {
                this.ar[i] = nal;
            }
        }
        this.imprimir();
    };
    Alumno.prototype.imprimir = function () {
        for (var i = 0; i < this.ar.length; i++) {
            console.log(this.ar[i]);
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
