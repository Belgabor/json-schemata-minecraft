var path = require("path");
var fileUrl = require("file-url");

function schemaProvider() {
  return [
    {
      getSchemaURI: function(){return fileUrl(path.join(__dirname, "../schemata/AdvancedSpawnControl.json"));},
      getFilePattern: function(){return "AdvancedSpawnControl.json";}
    },
    {
      getSchemaURI: function(){return fileUrl(path.join(__dirname, "../schemata/QuadrumBlock.json"));},
      getFilePattern: function(){return "**/Quadrum/block/*.json";}
    },
    {
      getSchemaURI: function(){return fileUrl(path.join(__dirname, "../schemata/QuadrumItem.json"));},
      getFilePattern: function(){return "**/Quadrum/item/*.json";}
    },
    {
      getSchemaURI: function(){return fileUrl(path.join(__dirname, "../schemata/AccidentallyCircumstantialEvents.json"));},
      getFilePattern: function(){return "**/AccidentallyCircumstantialEvents/*.json";}
    },
    {
      getSchemaURI: function(){return fileUrl(path.join(__dirname, "../schemata/EMTOrders.json"));},
      getFilePattern: function(){return "**/AMTweaker/emt.json";}
    }
  ];
  /*
      ,
      {
        getSchemaURI: function(){return fileUrl(path.join(__dirname, '../schemata/Schema.json'));},
        getFilePattern: function(){return '** /schemata/*.json';}
      }*/
}

module.exports = {
  "schemaProvider": schemaProvider
};
