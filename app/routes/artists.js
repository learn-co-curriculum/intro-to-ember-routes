import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      Ember.Object.create({name: "Kanye West"}),
      Ember.Object.create({name: "Lady Gaga"})
    ];
  },
  actions: {
    addArtist(artistName){
      var model = this.modelFor(this.routeName);
      var newArtist = Ember.Object.create({name: artistName});
      model.pushObject(newArtist);
      // Super Double Bonus Grand Prize
      this.controllerFor(this.routeName).set('artistName', "");
    }
  }
});
