define([
    'backbone'
], function(Backbone) {

    var NewStatusView = Backbone.View.extend({  

        template: JST["status/newStatusView"],
        events: {
            "submit form": "addStatus"
        },

        initialize: function(options) {
            this.collection.on("add", this.clearInput, this);
        },

        addStatus: function(e) {
            e.preventDefault();

            this.collection.create({ text: this.$('textarea').val() });
        },

        clearInput: function() {
            this.$('textarea').val('');
        },
        render: function(){
            this.$el.html(this.template);
        }
    });

    return NewStatusView;

});