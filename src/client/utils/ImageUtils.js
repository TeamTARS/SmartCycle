const BASE64_FLAG = "data:image/png;base64,";

const arrayBufferToBase64 = buffer => {
  let binary = "";
  const bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach(b => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

/**
 * Convert array buffer retrieved from db into base64 which can be shown in UI
 * @param  buffer: array buffer retrieved from db
 */
export const retrieveImageFromArrayBuffer = buffer => {
  const imageStr = arrayBufferToBase64(buffer);
  return BASE64_FLAG + imageStr;
};
