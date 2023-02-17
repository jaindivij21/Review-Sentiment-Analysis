const customerSchema = {
  title: "Customer",
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
};

export default customerSchema;
