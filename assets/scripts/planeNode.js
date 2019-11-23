import {
    _decorator,
    Component,
    Node
} from "cc";
const {
    ccclass,
    property
} = _decorator;
import {
    cubeNode
} from "./cubeNode";
@ccclass("planeNode")
export class planeNode extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property([cc.Prefab])
    cubeNode_0 = null;

    start() {
        // Your initialization goes here.
        window.Notification = new cc.EventTarget();
        var levelIndex = cc.sys.localStorage.getItem('levelIndex');
        if (levelIndex) _player_State.levelIndex = levelIndex;
        //_player_State.levelIndex = 0;
        this.initLevelData();
    }

    initLevelData() {
        // let node = instantiate(this.cubeNode_0);
        // node.parent = this.node.parent;
        // node.position = this.node.position;
        //levelData
        _player_State.isPassLevel = false;
        _player_State.complateCount = 0;
        this.complateCount = 0;
        this.childArr = [];
        //_player_State.levelIndex = 20;
        console.log('--------------initLevelData', _player_State.levelIndex);
        let levelData = window.levelData['level_'+_player_State.levelIndex];
        let x_mid = Math.floor(levelData[0].length/2);
        window.x_length = levelData[0].length;
        let y_mid = Math.floor(levelData.length/2);
        for (let i = 0; i < levelData.length; i++) {
            for (let j = 0; j < levelData[i].length; j++) {
                if (levelData[i][j] != 0) {
                    let x = j - x_mid;
                    let z = i - y_mid;
                    let index = i * x_length + j;
                    let node = cc.instantiate(this.cubeNode_0);
                    node.parent = this.node;
                    node.position = new cc.v3(x, 0.4, z);
                    node.getComponent(cubeNode).init(index, levelData[i][j]);
                    this.childArr.push(node);
                    if(levelData[i][j] < 0){
                        //this.complateCount++;
                        _player_State.complateCount ++;
                    }
                }
            }
        }
    }

    changeComplate(num){
        this.complateCount += num;
        if(_player_State.complateCount >= this.childArr.length && !_player_State.isPassLevel){
            console.log('--------------过关', _player_State.levelIndex);
            _player_State.levelIndex++;
            if(_player_State.levelIndex >= 29)_player_State.levelIndex = 8 + Math.floor(Math.random()*21);
           this.scheduleOnce(this.removeChildArr, 1);
           _player_State.isPassLevel = true;
           cc.sys.localStorage.setItem('levelIndex', _player_State.levelIndex);
           window.Notification.emit('passLevel');
        }
    }

    removeChildArr(){
        for(let i = 0; i < this.childArr.length; i++){
            this.childArr[i].destroy();
            this.childArr[i] = null;
        }
        console.log('-----------清理完成');
        this.initLevelData();
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}