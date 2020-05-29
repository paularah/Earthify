interface Point {
    x: number,
    y: number
}

function printPoint(point: Point){
    console.log(point.x, point.y);
}

const point: Point = {x: 23, y: 12, z: 45};
printPoint(point);