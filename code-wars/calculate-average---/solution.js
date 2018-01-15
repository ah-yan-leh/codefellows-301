function find_average(array) {
	let arrL = array.length;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer) / arrL;

}