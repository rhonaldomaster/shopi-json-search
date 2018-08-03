var searchCompletion = function (event) {
  var input = event.target;
  var text = input.value.trim();
  var searchList = $('.js-search-list');
  var regex = new RegExp("^[a-zA-Z0-9 ]+$");
  var code = !event.charCode ? event.which : event.charCode;
  var key = String.fromCharCode(code);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Disable key check for mobile
  } else if (!regex.test(key) && code !== 8 && code !== 46) {
    return;
  }
  searchProductsAndCategories(text, searchList);
};

var searchProductsAndCategories = function (query, resultsContainer) {
  if (query.length < 3) {
    resultsContainer.html('');
    return;
  }
  var ajax = $.ajax({
    type: 'GET',
    url: '/search',
    data: { q: '*' + query + '*', type: 'product', view: 'json' },
    dataType: 'json'
  });
  ajax.done(function (data) {
    var template = Handlebars.compile($('#search-results').html());
    resultsContainer.html(template(data));
  });
};

var searchFormIntercept = function (event) {
  event.preventDefault();
  searchProductsAndCategories($('.js-search-input').val().trim(), $('.js-search-list'));
};


// Add the events to the input and to the form submit
$(document)
  .on('keyup touchend', '.js-search-input', searchCompletion)
  .on('submit', '.js-search-form', searchFormIntercept);