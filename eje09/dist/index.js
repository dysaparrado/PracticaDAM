"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumno_1 = require("./alumno");
var na = new alumno_1.Alumno();
na.agregar("14400983", "Dylan Salvador", "Parra Dominguez", 90, "H", "1995", true);
na.agregar("14400990", "Carlos", "Puga", 85, "H", "1997", false);
na.actualizar("14400983", "Dylan S", "Parra", 92, "H", "1995", true);
na.borrar("14400990");
