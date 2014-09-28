// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 *  
 *
 * @type {string}
 */

var courseGenerator = {
  /**
   * Flickr URL that will give us lots and lots of whatever we're looking for.
   *
   * See https://api.mongolab.com/api/1/databases/edupal/collections/syllabus?q={%22catalogId%22:%22ECON311%22}&apiKey=Lv1KkBhZIYBQc2qTRVQ_Pyi8pUoDwcQ6 for
   * details about the construction of this URL.
   *
   * @type {string}
   * @private
   */
  searchOnMongo_: 'https://api.mongolab.com/api/1/databases/edupal/collections/syllabus?' +
  'q={%22catalogId%22:%22ECON311%22}&' +
  'apiKey=Lv1KkBhZIYBQc2qTRVQ_Pyi8pUoDwcQ6',
  

  /**
   * Sends an XHR GET request to grab exams. The
   * XHR's 'onload' event is hooks up to the 'showDuedates_' method.
   *
   * @public
   */
  requestExam: function() {
    var req = new XMLHttpRequest();
    req.open("GET", this.searchOnMongo_, true);
    req.onload = this.showDuedates_.bind(this);
    req.send(null);  },

  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showDuedates_: function (e) {
    var exams = e.exam;
    for (var i = 0; i < exam.length; i++) {
      var header = document.createElement('h1');
      header.innerHTML = exams [i].name;
      document.body.appendChild(header);
    }
  },

  /**
   * Given a photo, construct a URL using the method outlined at
   * http://www.flickr.com/services/api/misc.urlKittenl
   *
   * @param {DOMElement} A kitten.
   * @return {string} The kitten's URL.
   * @private
   */
  /*constructKittenURL_: function (photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
};*/

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  courseGenerator.requestExam();
});
