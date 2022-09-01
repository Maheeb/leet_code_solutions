var nearestValidPoint = function(x, y, points) {
    const calculateDistance = (pts) => {
        return Math.abs(x-pts[0]) + Math.abs(y-pts[1]);
    }

    let smallestValue = Infinity;
    let smallestIndex = -1;

    points.forEach((point, index)=> {
        if(point[0]===x || point[1]===y) {
            const distance = calculateDistance(point);
            if(distance < smallestValue) {
                smallestValue = distance;
                smallestIndex = index;

            }
        }
    })

    return smallestIndex;
};
x = 1
y = 1
points = [[1,2],[3,3],[3,3]]


console.log(nearestValidPoint(x,y,points));