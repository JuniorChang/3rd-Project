// import in caolan forms
const forms = require("forms");
// create some shortcuts
const fields = forms.fields;
const validators = forms.validators;

const createProductForm = (categories, countries, intensity) => {
  return forms.create({
    name: fields.string({
      required: true,
      errorAfterField: true,
      cssClasses: {
        label: ["form-label"],
      },
    }),
    cost: fields.string({
      required: true,
      errorAfterField: true,
      cssClasses: {
        label: ["form-label"],
      },
      validators: [validators.integer()],
    }),
    description: fields.string({
      required: true,
      errorAfterField: true,
      cssClasses: {
        label: ["form-label"],
      },
    }),
    category_id: fields.string({
      label: "Category",
      required: true,
      errorAfterField: true,
      cssClasses: {
        label: ["form-label"],
      },
      widget: widgets.select(),
      choices: categories
    }),
    country_id: fields.string({
      label:"Country",
      required:true,
      errorAfterField: true,
      cssClasses:{
        label:["form-label"],
      }
    }),
    intensity_id: fields.string({
      label:"Intensity",
      required:true,
      errorAfterField:true,
      cssClasses:{
        label:["form-label"],
      }
    })
  });
};

var bootstrapField = function (name, object) {
  if (!Array.isArray(object.widget.classes)) {
    object.widget.classes = [];
  }

  if (object.widget.classes.indexOf("form-control") === -1) {
    object.widget.classes.push("form-control");
  }

  var validationclass = object.value && !object.error ? "is-valid" : "";
  validationclass = object.error ? "is-invalid" : validationclass;
  if (validationclass) {
    object.widget.classes.push(validationclass);
  }

  var label = object.labelHTML(name);
  var error = object.error ?
    '<div class="invalid-feedback">' + object.error + "</div>" :
    "";

  var widget = object.widget.toHTML(name, object);
  return '<div class="form-group">' + label + widget + error + "</div>";
};



module.exports = {
  createProductForm,
  bootstrapField
};