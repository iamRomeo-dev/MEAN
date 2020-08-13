module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      date: String,
      poids: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  //Collection de la base de données
  const Mvt = mongoose.model("mouvement", schema);
  return Mvt;
};