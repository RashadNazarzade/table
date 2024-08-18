export default function extractDataFunctionOrRecord<T, U>(
    fn: ((arg: U) => T) | T | undefined,
    arg: U,
): T | undefined {
    if (fn instanceof Function) fn(arg);

    return fn as T;
}
