const log = console.log;

const map = (fn, iter) => {
    const result = [];
    for(const e of iter){
        result.push(fn(e))
    }
    return result;
}

const filter = (fn, iter) => {
    const result = [];
    for(const e of iter){
        if(fn(e)){
            result.push(e)
        }
    }
    return result;
}
