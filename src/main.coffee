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
            <form style="background-color:#000">
              <div class='input-group form-control' style="background-color:#000;border:none;">
                  <select class="btn btn-default form-control" name="Queries" id="menu" style="width:20%">
                  </select>
                <input id="query" class='form-control pull-right' placeholder='query' style="width:80%">
                <i id="querybtn" type="submit" class='input-group-addon search-icon'>
                  <span class='fa fa-search fa-1x'></span>
                </i>
              </div>
            </form>
            """
    
    _.each _.keys(@backend.conf.query), (key)->
      d3.select "#menu"
        .append "option"
        .attr
          id: key
          value: key
        .html key

    # build event handler

    backend = @backend
    submit = ()->
      d3.event.preventDefault()
      inp = d3.select("#query").node().value
      queryType = d3.select("#menu").node().value
      query = backend.buildQuery inp, queryType
      backend.runQuery query

    d3.select("#querybtn").on "click",     ()-> submit()
    d3.selectAll("#easyQuery").on "submit", ()-> submit()

