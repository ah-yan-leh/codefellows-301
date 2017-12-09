'use strict';

let articles = [];

function Article (rawDataObj) {
  for (let key in rawDataObj) {
    this[key] = rawDataObj[key];
  }
}

Article.prototype.toHtml = function() {
  // TODO: Use Handlebars to render your articles. Get your template from the DOM and "compile" your template with Handlebars.
  // 1. Get the template from the HTML document
  let template = $('#articles-template').html();
  // 2. Use Handlebars to "compile" the HTML, returns a function
  let templateRender = Handlebars.compile(template);
  // 3. Do not forget to return the HTML from this method
  // REVIEW: If your template will use properties that aren't on the object yet, add them.
  // Since your template can't hold any JS logic, we need to execute the logic here.
  // The result is added to the object as a new property, which can then be referenced by key in the template.
  // For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);


  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  // REVIEW: The ternary operator above accomplishes this same logic.
  // if(this.publishedOn) {
  //   this.publishStatus = `published ${this.daysAgo} days ago`;
  // } else {
  //   this.publishStatus = '(draft)';
  // }

  // TODO: Use the method that Handlebars gave you to return your filled-in html template for THIS article.

  return templateRender(this);
};

// COMMENT: Why are there parentheses around "(a,b)" in the .sort() method, but not around the "articleObject" or "article" arguments in the .forEach() methods?
// PUT YOUR RESPONSE HERE: Anytime you pass in more than 1 argument, you need to use paranthesis.
rawData.sort((a,b) => {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(articleObject => {
  articles.push(new Article(articleObject));
});

articles.forEach(article => {
  $('#blog').append(article.toHtml());
});
