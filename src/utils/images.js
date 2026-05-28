export const imageSource = (source) => {
  return Array.isArray(source) ? source[0] : source;
};

export const webpSource = (source) => {
  const src = imageSource(source);

  if (typeof src !== 'string') {
    return src;
  }

  return src.replace(/\.(jpe?g|png)$/i, '.webp');
};
