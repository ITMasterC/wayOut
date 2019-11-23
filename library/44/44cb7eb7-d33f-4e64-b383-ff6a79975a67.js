"use strict";

System.register(["cc", "./cubeNode.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, cubeNode, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, planeNode;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_cubeNodeJs) {
      cubeNode = _cubeNodeJs.cubeNode;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "44cb7630z9OZLOD/2p5l1pn", "planeNode"); // begin planeNode


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("planeNode", planeNode = (_dec = ccclass("planeNode"), _dec2 = property([cc.Prefab]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(planeNode, _Component);

        function planeNode() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, planeNode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(planeNode)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "cubeNode_0", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(planeNode, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            window.Notification = new cc.EventTarget();
            var levelIndex = cc.sys.localStorage.getItem('levelIndex');
            if (levelIndex) _player_State.levelIndex = levelIndex; //_player_State.levelIndex = 0;

            this.initLevelData();
          }
        }, {
          key: "initLevelData",
          value: function initLevelData() {
            // let node = instantiate(this.cubeNode_0);
            // node.parent = this.node.parent;
            // node.position = this.node.position;
            //levelData
            _player_State.isPassLevel = false;
            _player_State.complateCount = 0;
            this.complateCount = 0;
            this.childArr = []; //_player_State.levelIndex = 20;

            console.log('--------------initLevelData', _player_State.levelIndex);
            var levelData = window.levelData['level_' + _player_State.levelIndex];
            var x_mid = Math.floor(levelData[0].length / 2);
            window.x_length = levelData[0].length;
            var y_mid = Math.floor(levelData.length / 2);

            for (var i = 0; i < levelData.length; i++) {
              for (var j = 0; j < levelData[i].length; j++) {
                if (levelData[i][j] != 0) {
                  var x = j - x_mid;
                  var z = i - y_mid;
                  var index = i * x_length + j;
                  var node = cc.instantiate(this.cubeNode_0);
                  node.parent = this.node;
                  node.position = new cc.v3(x, 0.4, z);
                  node.getComponent(cubeNode).init(index, levelData[i][j]);
                  this.childArr.push(node);

                  if (levelData[i][j] < 0) {
                    //this.complateCount++;
                    _player_State.complateCount++;
                  }
                }
              }
            }
          }
        }, {
          key: "changeComplate",
          value: function changeComplate(num) {
            this.complateCount += num;

            if (_player_State.complateCount >= this.childArr.length && !_player_State.isPassLevel) {
              console.log('--------------过关', _player_State.levelIndex);
              _player_State.levelIndex++;
              if (_player_State.levelIndex >= 29) _player_State.levelIndex = 8 + Math.floor(Math.random() * 21);
              this.scheduleOnce(this.removeChildArr, 1);
              _player_State.isPassLevel = true;
              cc.sys.localStorage.setItem('levelIndex', _player_State.levelIndex);
              window.Notification.emit('passLevel');
            }
          }
        }, {
          key: "removeChildArr",
          value: function removeChildArr() {
            for (var i = 0; i < this.childArr.length; i++) {
              this.childArr[i].destroy();
              this.childArr[i] = null;
            }

            console.log('-----------清理完成');
            this.initLevelData();
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return planeNode;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cubeNode_0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end planeNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvcGxhbmVOb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjdWJlTm9kZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInBsYW5lTm9kZSIsImNjIiwiUHJlZmFiIiwid2luZG93IiwiTm90aWZpY2F0aW9uIiwiRXZlbnRUYXJnZXQiLCJsZXZlbEluZGV4Iiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9wbGF5ZXJfU3RhdGUiLCJpbml0TGV2ZWxEYXRhIiwiaXNQYXNzTGV2ZWwiLCJjb21wbGF0ZUNvdW50IiwiY2hpbGRBcnIiLCJjb25zb2xlIiwibG9nIiwibGV2ZWxEYXRhIiwieF9taWQiLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJ4X2xlbmd0aCIsInlfbWlkIiwiaSIsImoiLCJ4IiwieiIsImluZGV4Iiwibm9kZSIsImluc3RhbnRpYXRlIiwiY3ViZU5vZGVfMCIsInBhcmVudCIsInBvc2l0aW9uIiwidjMiLCJnZXRDb21wb25lbnQiLCJpbml0IiwicHVzaCIsIm51bSIsInJhbmRvbSIsInNjaGVkdWxlT25jZSIsInJlbW92ZUNoaWxkQXJyIiwic2V0SXRlbSIsImVtaXQiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDSUEsTUFBQUEsVSxPQUFBQSxVO0FBQ0FDLE1BQUFBLFMsT0FBQUEsUzs7QUFRQUMsTUFBQUEsUSxlQUFBQSxROzs7Z0ZBUnFFOzs7QUFJckVDLE1BQUFBLE8sR0FFQUgsVSxDQUZBRyxPO0FBQ0FDLE1BQUFBLFEsR0FDQUosVSxDQURBSSxROzsyQkFNU0MsUyxXQURaRixPQUFPLENBQUMsV0FBRCxDLFVBUUhDLFFBQVEsQ0FBQyxDQUFDRSxFQUFFLENBQUNDLE1BQUosQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHRDtBQUNKO0FBQ0FDLFlBQUFBLE1BQU0sQ0FBQ0MsWUFBUCxHQUFzQixJQUFJSCxF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a0JBQVosRUFBZ0NOLGFBQWEsQ0FBQ0osVUFBOUM7QUFDQUksY0FBQUEsYUFBYSxDQUFDSixVQUFkO0FBQ0Esa0JBQUdJLGFBQWEsQ0FBQ0osVUFBZCxJQUE0QixFQUEvQixFQUFrQ0ksYUFBYSxDQUFDSixVQUFkLEdBQTJCLElBQUlhLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNvQixNQUFMLEtBQWMsRUFBekIsQ0FBL0I7QUFDbkMsbUJBQUtDLFlBQUwsQ0FBa0IsS0FBS0MsY0FBdkIsRUFBdUMsQ0FBdkM7QUFDQS9CLGNBQUFBLGFBQWEsQ0FBQ0UsV0FBZCxHQUE0QixJQUE1QjtBQUNBWCxjQUFBQSxFQUFFLENBQUNNLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmtDLE9BQXBCLENBQTRCLFlBQTVCLEVBQTBDaEMsYUFBYSxDQUFDSixVQUF4RDtBQUNBSCxjQUFBQSxNQUFNLENBQUNDLFlBQVAsQ0FBb0J1QyxJQUFwQixDQUF5QixXQUF6QjtBQUNGO0FBQ0o7OzsyQ0FFZTtBQUNaLGlCQUFJLElBQUluQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS1YsUUFBTCxDQUFjTyxNQUFqQyxFQUF5Q0csQ0FBQyxFQUExQyxFQUE2QztBQUN6QyxtQkFBS1YsUUFBTCxDQUFjVSxDQUFkLEVBQWlCb0IsT0FBakI7QUFDQSxtQkFBSzlCLFFBQUwsQ0FBY1UsQ0FBZCxJQUFtQixJQUFuQjtBQUNIOztBQUNEVCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLGlCQUFLTCxhQUFMO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7OztRQTlFMkJmLFM7Ozs7O2lCQVFkLEk7Ozs7b0JBbkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIF9kZWNvcmF0b3IsXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBOb2RlXHJcbn0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHtcclxuICAgIGNjY2xhc3MsXHJcbiAgICBwcm9wZXJ0eVxyXG59ID0gX2RlY29yYXRvcjtcclxuaW1wb3J0IHtcclxuICAgIGN1YmVOb2RlXHJcbn0gZnJvbSBcIi4vY3ViZU5vZGVcIjtcclxuQGNjY2xhc3MoXCJwbGFuZU5vZGVcIilcclxuZXhwb3J0IGNsYXNzIHBsYW5lTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXHJcbiAgICBjdWJlTm9kZV8wID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICAgICAgdmFyIGxldmVsSW5kZXggPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xldmVsSW5kZXgnKTtcclxuICAgICAgICBpZiAobGV2ZWxJbmRleCkgX3BsYXllcl9TdGF0ZS5sZXZlbEluZGV4ID0gbGV2ZWxJbmRleDtcclxuICAgICAgICAvL19wbGF5ZXJfU3RhdGUubGV2ZWxJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5pbml0TGV2ZWxEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdExldmVsRGF0YSgpIHtcclxuICAgICAgICAvLyBsZXQgbm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuY3ViZU5vZGVfMCk7XHJcbiAgICAgICAgLy8gbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xyXG4gICAgICAgIC8vIG5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcbiAgICAgICAgLy9sZXZlbERhdGFcclxuICAgICAgICBfcGxheWVyX1N0YXRlLmlzUGFzc0xldmVsID0gZmFsc2U7XHJcbiAgICAgICAgX3BsYXllcl9TdGF0ZS5jb21wbGF0ZUNvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmNvbXBsYXRlQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuY2hpbGRBcnIgPSBbXTtcclxuICAgICAgICAvL19wbGF5ZXJfU3RhdGUubGV2ZWxJbmRleCA9IDIwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLWluaXRMZXZlbERhdGEnLCBfcGxheWVyX1N0YXRlLmxldmVsSW5kZXgpO1xyXG4gICAgICAgIGxldCBsZXZlbERhdGEgPSB3aW5kb3cubGV2ZWxEYXRhWydsZXZlbF8nK19wbGF5ZXJfU3RhdGUubGV2ZWxJbmRleF07XHJcbiAgICAgICAgbGV0IHhfbWlkID0gTWF0aC5mbG9vcihsZXZlbERhdGFbMF0ubGVuZ3RoLzIpO1xyXG4gICAgICAgIHdpbmRvdy54X2xlbmd0aCA9IGxldmVsRGF0YVswXS5sZW5ndGg7XHJcbiAgICAgICAgbGV0IHlfbWlkID0gTWF0aC5mbG9vcihsZXZlbERhdGEubGVuZ3RoLzIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGV2ZWxEYXRhW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGV2ZWxEYXRhW2ldW2pdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGogLSB4X21pZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeiA9IGkgLSB5X21pZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpICogeF9sZW5ndGggKyBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5jdWJlTm9kZV8wKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gbmV3IGNjLnYzKHgsIDAuNCwgeik7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY3ViZU5vZGUpLmluaXQoaW5kZXgsIGxldmVsRGF0YVtpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZEFyci5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGxldmVsRGF0YVtpXVtqXSA8IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuY29tcGxhdGVDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcGxheWVyX1N0YXRlLmNvbXBsYXRlQ291bnQgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvbXBsYXRlKG51bSl7XHJcbiAgICAgICAgdGhpcy5jb21wbGF0ZUNvdW50ICs9IG51bTtcclxuICAgICAgICBpZihfcGxheWVyX1N0YXRlLmNvbXBsYXRlQ291bnQgPj0gdGhpcy5jaGlsZEFyci5sZW5ndGggJiYgIV9wbGF5ZXJfU3RhdGUuaXNQYXNzTGV2ZWwpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS3ov4flhbMnLCBfcGxheWVyX1N0YXRlLmxldmVsSW5kZXgpO1xyXG4gICAgICAgICAgICBfcGxheWVyX1N0YXRlLmxldmVsSW5kZXgrKztcclxuICAgICAgICAgICAgaWYoX3BsYXllcl9TdGF0ZS5sZXZlbEluZGV4ID49IDI5KV9wbGF5ZXJfU3RhdGUubGV2ZWxJbmRleCA9IDggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMjEpO1xyXG4gICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMucmVtb3ZlQ2hpbGRBcnIsIDEpO1xyXG4gICAgICAgICAgIF9wbGF5ZXJfU3RhdGUuaXNQYXNzTGV2ZWwgPSB0cnVlO1xyXG4gICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGV2ZWxJbmRleCcsIF9wbGF5ZXJfU3RhdGUubGV2ZWxJbmRleCk7XHJcbiAgICAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbi5lbWl0KCdwYXNzTGV2ZWwnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGRBcnIoKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZEFyci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRBcnJbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkQXJyW2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0t5riF55CG5a6M5oiQJyk7XHJcbiAgICAgICAgdGhpcy5pbml0TGV2ZWxEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWUpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn0iXX0=