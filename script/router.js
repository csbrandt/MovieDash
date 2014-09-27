/** @file router.js
 *  @fileOverview
 *  @author cs_brandt
 *  @date 09/26/2014
 */


define(['require', 'view/main'], function(require, MainView)
{
   "use strict";

   var appRouter = Backbone.Router.extend(
   {
      routes:
      {
         '': 'index',
         'details/:id': 'details',

      },
      initialize: function()
      {
         this.mainView = new MainView(
         {
            el: 'body'
         });
      },
      index: function()
      {
         this.mainView.render();
      },
      details: function(id)
      {
         this.mainView.model.on("change", this.mainView.renderDetails(id), this);
         this.mainView.renderDetails(id);
      }

   });

   return appRouter;

});
