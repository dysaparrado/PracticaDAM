import { Alumno } from './alumno';

let na= new Alumno();

na.agregar("14400983","Dylan Salvador","Parra Dominguez",90,"H","1995",true);
na.agregar("14400990","Carlos","Puga",85,"H","1997",false);

na.actualizar("14400983","Dylan S","Parra",92,"H","1995",true);

na.borrar("14400990")