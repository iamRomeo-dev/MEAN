module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      date: String,
      categorie: String,
      niveau: String,
      description: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  //Collection de la base de données
  const Wod = mongoose.model("wod", schema);
  return Wod;
};