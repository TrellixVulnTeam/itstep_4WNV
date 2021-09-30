class Robot {
    x = 0;
    y = 0;
    direction = 0; //0 - вверх, 1 -право, 2 - низ, 3 - влево;
    field;

    constructor(x, y, direction, field){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.field = field;
    }
    rotateUp(){   // против часовой
       if(this.direction == 0)
       this.direction = 3;
       else 
       this.direction--;
    }
    rotateDown(){  // по часовой стрел
        if(this.direction == 3)
       this.direction = 0;
       else 
       this.direction++;
    } 
    move(){
        let x,y;
        if(this.direction == 0){
            x = this.x - 1;
            y = this.y;
        }
        if(this.direction == 1){
            x = this.x;
            y = this.y + 1;
        }
        if(this.direction == 2){
            x = this.x + 1;
            y = this.y;
        }
        if(this.direction == 3){
            x = this.x;
            y = this.y - 1;
        }
        if((x < this.field.n && x > -1) && (y < this.field.m && y > -1) && this.field[x][y] != 1){
            this.x = x;
            this.y = y;
            return true;
        }
        else{
            return false;
        }
    }

    removeMine(){
        let x,y;
        if(this.direction == 0){
            x = this.x - 1;
            y = this.y;
        }
        if(this.direction == 1){
            x = this.x;
            y = this.y + 1;
        }
        if(this.direction == 2){
            x = this.x + 1;
            y = this.y;
        }
        if(this.direction == 3){
            x = this.x;
            y = this.y - 1;
        }
        if(this.field.cells[x][y] == 2){
            this.field.cells.removeMine(x,y);
        }       
    }
}

export {Robot};