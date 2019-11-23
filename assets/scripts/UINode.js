import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("UINode")
export class UINode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property([cc.Node])
    passTipNode = null;

    @property([cc.Node])
    tipNode = null;

    start () {
        // Your initialization goes here.
        this.passTipNode.active = false;
        if(_player_State.levelIndex < 5){
            this.tipNode.active = true;
        }else{
            this.tipNode.active = false;
        }
        window.Notification.on('passLevel', this.passLevel, this);
    }

    passLevel(){
        this.passTipNode.active = true;
        this.scheduleOnce(function(){
            this.passTipNode.active = false;
        }, 1.5);
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}
