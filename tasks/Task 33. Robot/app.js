import {Field} from "./field.js";
import {Robot} from "./robot.js";

let field = new Field(4,4);

field.show();

field.addMine(1,2);
field.addMine(2,0);
field.addWall(1,0);
field.addWall(1,1);
field.addWall(1,3);
field.addWall(2,3);
field.addWall(3,1);

field.show();

let robot = new Robot(0,0,0,field);

robot.rotateDown();
robot.move();
robot.move();
console.log(robot.x, robot.y);
robot.rotateDown();
robot.removeMine();
robot.move();
robot.move();
robot.rotateDown();
robot.move();
robot.removeMine();
robot.move();

field.show();