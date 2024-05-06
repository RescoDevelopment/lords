function flattern(arr: any[], res: any[] = []): any[] {
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    Array.isArray(cur) ? flattern(cur, res) : res.push(cur);
  }
  return res;
}

export default function flat(arr: any[]): any[] {
  return flattern(arr);
}
