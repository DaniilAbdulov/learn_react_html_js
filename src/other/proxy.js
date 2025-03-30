const numbers = new Proxy([], {
    set(target, p, newValue, receiver) {
        if (newValue > 0) {
            Reflect.set(...arguments);
        } else {
            Reflect.set(target, p, 0);
        }
        return true;
    }
})

numbers.push(1);
numbers.push(-1);
numbers.push(-100);

console.log(numbers);