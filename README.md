easyQuery
=========

An easy Alchemy UI for querying local databases.

### Use

Using easy query is simple:
The drop down menu on the left has prebuilt cypher queries that you can choose from.  To create your own custom queries, see the (neo4jBackend documentation.)[http://www.github.com/alchemy-contrib/alchemy-plugin-neo4jBackend]

After you've selected your query, input your search terms in the bar and hit enter.  It will query your database and return all nodes and edges as defined by the generated cypher query.

All arguments (for searches requiring multiple search parameters) are seperated by commas.

for example:

Choosing `nodeProp` (a default cypher template included with the neo4jBackend) will allow you to input `firstName, Joe` and will return all nodes with a property "firstName" with the value of "Joe".

### Installation

Include the script in `dist/` after the inclusion of Alchemy.js and set up your alchemy configuration like this:

~~~ js
  {
    ...
    plugins: {
      ...
      easyQuery: {},
      ...
    }
    ...
  }
~~~

Include a div with the ID `easyQuery` for the plugin to build it's interface in.

For easyQuery to work you also need to include a backend plugin such as the (neo4jBackend)[http://www.github.com/alchemy-contrib/alchemy-plugin-neo4jBackend] .

### configuration

Currently no configuration is needed if you have loaded a backend plugin.
If you have loaded multiple backends and wish to load one specifically, that can be set by adding the "backend" key to the configuration.

--- js

{
  ...
  plugins: {
    neo4jBackend: {
	...
    },

    easyQuery: {
      backend: "neo4jBackend"
    }
  }
}
---
