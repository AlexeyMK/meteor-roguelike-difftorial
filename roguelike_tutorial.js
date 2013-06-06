BOARDSIZE = {x: 40, y: 20};

if (Meteor.isClient) {
  // Create a few helper functions for the 'world_grid' template we defined in the html file.
  Template.world_grid.helpers({
    // we want to iterate over every cell in our table so we can draw each one,
    // and we're using eachRow/eachCell to do so.
    // eachRow and eachCell return [0,1,2...n] and give us something to iterate over.
    eachRow: function() {
      return _.range(BOARDSIZE.y);
    },
    eachCell: function() {
      return _.range(BOARDSIZE.x);
    }
  });
}
