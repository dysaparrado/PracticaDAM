interface Al{
    nctrl:string,
    nombre:string,
    apellidos:string,
    promedio:number,
    genero:string,
    f_nac:string,
    activo:boolean
}

export class Alumno{
    ar=Array<Al>();

    constructor(){}

    agregar(nc:string ,n:string,a:string,p:number,g:string,f:string,ac:boolean) {
        let nal:any
        nal={ nctrl:nc,
            nombre:n,
            apellidos:a,
            promedio:p,
            genero:g,
            f_nac:f,
            activo:ac};
        this.ar.push(nal);
        this.imprimir();
    }

    borrar(nc:string){
        for(var i=0;i<this.ar.length;i++){
            if(this.ar[i].nctrl==nc){
                this.ar.splice(i,1);
            }
        }
        this.imprimir();
    }

    actualizar(nc:string ,n:string,a:string,p:number,g:string,f:string,ac:boolean){
        let nal:any
        nal={ nctrl:nc,
            nombre:n,
            apellidos:a,
            promedio:p,
            genero:g,
            f_nac:f,
            activo:ac};
        for(var i=0;i<this.ar.length;i++){
            if(this.ar[i].nctrl==nc){
                this.ar[i]=nal;
            }
        }
        this.imprimir();
    }

    imprimir(){
        for(let i=0;i<this.ar.length;i++){
                console.log(this.ar[i]);
        }
    }

  
}