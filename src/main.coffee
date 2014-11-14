Alchemy::plugins.easyQuery = (instance) ->
  a: instance
  conf: instance.conf.plugins["easyQuery"]
  init: ->
    # Fill in blank settings with the defaults
    defaultSettings =
      "backend": instance.conf.backend

    @conf = _.defaults @conf, defaultSettings
    @backend = instance.plugins[@conf.backend]
    @buildDash()
 
  buildDash: ->
    # assign HTML
    d3.select "#easyQuery"
      .html """
              <div class='input-group form-control'>
                <div class="dropdown">
                  <select class="btn btn-default form-control" name="Queries" id="menu">
                  </select>
                </div>
                
                <input id="query" class='form-control' placeholder='search term'>
                <i id="querybtn" class='input-group-addon search-icon'>
                  <span class='fa fa-search fa-1x'></span>
                </i>
              </div>
            """
    debugger
    _.each _.keys(@backend.conf.query), (key)->
      d3.select "#menu"
        .append "option"
        .attr
          id: key
          value: key
        .html key

    # build event handler

    backend = @backend
    d3.select("#querybtn").on "click", ()->
      inp = d3.select("#query").node().value
      queryType = d3.select("#menu").node().value
      query = backend.buildQuery inp, queryType
      backend.runQuery query
