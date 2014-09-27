/** @file config.js
 *  @fileOverview Program driver.
 *  @author cs_brandt
 *  @date 09/26/2014
 */
require.config(
{
   paths:
   {
      jquery: '../bower_components/jquery/dist/jquery',
      handlebars: '../bower_components/handlebars/handlebars',
      text: '../bower_components/requirejs-text/text',
      backbone: '../bower_components/backbone/backbone',
      lodash: '../bower_components/lodash/dist/lodash'
   },
   shim:
   {
      backbone:
      {
         exports: 'Backbone',
         deps: ['jquery', 'underscore']
      }
   },
   map:
   {
      '*':
      {
         'Handlebars': 'handlebars',
         'underscore': 'lodash',
         'jQuery': 'jquery'
      }
   }

});

require(['app', 'backbone'], function(app)
{
   $(function()
   {
      app.initialize();
   });
});
