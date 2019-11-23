"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, UINode;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "ec558HEbrRBNb0skSjoLXzl", "UINode"); // begin UINode


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UINode", UINode = (_dec = ccclass("UINode"), _dec2 = property([cc.Node]), _dec3 = property([cc.Node]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(UINode, _Component);

        function UINode() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, UINode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(UINode)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "passTipNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "tipNode", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(UINode, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.passTipNode.active = false;

            if (_player_State.levelIndex < 5) {
              this.tipNode.active = true;
            } else {
              this.tipNode.active = false;
            }

            window.Notification.on('passLevel', this.passLevel, this);
          }
        }, {
          key: "passLevel",
          value: function passLevel() {
            this.passTipNode.active = true;
            this.scheduleOnce(function () {
              this.passTipNode.active = false;
            }, 1.5);
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return UINode;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "passTipNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "tipNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end UINode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvVUlOb2RlLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJVSU5vZGUiLCJjYyIsIk5vZGUiLCJwYXNzVGlwTm9kZSIsImFjdGl2ZSIsIl9wbGF5ZXJfU3RhdGUiLCJsZXZlbEluZGV4IiwidGlwTm9kZSIsIndpbmRvdyIsIk5vdGlmaWNhdGlvbiIsIm9uIiwicGFzc0xldmVsIiwic2NoZWR1bGVPbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7NkVBRW9EOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JGLFUsQ0FBdEJFLE87QUFBU0MsTUFBQUEsUSxHQUFhSCxVLENBQWJHLFE7O3dCQUdKQyxNLFdBRFpGLE9BQU8sQ0FBQyxRQUFELEMsVUFRSEMsUUFBUSxDQUFDLENBQUNFLEVBQUUsQ0FBQ0MsSUFBSixDQUFELEMsVUFHUkgsUUFBUSxDQUFDLENBQUNFLEVBQUUsQ0FBQ0MsSUFBSixDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHQTtBQUNMO0FBQ0EsaUJBQUtDLFdBQUwsQ0FBaUJDLE1BQWpCLEdBQTBCLEtBQTFCOztBQUNBLGdCQUFHQyxhQUFhLENBQUNDLFVBQWQsR0FBMkIsQ0FBOUIsRUFBZ0M7QUFDNUIsbUJBQUtDLE9BQUwsQ0FBYUgsTUFBYixHQUFzQixJQUF0QjtBQUNILGFBRkQsTUFFSztBQUNELG1CQUFLRyxPQUFMLENBQWFILE1BQWIsR0FBc0IsS0FBdEI7QUFDSDs7QUFDREksWUFBQUEsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxFQUFwQixDQUF1QixXQUF2QixFQUFvQyxLQUFLQyxTQUF6QyxFQUFvRCxJQUFwRDtBQUNIOzs7c0NBRVU7QUFDUCxpQkFBS1IsV0FBTCxDQUFpQkMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxpQkFBS1EsWUFBTCxDQUFrQixZQUFVO0FBQ3hCLG1CQUFLVCxXQUFMLENBQWlCQyxNQUFqQixHQUEwQixLQUExQjtBQUNILGFBRkQsRUFFRyxHQUZIO0FBR0gsVyxDQUVEO0FBQ0E7QUFDQTs7OztRQWpDd0JQLFM7Ozs7O2lCQVFWLEk7Ozs7Ozs7aUJBR0osSTs7OztvQkFiSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJVSU5vZGVcIilcclxuZXhwb3J0IGNsYXNzIFVJTm9kZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxyXG4gICAgcGFzc1RpcE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXHJcbiAgICB0aXBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5wYXNzVGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZihfcGxheWVyX1N0YXRlLmxldmVsSW5kZXggPCA1KXtcclxuICAgICAgICAgICAgdGhpcy50aXBOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbi5vbigncGFzc0xldmVsJywgdGhpcy5wYXNzTGV2ZWwsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhc3NMZXZlbCgpe1xyXG4gICAgICAgIHRoaXMucGFzc1RpcE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLnBhc3NUaXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWUpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19