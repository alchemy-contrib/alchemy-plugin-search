easyQuery
=========

An easy to use plugin for querying neo4j without having to write cypher.

### using

~~~ js
  var conf = {
    dataSource: "...",
    plugins: {
        "neo4jBackend":{},
	"easyQuery":{}
    }
  }
~~~


### Custom Queries

~~~ js
      "easyQuery": {
          "queries":{
            "nodeType": "MATCH (n:###) RETURN n"
           }
       }
~~~

including a "queries" object in the "easyQuery" plugin configuration
The ### in the cypher string 
