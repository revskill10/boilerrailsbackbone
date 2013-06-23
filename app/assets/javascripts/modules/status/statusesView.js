define([
    'backbone'
], function(Backbone) {

    var StatusesView = Backbone.View.extend({        

        template: JST["status/statuses"],

        initialize: function(options) {
            this.collection.on("add", this.appendStatus, this);
        },

        appendStatus: function(status) {
            this.$('ul').append('<li>' + status.escape("text") + '</li>');
        },

        render: function(){
             this.$el.html(this.template);
        }
    });

    return StatusesView;

});