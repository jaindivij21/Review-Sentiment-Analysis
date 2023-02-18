const fastJson = require("fast-json-stringify");

const objectSerializer = (
  object: any,
  serializerSchema: any
) => {
  const stringify = fastJson(serializerSchema);

  return JSON.parse(stringify(object));
};

export default objectSerializer;
