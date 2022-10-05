import './index.html';
import './index.scss';
import cubes from './img/cubes.jpg';
import { mult, sum } from './libs/modules/calc';

const img = new Image();
img.src = cubes;

console.log(mult(5, 6));
console.log(sum(8, 4));