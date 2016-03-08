Common = {

  getFormObject: function(form) {
    var obj = {};

    $.each($(form).serializeArray(), function(index, item) {
      obj[item.name] = item.value;
    });

    return obj;
  }
};
