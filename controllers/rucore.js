const Class = require('../models/class');

module.exports = {


  load: async (req, res, next) => {
    res.render('rucore');
  },

  formSubmit: async (req, res, next) => {
    var cores = [];
    for (var key in req.body) {
      if (req.body.hasOwnProperty(key)) {
        if (req.body[key] == 'on') {
          cores.push(key);
        }
      }
    }

    var classes = [];

    if (cores.length == 1) {
      Class.find({
        coreCodes: {
          "$in": cores
        }
      }, function(err, classes) {
        var i;
        var times = [];
        for (i = 0; i < classes.length; i++) {
          console.log(classes[i].courseIndex);
          var c = {
            courseTitle: classes[i].courseTitle,
            courseIndex: classes[i].courseIndex,
            credits: classes[i].credits,
            coreCodes: classes[i].coreCodes
          };
          classes[i] = c;
        }
        res.render('classes', {
          cores: cores,
          classes: classes
        });
      })
    } else {
      Class.find({
        coreCodes: {
          "$all": cores
        }
      }, function(err, classes) {
        var i;
        var times = [];
        for (i = 0; i < classes.length; i++) {
          console.log(classes[i].courseIndex);
          var c = {
            courseTitle: classes[i].courseTitle,
            courseIndex: classes[i].courseIndex,
            credits: classes[i].credits,
            coreCodes: classes[i].coreCodes
          };
          classes[i] = c;
        }
        res.render('classes', {
          cores: cores,
          classes: classes
        });
      })
    }
  }
}
