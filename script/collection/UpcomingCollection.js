/** @file UpcomingCollection.js
 *  @fileOverview
 *  @author cs_brandt
 *  @date 09/26/2014
 */


define(['require', 'backbone'], function(require, Backbone)
{
   "use strict";

   var UpcomingCollection = Backbone.Collection.extend(
   {
      url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=anze8c64vmxshreyrszfrtcf',
      sync: function(method, model, options)
      {
         options.dataType = "jsonp";
         return Backbone.sync(method, model, options);
      }

   });

   return UpcomingCollection;

});
