/**returns the function created
 * @param {*} func function to be extended
 * @param {*} toAdd function to be added to func
 */
function AddToFunctionBefore(func, toAdd){
    return function(arg1,arg2) {
        toAdd(arg1,arg2);
        func(arg1,arg2);
    }
}

function AddToFunctionAfter(func, toAdd){
    return function(arg1,arg2) {
        func(arg1,arg2);
        toAdd(arg1,arg2);
    }
}
