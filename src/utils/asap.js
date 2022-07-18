// jest helper
// https://github.com/callstack/react-native-testing-library/issues/379

const nodePromise = Promise;

module.exports = (r) => nodePromise.resolve().then(r);
