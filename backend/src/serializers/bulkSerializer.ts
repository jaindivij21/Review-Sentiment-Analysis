const fastJson = require("fast-json-stringify");

const bulkSerializer = (
  objects: any,
  serializerSchema: any
) => {
  const serializer = fastJson(serializerSchema);
  const serializedObjects = objects.map((object: any) =>
    JSON.parse(serializer(object))
  );
  return serializedObjects;
};

export default bulkSerializer;
