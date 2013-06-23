# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
//= require handlebars
//= require_tree ./templates


require ['jquery', 'backbone', 'modules/status/statuses',
    'modules/status/newStatusView', 'modules/status/statusesView'], ($, Backbone, Statuses, NewStatusView, StatusesView) ->
		
        $ ->
             statuses = new Statuses();
             nsv = new NewStatusView({ el: $('#new-status'), collection: statuses });
             nsv.render();
             stv = new StatusesView({ el: $('#statuses'), collection: statuses });
             stv.render();