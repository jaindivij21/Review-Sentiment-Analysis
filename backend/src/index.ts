import app from "./app";

BigInt.prototype["toString"] = function () {
  return this.toString();
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running");
});
