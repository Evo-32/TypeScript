function process(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value * 2;
    }
}
console.log(process(5));
console.log(process('Hello'));
