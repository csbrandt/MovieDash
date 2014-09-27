/** @file main.js
 *  @fileOverview App.
 *  @author cs_brandt
 *  @date 09/26/2014
 */


/* global _ */
define(['require', 'handlebars', 'lodash', 'text!../../template/main.html', 'text!../../template/details.html', 'backbone', '../collection/UpcomingCollection', '../collection/InTheatersCollection'], function(require, Handlebars, _, mainTemplate, detailsTemplate, Backbone, UpcomingCollection, InTheatersCollection)
{
   "use strict";

   return Backbone.View.extend(
   {
      mainTemplate: mainTemplate,
      detailsTemplate: detailsTemplate,
      events:
      {

      },
      model: new Backbone.Model(),
      initialize: function(options)
      {
         this.options = options;

         this.upcomingCollection = new UpcomingCollection();
         this.inTheatersCollection = new InTheatersCollection();

         this.upcomingCollection.fetch();
         this.inTheatersCollection.fetch();

         this.upcomingCollection.on('sync', function(collection)
         {
            this.model.set('upcoming', collection.toJSON()[0].movies.splice(0, 10));
         }, this);

         this.inTheatersCollection.on('sync', function(collection)
         {
            this.model.set('inTheaters', collection.toJSON()[0].movies.splice(0, 10));
         }, this);

         this.model.on('change', this.render, this);
      },
      render: function(id)
      {
         var mainTemplate = Handlebars.compile(this.mainTemplate);
         this.$el.html(mainTemplate(this.model.toJSON()));
      },
      renderDetails: function(id)
      {
         var models = this.model.toJSON();
         var selected;
         var found;

         for (var object in models)
         {
            found = _.where(models[object],
            {
               id: id
            })[0];

            if (found)
            {
               selected = found;
            }
         }

         var detailsTemplate = Handlebars.compile(this.detailsTemplate);
         this.$el.html(detailsTemplate(selected));
      }

   });

});
