Alchemy-Plugin-Search
=========

A drop in search UI for Alchemy.js, allowing non-technical users to query without having to write code.

### Usage

Include the`dist/alchemy-plugin-search.js` in your web page **after** the alchemy.js script.  

~~~ html
<script src="path/to/alchemy.js"></script>
<script src="path/to/alchemy-plugin-search.js"></script>
~~~

Set up your alchemy configuration like this:

~~~ js
conf =   
  {
    ...
    plugins: {
      ...
      search: {},
      ...
    }
    ...
  }

alchemyInstance = new Alchemy(conf);
~~~

alchemy-search-plugin is meant to work with alchemy backends.  For instance the (neo4jBackend)[http://www.github.com/alchemy-contrib/alchemy-plugin-neo4jBackend].

By default, the search plugin detects any possible queries for the defined `backend`, and allows the user to run those queries.  Take a look at the examples or the (neo4jBackend)[http://www.github.com/alchemy-contrib/alchemy-plugin-neo4jBackend] for more on how to use multiple queries to read or write to the data base.

For an example of an application like this, check out the examples, folder, or the [gh-pages](alchemy-contrib.github.io/alchemy-plugin-search) for this repo.
