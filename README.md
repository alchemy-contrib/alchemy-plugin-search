easyQuery
=========

An easy Alchemy UI for querying local databases.

### use

Include the script in `dist/` and set up your alchemy configuration like this:
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
