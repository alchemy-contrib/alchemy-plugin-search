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
        var backend, submit;
        d3.select("#easyQuery").html("<form style=\"background-color:#000\">\n  <div class='input-group form-control' style=\"background-color:#000;border:none;\">\n      <select class=\"btn btn-default form-control\" name=\"Queries\" id=\"menu\" style=\"width:20%\">\n      </select>\n    <input id=\"query\" class='form-control pull-right' placeholder='query' style=\"width:80%\">\n    <i id=\"querybtn\" type=\"submit\" class='input-group-addon search-icon'>\n      <span class='fa fa-search fa-1x'></span>\n    </i>\n  </div>\n</form>");
        _.each(_.keys(this.backend.conf.query), function(key) {
          return d3.select("#menu").append("option").attr({
            id: key,
            value: key
          }).html(key);
        });
        backend = this.backend;
        submit = function() {
          var inp, query, queryType;
          d3.event.preventDefault();
          inp = d3.select("#query").node().value;
          queryType = d3.select("#menu").node().value;
          query = backend.buildQuery(inp, queryType);
          return backend.runQuery(query);
        };
        d3.select("#querybtn").on("click", function() {
          return submit();
        });
        return d3.selectAll("#easyQuery").on("submit", function() {
          return submit();
        });
      }
    };
  };

}).call(this);
