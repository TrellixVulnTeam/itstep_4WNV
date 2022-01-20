class Vector {
    x: number;
    y: number;
    z: number;

    constructor (x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getLength (): number{
        // console.log(Math.sqrt(this.x**2 + this.y**2 + this.y**2));
        return Math.sqrt(this.x**2 + this.y**2 + this.y**2)
    }

    getScalar(vector: Vector): number{
       return (this.x*vector.x + this.y*vector.y + this.z*vector.z);
   }

   static getArrayN(n: number): Vector[] {
       const vectors: Array<Vector> = []
        for(let i: number = 0; i<n; i++){
            let x = Math.ceil(Math.random()*10);
            let y = Math.ceil(Math.random()*10);
            let z = Math.ceil(Math.random()*10);
            vectors.push(new Vector(x, y, z));
        } 
        return vectors;
   } 

}

export{Vector};