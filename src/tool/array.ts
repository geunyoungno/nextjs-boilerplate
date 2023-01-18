export function first(val: string | string[] | undefined) {
  if (val == null) {
    return undefined;
  }

  if (Array.isArray(val)) {
    return val.slice(0, 1);
  }

  return val;
}

export function last(val: string | string[] | undefined) {
  if (val === null) {
    return undefined;
  }

  if (Array.isArray(val)) {
    return val.slice(-1);
  }

  return val;
}
