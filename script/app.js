/** @file app.js
 *  @fileOverview App initialization.
 *  @author cs_brandt
 *  @date 09/26/2014
 */


define(['require', 'router', 'backbone'], function(require, AppRouter, Backbone)
{
   "use strict";

   return {
      initialize: function()
      {
         var appRouter = new AppRouter();

         Backbone.history.start();
      }
   };
});
