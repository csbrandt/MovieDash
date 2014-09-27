/** @file InTheatersCollection.js
 *  @fileOverview
 *  @author cs_brandt
 *  @date 09/26/2014
 */


define(['require', 'backbone'], function(require, Backbone)
{
   "use strict";

   var InTheatersCollection = Backbone.Collection.extend(
   {
      url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=anze8c64vmxshreyrszfrtcf',
      sync: function(method, model, options)
      {
         options.dataType = "jsonp";
         return Backbone.sync(method, model, options);
      }

   });

   return InTheatersCollection;

});
