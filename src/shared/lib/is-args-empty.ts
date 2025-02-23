export default function isArgsEmpty(obj: {
  _: any[];
  [key: string]: any;
}): boolean {
  if (obj._.length === 0) {
    for (const key in obj) {
      if (key !== "_") {
        const value = obj[key];
        if (
          value !== false &&
          value !== undefined && // Explicitly check for undefined
          value !== null && // Explicitly check for null
          (typeof value !== "string" || value !== "") && // Check for empty string
          (!Array.isArray(value) || value.length !== 0) && // Check for empty array
          (typeof value !== "object" ||
            value === null ||
            Object.keys(value).length !== 0) // Check for empty object (handle null as well)
        ) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
}
