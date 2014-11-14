(function() {
  Alchemy.prototype.plugins.easyQuery = function(instance) {
    return {
      a: instance,
      conf: instance.conf.plugins["easyQuery"],
      init: function() {
        var defaultSettings;
        defaultSettings = {
          "backend": instance.conf.backend
        };
        this.conf = _.defaults(this.conf, defaultSettings);
        this.backend = instance.plugins[this.conf.backend];
        return this.buildDash();
      },
      buildDash: function() {
        var backend;
        d3.select("#easyQuery").html("<div class='input-group form-control'>\n  <div class=\"dropdown\">\n    <select class=\"btn btn-default form-control\" name=\"Queries\" id=\"menu\">\n    </select>\n  </div>\n  \n  <input id=\"query\" class='form-control' placeholder='search term'>\n  <i id=\"querybtn\" class='input-group-addon search-icon'>\n    <span class='fa fa-search fa-1x'></span>\n  </i>\n</div>");
        _.each(_.keys(this.backend.conf.query), function(key) {
          return d3.select("#menu").append("option").attr({
            id: key,
            value: key
          }).html(key);
        });
        backend = this.backend;
        return d3.select("#querybtn").on("click", function() {
          var inp, query, queryType;
          inp = d3.select("#query").node().value;
          queryType = d3.select("#menu").node().value;
          query = backend.buildQuery(inp, queryType);
          return backend.runQuery(query);
        });
      }
    };
  };

}).call(this);
