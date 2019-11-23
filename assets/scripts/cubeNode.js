import {
    _decorator,
    Component,
    Node,
    Texture2D,
    Vec3,
    tweenUtil,
    Material,
    ModelComponent
} from "cc";
import {
    planeNode
} from "./planeNode";
const {
    ccclass,
    property
} = _decorator;

@ccclass("cubeNode")
export class cubeNode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    @property
    index = 0;

    @property([cc.Material])
    materialsUp = [];
    @property([cc.Material])
    materialsDown = [];

    _scale = new Vec3(0, 0, 0);
    _pos = new Vec3(0, 0, 0);

    start() {

    }

    init(index, flag) {
        this.index = index;
        if (flag < 0) {
            this.type = Math.abs(flag);
            this.node.scale = new Vec3(0.8, 0.4, 0.8);
            this.node.position = new Vec3(this.node.position.x, 0.2, this.node.position.z);
            this.node.getComponent(ModelComponent).material = this.materialsDown[this.type-1];
        } else {
            this.type = Math.abs(flag);
            //this.node.scale = new Vec3(0.9, 0.45, 0.9);
            this.node.getComponent(ModelComponent).material = this.materialsUp[this.type-1];
        }
        window.Notification.on('changeSideNode', this.changeSideNode, this);
       // console.log('==============this.index', this.index);
    }

    changeSideNode(index, type) {
       // console.log('-----------index----', index, type);
        if(type == 1){
            if (Math.abs(this.index - index) == 1) {
                if (Math.floor(this.index / window.x_length) == Math.floor(index / window.x_length)) {
                    this.changeScale(false);
                }
            } else if (Math.abs(this.index - index) == window.x_length) {
                this.changeScale(false);
            }
        }else if(type == 2){
            if (Math.abs(this.index - index) == 1) {
                if (Math.floor(this.index / window.x_length) == Math.floor(index / window.x_length)) {
                    this.changeScale(false);
                }
            }
        }else if(type == 3){
            if (Math.abs(this.index - index) == window.x_length) {
                this.changeScale(false);
            }
        }
    }

    onDestroy() {
        this.node.scale = 0.8;
        this.index = 0;
        window.Notification.targetOff(this);
        //this.node.getComponent(ModelComponent).material = this.materials[0];
    }

    changeScale(flag = true) {
        _player_State.canClick = false;
       // console.log('==============开始动画', this.index);
        // if(flag){
        //     this.scheduleOnce(function(){
        //         window.Notification.emit('changeSideNode', this.index);
        //     }, 0.1);
        // }
        let endScaleY = 0.4;
        if (this.node.scale.y == 0.4) {
            endScaleY = 0.8;
            _player_State.complateCount--;
            //this.node.parent.getComponent(planeNode).changeComplate(-1);
            this.node.getComponent(ModelComponent).material = this.materialsUp[this.type-1];
        } else if (this.node.scale.y == 0.8) {
            endScaleY = 0.4;
            _player_State.complateCount++;
            //this.node.parent.getComponent(planeNode).changeComplate(1);
            this.node.getComponent(ModelComponent).material = this.materialsDown[this.type-1];
        }
        Vec3.copy(this._scale, this.node.scale);
        Vec3.copy(this._pos, this.node.position);
        tweenUtil(this._scale)
            .to(0.1, new Vec3(this._scale.x, endScaleY, this._scale.z), {
                easing: 'Bounce-InOut',
                onUpdate: () => {
                    this.node.scale = this._scale;
                }
            })
            .call(() => {
                //缓动结束回调
                if (flag) window.Notification.emit('changeSideNode', this.index, this.type);
                _player_State.canClick = true;
                this.node.parent.getComponent(planeNode).changeComplate(-1);
            })
            .union()
            .repeat(1)
            .start();

        tweenUtil(this._pos)
            .to(0.1, new Vec3(this._pos.x, endScaleY / 2, this._pos.z), {
                easing: 'Bounce-InOut',
                onUpdate: () => {
                    this.node.position = this._pos;
                }
            })
            .union()
            .repeat(1)
            .start();
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}