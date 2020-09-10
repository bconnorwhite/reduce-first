
export default function reduceFirst<T>(array: T[], callback: (currentValue: T, index: number, array: T[]) => any) {
  return array.slice(0).reduce((retval, item, index, array) => {
    let value = callback(item, index, array);
    if(value !== undefined) {
      array.splice(1);
      return value;
    }
  }, undefined);
};
