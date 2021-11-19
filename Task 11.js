//=============================================
// ------------------------------------ TASK №1
//=============================================
const cache = (func) => {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        let comp = cache.hasOwnProperty(key);
        if (comp) {
            return cache[key];
        } else {
            cache[key] = func.apply(null, arguments);
            return cache[key];
        }
    };
}

//=============================================
// ------------------------------------ TASK №2
//=============================================
const forwardBackwardSteps = {
    step: 0,
    forward() {
        this.step++;
        return this;
    },
    backward() {
        this.step--;
        return this;
    },
    revealStep() {
        console.log(this.step);
        return this;
    }
};

//=============================================
// ------------------------------------ TASK №3
//=============================================
const applyAll = (func, ...values) => {
    return func(...values);
}
const sum = (...args) => {
    return args.reduce((acc, val) => acc + val);
}

const mul = (...args) => {
    return args.reduce((acc, val) => acc * val);
}

//=============================================


