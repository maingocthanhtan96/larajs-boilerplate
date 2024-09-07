export const has = function (obj, key) {
  const keyParts = key.split('.');

  return (
    !!obj &&
    (keyParts.length > 1 ? has(obj[key.split('.')[0]], keyParts.slice(1).join('.')) : hasOwnProperty.call(obj, key))
  );
};
