export type objectToTransform= {
  [key: string]: string[];
};

export type TransformedObject = {
  [key: string]: string;
};
export const transformObject = (obj:objectToTransform) => {
  const transformedobj:TransformedObject = {};

  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      transformedobj[key] = obj[key][0];
    } else {
      transformedobj[key] = "";
    }
  }

  return transformedobj;
};