# How to use
* Create your search form
```
    <form action="/search" method="get" role="search" class="js-search-form">
      <div class="relative">
        <input type="hidden" name="type" value="product">
        <input type="search" name="q" id="Search" class="js-search-input" value="{{ search.terms | escape }}" placeholder="{{ 'general.search.placeholder' | t }}"autocomplete="off" required>
        <button type="submit">{{ 'general.search.submit' | t }}</button>
        <div class="js-search-list"></div>
      </div>
    </form>
```

* Attach the events

  See [index.js](index.js)

  This code uses [jQuery](https://jquery.com/), but you can modify it and use the library you want

* Add the handlebars template

  See [handlebar-templates.liquid](handlebar-templates.liquid)

  This requires [handlebars.js](http://handlebarsjs.com/)

* Add the [search.json](search.json) file

* Add the styles you want :)