export default function stripObjectProperty(object, property) {
    return Object.keys(object).reduce((result, key) => {
        if(key !== property) {
            result[key] = object[key];
        }
        return result;
    }, {});
}
