cc.Class({
    extends: cc.Component,

    // properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // start () {},

    // update (dt) {},
    
    init:function(game){
        this.game = game;
    },

    delBorn: function () {
        this.game.delBorn(this.node);
        // console.log(this.game);
        
    }
});
