
export default function reduceFirst<T, U>(array: T[], callback: (currentValue: T, index: number, array: T[]) => U): U | undefined {
  for(let index=0; index < array.length; index++) {
    const value = callback(array[index], index, array);
    if(value !== undefined) {
      return value;
    }
  }
};
