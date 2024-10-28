/**returns the function created
 * @param {*} func function to be extended
 * @param {*} toAdd function to be added to func
 */
export function AddToFunctionBefore(func, toAdd){
    return function() {
        toAdd.apply(this, arguments);
        func.apply(this,arguments);
    };
}

export function AddToFunctionAfter(func, toAdd){
    return function() {
        func.apply(this,arguments);
        toAdd.apply(this,arguments);
    };
}