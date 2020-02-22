module.exports = (function(e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var a = (t[i] = {
      i: i,
      l: !1,
      exports: {}
    });
    return e[i].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: i
        });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", {
          enumerable: !0,
          value: e
        }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            i,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return i;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 10))
  );
})([
  function(e, t) {
    e.exports = require("react-native-web");
  },
  function(e, t) {
    e.exports = require("react");
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.default = function(e) {
        var t = JSON.stringify(e);
        if (s[t]) return s[t];
        var n = Object.keys(e)
          .map(r)
          .filter(o);
        if ((n.sort(a), n.length < 2))
          throw new Error(
            "Animation definitions must have at least two values."
          );
        var l = {};
        e.easing && (l.easing = e.easing);
        e.style && (l.style = e.style);
        for (
          var u = function(t) {
              var a = n[t],
                o = e[a];
              if ((o || (0 === a ? (o = e.from) : 1 === a && (o = e.to)), !o))
                throw new Error(
                  "Missing animation keyframe, this should not happen"
                );
              (o = (0, i.default)(o)),
                Object.keys(o).forEach(function(e) {
                  (e in l) ||
                    (l[e] = {
                      inputRange: [],
                      outputRange: []
                    }),
                    l[e].inputRange.push(a),
                    l[e].outputRange.push(o[e]);
                });
            },
            c = 0;
          c < n.length;
          c += 1
        )
          u(c);
        return (s[t] = l), l;
      });
    var i = (function(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    })(n(3));

    function a(e, t) {
      return e - t;
    }

    function o(e) {
      return null !== e;
    }

    function r(e) {
      if ("from" === e) return 0;
      if ("to" === e) return 1;
      var t = parseFloat(e, 10);
      return isNaN(t) || t < 0 || t > 1 ? null : t;
    }
    var s = {};
    e.exports = t.default;
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
        return e;
      };
    t.default = function(e) {
      var t = i({}, a.StyleSheet.flatten(e));
      t.transform &&
        (t.transform.forEach(function(e) {
          var n = Object.keys(e)[0];
          t[n] = e[n];
        }),
        delete t.transform);
      return t;
    };
    var a = n(0);
    e.exports = t.default;
  },
  function(e, t, n) {
    e.exports = n(32)();
  },
  function(e, t, n) {
    function i(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.slideOutRight = t.slideOutLeft = t.slideOutUp = t.slideOutDown = t.slideInRight = t.slideInLeft = t.slideInUp = t.slideInDown = void 0);
    var a = n(0).Dimensions.get("window"),
      o = a.height,
      r = a.width,
      s = function(e, t, n) {
        return {
          from: i({}, e, t),
          to: i({}, e, n)
        };
      };
    (t.slideInDown = s("translateY", -o, 0)),
      (t.slideInUp = s("translateY", o, 0)),
      (t.slideInLeft = s("translateX", -r, 0)),
      (t.slideInRight = s("translateX", r, 0)),
      (t.slideOutDown = s("translateY", 0, o)),
      (t.slideOutUp = s("translateY", 0, -o)),
      (t.slideOutLeft = s("translateX", 0, -r)),
      (t.slideOutRight = s("translateX", 0, r));
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0);
    (t.default = i.StyleSheet.create({
      backdrop: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000"
      },
      content: {
        flex: 1,
        justifyContent: "center"
      }
    })),
      (e.exports = t.default);
  },
  function(e, t, n) {
    e.exports = n(11)();
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.registerAnimation = o),
      (t.getAnimationByName = function(e) {
        return a[e];
      }),
      (t.getAnimationNames = function() {
        return Object.keys(a);
      }),
      (t.initializeRegistryWithDefinitions = function(e) {
        Object.keys(e).forEach(function(t) {
          o(t, (0, i.default)(e[t]));
        });
      });
    var i = (function(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    })(n(2));
    var a = {};

    function o(e, t) {
      a[e] = t;
    }
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.SafeHTMLElement = t.canUseDOM = void 0);
    var i = (function(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    })(n(4));
    var a = (t.canUseDOM = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    ));
    t.SafeHTMLElement = a ? HTMLElement : i.default.any;
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.ReactNativeModal = void 0);
    var i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        },
      a = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o =
        "function" == typeof Symbol &&
        "symbol" ==
          typeof ("function" == typeof Symbol ? Symbol.iterator : "@@iterator")
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !==
                  ("function" == typeof Symbol
                    ? Symbol.prototype
                    : "@@prototype")
                ? "symbol"
                : typeof e;
            },
      r = n(1),
      s = d(r),
      l = n(0),
      u = (d(n(7)), n(13)),
      c = d(n(31)),
      f = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(5)),
      p = d(n(6));

    function d(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    }
    (0, u.initializeRegistryWithDefinitions)(f);
    var y = function(e, t) {
        (0, u.registerAnimation)(e, (0, u.createAnimation)(t));
      },
      b = function(e) {
        return null !== e && "object" === (void 0 === e ? "undefined" : o(e));
      },
      m = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            g.call(n),
            n.buildAnimations(e),
            n.state.isSwipeable &&
              ((n.state = i({}, n.state, {
                pan: new l.Animated.ValueXY()
              })),
              n.buildPanResponder()),
            n.props.isVisible &&
              (n.state = i({}, n.state, {
                isVisible: !0,
                showContent: !0
              })),
            n
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, r.Component),
          a(t, [
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                !this.state.isVisible &&
                  e.isVisible &&
                  this.setState({
                    isVisible: !0,
                    showContent: !0
                  }),
                  (this.props.animationIn === e.animationIn &&
                    this.props.animationOut === e.animationOut) ||
                    this.buildAnimations(e),
                  this.props.backdropOpacity !== e.backdropOpacity &&
                    this.backdropRef &&
                    this.backdropRef.transitionTo(
                      {
                        opacity: e.backdropOpacity
                      },
                      this.props.backdropTransitionInTiming
                    );
              }
            },
            {
              key: "componentDidMount",
              value: function() {
                this.state.isVisible && this.open();
              }
            },
            {
              key: "componentWillUnmount",
              value: function() {}
            },
            {
              key: "componentDidUpdate",
              value: function(e) {
                this.props.isVisible && !e.isVisible
                  ? this.open()
                  : !this.props.isVisible && e.isVisible && this._close();
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t =
                    (e.animationIn,
                    e.animationInTiming,
                    e.animationOut,
                    e.animationOutTiming,
                    e.avoidKeyboard),
                  n = e.backdropColor,
                  a =
                    (e.backdropOpacity,
                    e.backdropTransitionInTiming,
                    e.backdropTransitionOutTiming,
                    e.children),
                  o = (e.isVisible, e.onModalShow, e.onBackdropPress),
                  r = e.onBackButtonPress,
                  f = e.useNativeDriver,
                  d = e.style,
                  y = (function(e, t) {
                    var n = {};
                    for (var i in e)
                      t.indexOf(i) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, i) &&
                          (n[i] = e[i]));
                    return n;
                  })(e, [
                    "animationIn",
                    "animationInTiming",
                    "animationOut",
                    "animationOutTiming",
                    "avoidKeyboard",
                    "backdropColor",
                    "backdropOpacity",
                    "backdropTransitionInTiming",
                    "backdropTransitionOutTiming",
                    "children",
                    "isVisible",
                    "onModalShow",
                    "onBackdropPress",
                    "onBackButtonPress",
                    "useNativeDriver",
                    "style"
                  ]),
                  b = [
                    {
                      margin: 0.05 * this.state.deviceWidth,
                      transform: [
                        {
                          translateY: 0
                        }
                      ]
                    },
                    p.default.content,
                    d
                  ],
                  m = {},
                  g = {};
                this.state.isSwipeable &&
                  ((m = i({}, this.panResponder.panHandlers)),
                  (g = this.state.pan.getLayout()));
                var h =
                    this.props.hideModalContentWhileAnimating &&
                    this.props.useNativeDriver &&
                    !this.state.showContent
                      ? s.default.createElement(u.View, null)
                      : a,
                  v = s.default.createElement(
                    u.View,
                    i(
                      {},
                      m,
                      {
                        ref: this.handleContentRef,
                        style: [g, b],
                        pointerEvents: "box-none",
                        useNativeDriver: f
                      },
                      y
                    ),
                    h
                  );
                return s.default.createElement(
                  c.default,
                  i(
                    {
                      transparent: !0,
                      animationType: "none",
                      visible: this.state.isVisible,
                      onRequestClose: r
                    },
                    y
                  ),
                  s.default.createElement(
                    l.TouchableWithoutFeedback,
                    {
                      onPress: o
                    },
                    s.default.createElement(u.View, {
                      ref: this.handleBackdropRef,
                      useNativeDriver: f,
                      style: [
                        p.default.backdrop,
                        {
                          backgroundColor: this.state.showContent
                            ? n
                            : "transparent"
                        }
                      ]
                    })
                  ),
                  t &&
                    s.default.createElement(
                      l.KeyboardAvoidingView,
                      {
                        behavior: "ios" === l.Platform.OS ? "padding" : null,
                        pointerEvents: "box-none",
                        style: b.concat([
                          {
                            margin: 0
                          }
                        ])
                      },
                      v
                    ),
                  !t && v
                );
              }
            }
          ]),
          t
        );
      })();
    (m.setAppElement = c.default.setAppElement),
      (m.defaultProps = {
        animationIn: "slideInUp",
        animationInTiming: 300,
        animationOut: "slideOutDown",
        animationOutTiming: 300,
        avoidKeyboard: !1,
        backdropColor: "black",
        backdropOpacity: 0.7,
        backdropTransitionInTiming: 300,
        backdropTransitionOutTiming: 300,
        onModalShow: function() {
          return null;
        },
        onModalHide: function() {
          return null;
        },
        isVisible: !1,
        hideModalContentWhileAnimating: !1,
        onBackdropPress: function() {
          return null;
        },
        onBackButtonPress: function() {
          return null;
        },
        swipeThreshold: 100,
        useNativeDriver: !1,
        scrollTo: null,
        scrollOffset: 0,
        scrollOffsetMax: 0
      });
    var g = function() {
      var e = this;
      (this.state = {
        showContent: !0,
        isVisible: !1,
        deviceWidth: l.Dimensions.get("window").width,
        deviceHeight: l.Dimensions.get("window").height,
        isSwipeable: !!this.props.swipeDirection,
        pan: null
      }),
        (this.transitionLock = null),
        (this.inSwipeClosingState = !1),
        (this.buildPanResponder = function() {
          var t = null;
          (t =
            "right" === e.props.swipeDirection ||
            "left" === e.props.swipeDirection
              ? l.Animated.event([
                  null,
                  {
                    dx: e.state.pan.x
                  }
                ])
              : l.Animated.event([
                  null,
                  {
                    dy: e.state.pan.y
                  }
                ])),
            (e.panResponder = l.PanResponder.create({
              onStartShouldSetPanResponder: function() {
                return !(e.props.scrollTo && e.props.scrollOffset > 0);
              },
              onPanResponderMove: function(n, i) {
                var a =
                  1 - e.getAccDistancePerDirection(i) / e.state.deviceWidth;
                if (e.isSwipeDirectionAllowed(i))
                  e.backdropRef &&
                    e.backdropRef.transitionTo({
                      opacity: e.props.backdropOpacity * a
                    }),
                    t(n, i);
                else if (e.props.scrollTo) {
                  var o = -i.dy;
                  o > e.props.scrollOffsetMax &&
                    (o -= (o - e.props.scrollOffsetMax) / 2),
                    e.props.scrollTo({
                      y: o,
                      animated: !1
                    });
                }
              },
              onPanResponderRelease: function(t, n) {
                if (
                  e.getAccDistancePerDirection(n) > e.props.swipeThreshold &&
                  e.props.onSwipe
                )
                  return (e.inSwipeClosingState = !0), void e.props.onSwipe();
                e.backdropRef &&
                  e.backdropRef.transitionTo(
                    {
                      opacity: e.props.backdropOpacity
                    },
                    e.props.backdropTransitionInTiming
                  ),
                  l.Animated.spring(e.state.pan, {
                    toValue: {
                      x: 0,
                      y: 0
                    },
                    bounciness: 0
                  }).start(),
                  e.props.scrollOffset > e.props.scrollOffsetMax &&
                    e.props.scrollTo({
                      y: e.props.scrollOffsetMax,
                      animated: !0
                    });
              }
            }));
        }),
        (this.getAccDistancePerDirection = function(t) {
          switch (e.props.swipeDirection) {
            case "up":
              return -t.dy;
            case "down":
              return t.dy;
            case "right":
              return t.dx;
            case "left":
              return -t.dx;
            default:
              return 0;
          }
        }),
        (this.isSwipeDirectionAllowed = function(t) {
          var n = t.dy,
            i = t.dx,
            a = n > 0,
            o = n < 0,
            r = i < 0,
            s = i > 0;
          return (
            !("up" !== e.props.swipeDirection || !o) ||
            !("down" !== e.props.swipeDirection || !a) ||
              !("right" !== e.props.swipeDirection || !s) ||
                !("left" !== e.props.swipeDirection || !r)
          );
        }),
        (this.buildAnimations = function(t) {
          var n = t.animationIn,
            i = t.animationOut;
          if (b(n)) {
            var a = JSON.stringify(n);
            y(a, n), (n = a);
          }
          if (b(i)) {
            var o = JSON.stringify(i);
            y(o, i), (i = o);
          }
          (e.animationIn = n), (e.animationOut = i);
        }),
        (this.handleDimensionsUpdate = function() {
          var t = l.Dimensions.get("window").width,
            n = l.Dimensions.get("window").height;
          (t === e.state.deviceWidth && n === e.state.deviceHeight) ||
            e.setState({
              deviceWidth: t,
              deviceHeight: n
            });
        }),
        (this.handleBackdropRef = function(t) {
          (e.backdropRef = t), e.state.isVisible && e.open();
        }),
        (this.handleContentRef = function(t) {
          (e.contentRef = t), e.state.isVisible && e.open();
        }),
        (this.open = function() {
          e.transitionLock ||
            (e.backdropRef &&
              e.contentRef &&
              ((e.transitionLock = !0),
              e.backdropRef.transitionTo(
                {
                  opacity: e.props.backdropOpacity
                },
                e.props.backdropTransitionInTiming
              ),
              e.state.isSwipeable &&
                e.state.pan.setValue({
                  x: 0,
                  y: 0
                }),
              e.contentRef[e.animationIn](e.props.animationInTiming).then(
                function() {
                  (e.transitionLock = !1),
                    e.props.isVisible ? e.props.onModalShow() : e._close();
                }
              )));
        }),
        (this._close = function() {
          if (!e.transitionLock) {
            (e.transitionLock = !0),
              e.backdropRef &&
                e.backdropRef.transitionTo(
                  {
                    opacity: 0
                  },
                  e.props.backdropTransitionOutTiming
                );
            var t = e.animationOut;
            e.inSwipeClosingState &&
              ((e.inSwipeClosingState = !1),
              "up" === e.props.swipeDirection
                ? (t = "slideOutUp")
                : "down" === e.props.swipeDirection
                ? (t = "slideOutDown")
                : "right" === e.props.swipeDirection
                ? (t = "slideOutRight")
                : "left" === e.props.swipeDirection && (t = "slideOutLeft")),
              e.contentRef &&
                e.contentRef[t](e.props.animationOutTiming).then(function() {
                  (e.transitionLock = !1),
                    e.props.isVisible
                      ? e.open()
                      : (e.setState(
                          {
                            showContent: !1
                          },
                          function() {
                            e.setState({
                              isVisible: !1
                            });
                          }
                        ),
                        e.props.onModalHide());
                });
          }
        });
    };
    (m.propTypes = {}), (t.ReactNativeModal = m), (t.default = m);
  },
  function(e, t, n) {
    "use strict";
    var i = n(12);

    function a() {}
    e.exports = function() {
      function e(e, t, n, a, o, r) {
        if (r !== i) {
          var s = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((s.name = "Invariant Violation"), s);
        }
      }

      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t
      };
      return (n.checkPropTypes = a), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.initializeRegistryWithDefinitions = t.registerAnimation = t.createAnimation = t.Image = t.Text = t.View = t.createAnimatableComponent = void 0);
    var i = n(2);
    Object.defineProperty(t, "createAnimation", {
      enumerable: !0,
      get: function() {
        return l(i).default;
      }
    });
    var a = n(8);
    Object.defineProperty(t, "registerAnimation", {
      enumerable: !0,
      get: function() {
        return a.registerAnimation;
      }
    }),
      Object.defineProperty(t, "initializeRegistryWithDefinitions", {
        enumerable: !0,
        get: function() {
          return a.initializeRegistryWithDefinitions;
        }
      });
    var o = n(0),
      r = l(n(14)),
      s = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(19));

    function l(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    }
    (0, a.initializeRegistryWithDefinitions)(s);
    (t.createAnimatableComponent = r.default),
      (t.View = (0, r.default)(o.View)),
      (t.Text = (0, r.default)(o.Text)),
      (t.Image = (0, r.default)(o.Image));
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        };
    t.default = function(e) {
      var t,
        n,
        p,
        b = e.displayName || e.name || "Component",
        _ = l.Animated.createAnimatedComponent(e);
      return (
        (n = t = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            p.call(n);
            var i = new l.Animated.Value(v(0, n.props.direction)),
              o = {},
              r = {};
            return (
              e.animation && ((r = O(e.animation)), (o = w(r, i))),
              (n.state = {
                animationValue: i,
                animationStyle: o,
                compiledAnimation: r,
                transitionStyle: {},
                transitionValues: {},
                currentTransitionValues: {}
              }),
              e.transition &&
                (n.state = a(
                  {},
                  n.state,
                  n.initializeTransitionState(e.transition)
                )),
              (n.delayTimer = null),
              (0, d.getAnimationNames)().forEach(function(e) {
                e in n || (n[e] = n.animate.bind(n, e));
              }),
              n
            );
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
              {
                key: "initializeTransitionState",
                value: function(e) {
                  var t = {},
                    n = {},
                    i = (0, c.default)(e, this.props.style);
                  return (
                    Object.keys(i).forEach(function(e) {
                      var a = i[e];
                      if (-1 !== m.indexOf(e))
                        (t[e] = new l.Animated.Value(0)), (n[e] = a);
                      else {
                        var o = new l.Animated.Value(a);
                        (t[e] = o), (n[e] = o);
                      }
                    }),
                    {
                      currentTransitionValues: i,
                      transitionStyle: n,
                      transitionValues: t
                    }
                  );
                }
              },
              {
                key: "getTransitionState",
                value: function(e) {
                  var t = this,
                    n = "string" == typeof e ? [e] : e,
                    i = this.state,
                    o = i.transitionValues,
                    r = i.currentTransitionValues,
                    s = i.transitionStyle,
                    l = n.filter(function(e) {
                      return !t.state.transitionValues[e];
                    });
                  if (l.length) {
                    var u = this.initializeTransitionState(l);
                    (o = a({}, o, u.transitionValues)),
                      (r = a({}, r, u.currentTransitionValues)),
                      (s = a({}, s, u.transitionStyle));
                  }
                  return {
                    transitionValues: o,
                    currentTransitionValues: r,
                    transitionStyle: s
                  };
                }
              },
              {
                key: "setNativeProps",
                value: function(e) {
                  this.ref && this.ref.setNativeProps(e);
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.animation,
                    i = t.duration,
                    a = t.delay,
                    o = t.onAnimationBegin,
                    r = t.iterationDelay;
                  if (n) {
                    var s = function() {
                      o(),
                        e.startAnimation(i, 0, r, function(t) {
                          return e.props.onAnimationEnd(t);
                        }),
                        (e.delayTimer = null);
                    };
                    a ? (this.delayTimer = setTimeout(s, a)) : s();
                  }
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  var t = this,
                    n = e.animation,
                    i = e.delay,
                    a = e.duration,
                    o = e.easing,
                    r = e.transition,
                    s = e.onAnimationBegin;
                  if (r) {
                    var l = (0, c.default)(r, e.style);
                    this.transitionTo(l, a, o, i);
                  } else
                    (function(e, t) {
                      return e === t || JSON.stringify(e) === JSON.stringify(t);
                    })(n, this.props.animation) ||
                      (n
                        ? this.delayTimer
                          ? this.setAnimation(n)
                          : (s(),
                            this.animate(n, a).then(function(e) {
                              return t.props.onAnimationEnd(e);
                            }))
                        : this.stopAnimation());
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.delayTimer && clearTimeout(this.delayTimer);
                }
              },
              {
                key: "setAnimation",
                value: function(e, t) {
                  var n = O(e),
                    i = w(n, this.state.animationValue);
                  this.setState(
                    {
                      animationStyle: i,
                      compiledAnimation: n
                    },
                    t
                  );
                }
              },
              {
                key: "animate",
                value: function(e, t, n) {
                  var i = this;
                  return new Promise(function(a) {
                    i.setAnimation(e, function() {
                      i.startAnimation(t, 0, n, a);
                    });
                  });
                }
              },
              {
                key: "stopAnimation",
                value: function() {
                  this.setState({
                    scheduledAnimation: !1,
                    animationStyle: {}
                  }),
                    this.state.animationValue.stopAnimation(),
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                }
              },
              {
                key: "startAnimation",
                value: function(e, t, n, i) {
                  var a = this,
                    o = this.state,
                    r = o.animationValue,
                    s = o.compiledAnimation,
                    u = this.props,
                    c = u.direction,
                    f = u.iterationCount,
                    p = u.useNativeDriver,
                    d = this.props.easing || s.easing || "ease",
                    b = t || 0,
                    m = v(b, c),
                    g = h(b, c);
                  r.setValue(m), "string" == typeof d && (d = y.default[d]);
                  var O =
                    "reverse" === c ||
                    ("alternate" === c && !g) ||
                    ("alternate-reverse" === c && !g);
                  O && (d = l.Easing.out(d));
                  var w = {
                    toValue: g,
                    easing: d,
                    isInteraction: f <= 1,
                    duration: e || this.props.duration || 1e3,
                    useNativeDriver: p,
                    delay: n || 0
                  };
                  l.Animated.timing(r, w).start(function(t) {
                    (b += 1),
                      t.finished &&
                      a.props.animation &&
                      ("infinite" === f || b < f)
                        ? a.startAnimation(e, b, n, i)
                        : i && i(t);
                  });
                }
              },
              {
                key: "transition",
                value: function(e, t, n, i) {
                  var a = this,
                    o = (0, f.default)(e),
                    r = (0, f.default)(t),
                    s = Object.keys(r),
                    u = this.getTransitionState(s),
                    c = u.transitionValues,
                    p = u.currentTransitionValues,
                    d = u.transitionStyle;
                  s.forEach(function(e) {
                    var t = o[e],
                      n = r[e],
                      i = c[e];
                    i || (i = new l.Animated.Value(0));
                    var a = -1 !== m.indexOf(e),
                      s = -1 !== g.indexOf(e);
                    a
                      ? (i.setValue(0),
                        (d[e] = i.interpolate({
                          inputRange: [0, 1],
                          outputRange: [t, n]
                        })),
                        (p[e] = n),
                        (r[e] = 1))
                      : (s
                          ? ((d[e] = i.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, 1],
                              extrapolateLeft: "clamp"
                            })),
                            (p[e] = n))
                          : (d[e] = i),
                        i.setValue(t));
                  }),
                    this.setState(
                      {
                        transitionValues: c,
                        transitionStyle: d,
                        currentTransitionValues: p
                      },
                      function() {
                        a.transitionToValues(
                          r,
                          n || a.props.duration,
                          i,
                          a.props.delay
                        );
                      }
                    );
                }
              },
              {
                key: "transitionTo",
                value: function(e, t, n, i) {
                  var a = this,
                    o = this.state.currentTransitionValues,
                    r = (0, f.default)(e),
                    s = {
                      from: {},
                      to: {}
                    };
                  Object.keys(r).forEach(function(e) {
                    var l = r[e],
                      u = -1 !== m.indexOf(e),
                      f = -1 !== g.indexOf(e),
                      p = a.state.transitionStyle[e],
                      d = a.state.transitionValues[e];
                    if (u || f || !p || p !== d) {
                      var y = o[e];
                      if (void 0 === y && a.props.style) {
                        var b = (0, c.default)(e, a.props.style);
                        y = b[e];
                      }
                      (s.from[e] = y), (s.to[e] = l);
                    } else
                      k(
                        e,
                        d,
                        l,
                        t,
                        n,
                        a.props.useNativeDriver,
                        i,
                        function(e) {
                          return a.props.onTransitionBegin(e);
                        },
                        function(e) {
                          return a.props.onTransitionEnd(e);
                        }
                      );
                  }),
                    Object.keys(s.from).length &&
                      this.transition(s.from, s.to, t, n);
                }
              },
              {
                key: "transitionToValues",
                value: function(e, t, n, i) {
                  var a = this;
                  Object.keys(e).forEach(function(o) {
                    var r = a.state.transitionValues[o],
                      s = e[o];
                    k(
                      o,
                      r,
                      s,
                      t,
                      n,
                      a.props.useNativeDriver,
                      i,
                      function(e) {
                        return a.props.onTransitionBegin(e);
                      },
                      function(e) {
                        return a.props.onTransitionEnd(e);
                      }
                    );
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    n = e.style,
                    i = e.animation,
                    o = e.transition;
                  if (i && o)
                    throw new Error(
                      "You cannot combine animation and transition props"
                    );
                  var s = (function(e, t) {
                    var n = {};
                    return (
                      Object.keys(t).forEach(function(i) {
                        -1 === e.indexOf(i) && (n[i] = t[i]);
                      }),
                      n
                    );
                  })(Object.keys(t.propTypes), this.props);
                  return r.default.createElement(
                    _,
                    a(
                      {
                        ref: this.handleRef,
                        style: [
                          n,
                          this.state.animationStyle,
                          (0, u.default)(this.state.transitionStyle)
                        ]
                      },
                      s
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.Component)),
        (t.displayName = "withAnimatable(" + b + ")"),
        (t.propTypes = {
          animation: s.default.oneOfType([s.default.string, s.default.object]),
          duration: s.default.number,
          direction: s.default.oneOf([
            "normal",
            "reverse",
            "alternate",
            "alternate-reverse"
          ]),
          delay: s.default.number,
          easing: s.default.oneOfType([
            s.default.oneOf(Object.keys(y.default)),
            s.default.func
          ]),
          iterationCount: function(e, t) {
            var n = e[t];
            return "infinite" === n || ("number" == typeof n && n >= 1)
              ? null
              : new Error(
                  'iterationCount must be a positive number or "infinite"'
                );
          },
          iterationDelay: s.default.number,
          onAnimationBegin: s.default.func,
          onAnimationEnd: s.default.func,
          onTransitionBegin: s.default.func,
          onTransitionEnd: s.default.func,
          style: s.default.oneOfType([
            s.default.number,
            s.default.array,
            s.default.object
          ]),
          transition: s.default.oneOfType([
            s.default.string,
            s.default.arrayOf(s.default.string)
          ]),
          useNativeDriver: s.default.bool
        }),
        (t.defaultProps = {
          animation: void 0,
          delay: 0,
          direction: "normal",
          duration: void 0,
          easing: void 0,
          iterationCount: 1,
          iterationDelay: 0,
          onAnimationBegin: function() {},
          onAnimationEnd: function() {},
          onTransitionBegin: function() {},
          onTransitionEnd: function() {},
          style: void 0,
          transition: void 0,
          useNativeDriver: !1
        }),
        (p = function() {
          var e = this;
          (this.ref = null),
            (this.handleRef = function(t) {
              e.ref = t;
            });
        }),
        n
      );
    };
    var o = n(1),
      r = b(o),
      s = b(n(7)),
      l = n(0),
      u = b(n(15)),
      c = b(n(16)),
      f = b(n(3)),
      p = b(n(2)),
      d = n(8),
      y = b(n(18));

    function b(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    }
    var m = [
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skewX",
        "skewY",
        "transformMatrix",
        "backgroundColor",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
        "shadowColor",
        "color",
        "textDecorationColor",
        "tintColor"
      ],
      g = ["width", "height"];

    function h(e, t) {
      switch (t) {
        case "reverse":
          return 0;
        case "alternate":
          return e % 2 ? 0 : 1;
        case "alternate-reverse":
          return e % 2 ? 1 : 0;
        case "normal":
        default:
          return 1;
      }
    }

    function v(e, t) {
      return h(e, t) ? 0 : 1;
    }

    function O(e) {
      if ("string" == typeof e) {
        var t = (0, d.getAnimationByName)(e);
        if (!t) throw new Error("No animation registred by the name of " + e);
        return t;
      }
      return (0, p.default)(e);
    }

    function w(e, t) {
      var n = {};
      return (
        Object.keys(e).forEach(function(i) {
          "style" === i
            ? a(n, e.style)
            : "easing" !== i && (n[i] = t.interpolate(e[i]));
        }),
        (0, u.default)(n)
      );
    }

    function k(e, t, n, i, a) {
      var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
        r = arguments[6],
        s = arguments[7],
        u = arguments[8],
        c =
          i || a || r
            ? l.Animated.timing(t, {
                toValue: n,
                delay: r,
                duration: i || 1e3,
                easing: "function" == typeof a ? a : y.default[a || "ease"],
                useNativeDriver: o
              })
            : l.Animated.spring(t, {
                toValue: n,
                useNativeDriver: o
              });
      setTimeout(function() {
        return s(e);
      }, r),
        c.start(function() {
          return u(e);
        });
    }
    e.exports = t.default;
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.default = function(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function(i) {
            -1 !== n.indexOf(i)
              ? (t.transform || (t.transform = []),
                t.transform.push(
                  (function(e, t, n) {
                    return (
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                          })
                        : (e[t] = n),
                      e
                    );
                  })({}, i, e[i])
                ))
              : (t[i] = e[i]);
          }),
          t
        );
      });
    var n = [
      "perspective",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "skewX",
      "skewY",
      "translateX",
      "translateY"
    ];
    e.exports = t.default;
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.default = function(e, t) {
        var n = {},
          o = (0, i.default)(t);
        return (
          ("string" == typeof e ? [e] : e).forEach(function(e) {
            n[e] = e in o ? o[e] : (0, a.default)(e, o);
          }),
          n
        );
      });
    var i = o(n(3)),
      a = o(n(17));

    function o(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    }
    e.exports = t.default;
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.default = function(e, t) {
        if ("backgroundColor" === e) return "rgba(0,0,0,0)";
        if ("color" === e || -1 !== e.indexOf("Color")) return "rgba(0,0,0,1)";
        if (0 === e.indexOf("rotate") || 0 === e.indexOf("skew")) return "0deg";
        if ("opacity" === e || 0 === e.indexOf("scale")) return 1;
        if ("fontSize" === e) return 14;
        if (0 === e.indexOf("margin") || 0 === e.indexOf("padding"))
          for (var a, o = 0; o < i.length; o++)
            if (((a = i[o]), e.substr(-a.length) === a)) {
              for (
                var r, s = e.substr(0, e.length - a.length), l = n[a], u = 0;
                u < l.length;
                u++
              )
                if ((r = s + l[u]) in t) return t[r];
              break;
            }
        return 0;
      });
    var n = {
        Top: ["Vertical", ""],
        Bottom: ["Vertical", ""],
        Vertical: [""],
        Left: ["Horizontal", ""],
        Right: ["Horizontal", ""],
        Horizontal: [""]
      },
      i = Object.keys(n);
    e.exports = t.default;
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0),
      a = {
        linear: i.Easing.linear,
        ease: i.Easing.bezier(0.25, 0.1, 0.25, 1),
        "ease-in": i.Easing.bezier(0.42, 0, 1, 1),
        "ease-out": i.Easing.bezier(0, 0, 0.58, 1),
        "ease-in-out": i.Easing.bezier(0.42, 0, 0.58, 1),
        "ease-in-cubic": i.Easing.bezier(0.55, 0.055, 0.675, 0.19),
        "ease-out-cubic": i.Easing.bezier(0.215, 0.61, 0.355, 1),
        "ease-in-out-cubic": i.Easing.bezier(0.645, 0.045, 0.355, 1),
        "ease-in-circ": i.Easing.bezier(0.6, 0.04, 0.98, 0.335),
        "ease-out-circ": i.Easing.bezier(0.075, 0.82, 0.165, 1),
        "ease-in-out-circ": i.Easing.bezier(0.785, 0.135, 0.15, 0.86),
        "ease-in-expo": i.Easing.bezier(0.95, 0.05, 0.795, 0.035),
        "ease-out-expo": i.Easing.bezier(0.19, 1, 0.22, 1),
        "ease-in-out-expo": i.Easing.bezier(1, 0, 0, 1),
        "ease-in-quad": i.Easing.bezier(0.55, 0.085, 0.68, 0.53),
        "ease-out-quad": i.Easing.bezier(0.25, 0.46, 0.45, 0.94),
        "ease-in-out-quad": i.Easing.bezier(0.455, 0.03, 0.515, 0.955),
        "ease-in-quart": i.Easing.bezier(0.895, 0.03, 0.685, 0.22),
        "ease-out-quart": i.Easing.bezier(0.165, 0.84, 0.44, 1),
        "ease-in-out-quart": i.Easing.bezier(0.77, 0, 0.175, 1),
        "ease-in-quint": i.Easing.bezier(0.755, 0.05, 0.855, 0.06),
        "ease-out-quint": i.Easing.bezier(0.23, 1, 0.32, 1),
        "ease-in-out-quint": i.Easing.bezier(0.86, 0, 0.07, 1),
        "ease-in-sine": i.Easing.bezier(0.47, 0, 0.745, 0.715),
        "ease-out-sine": i.Easing.bezier(0.39, 0.575, 0.565, 1),
        "ease-in-out-sine": i.Easing.bezier(0.445, 0.05, 0.55, 0.95),
        "ease-in-back": i.Easing.bezier(0.6, -0.28, 0.735, 0.045),
        "ease-out-back": i.Easing.bezier(0.175, 0.885, 0.32, 1.275),
        "ease-in-out-back": i.Easing.bezier(0.68, -0.55, 0.265, 1.55)
      };
    (t.default = a), (e.exports = t.default);
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(20);
    Object.keys(i).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return i[e];
          }
        });
    });
    var a = n(21);
    Object.keys(a).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return a[e];
          }
        });
    });
    var o = n(22);
    Object.keys(o).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return o[e];
          }
        });
    });
    var r = n(23);
    Object.keys(r).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return r[e];
          }
        });
    });
    var s = n(24);
    Object.keys(s).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return s[e];
          }
        });
    });
    var l = n(25);
    Object.keys(l).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return l[e];
          }
        });
    });
    var u = n(26);
    Object.keys(u).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return u[e];
          }
        });
    });
    var c = n(27);
    Object.keys(c).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return c[e];
          }
        });
    });
    var f = n(28);
    Object.keys(f).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return f[e];
          }
        });
    });
    var p = n(29);
    Object.keys(p).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return p[e];
          }
        });
    });
    var d = n(30);
    Object.keys(d).forEach(function(e) {
      "default" !== e &&
        "__esModule" !== e &&
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
            return d[e];
          }
        });
    });
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.bounce = {
      0: {
        translateY: 0
      },
      0.2: {
        translateY: 0
      },
      0.4: {
        translateY: -30
      },
      0.43: {
        translateY: -30
      },
      0.53: {
        translateY: 0
      },
      0.7: {
        translateY: -15
      },
      0.8: {
        translateY: 0
      },
      0.9: {
        translateY: -4
      },
      1: {
        translateY: 0
      }
    }),
      (t.flash = {
        0: {
          opacity: 1
        },
        0.25: {
          opacity: 0
        },
        0.5: {
          opacity: 1
        },
        0.75: {
          opacity: 0
        },
        1: {
          opacity: 1
        }
      }),
      (t.jello = {
        0: {
          skewX: "0deg",
          skewY: "0deg"
        },
        0.111: {
          skewX: "0deg",
          skewY: "0deg"
        },
        0.222: {
          skewX: "-12.5deg",
          skewY: "-12.5deg"
        },
        0.333: {
          skewX: "6.25deg",
          skewY: "6.25deg"
        },
        0.444: {
          skewX: "-3.125deg",
          skewY: "-3.125deg"
        },
        0.555: {
          skewX: "1.5625deg",
          skewY: "1.5625deg"
        },
        0.666: {
          skewX: "-0.78125deg",
          skewY: "-0.78125deg"
        },
        0.777: {
          skewX: "0.390625deg",
          skewY: "0.390625deg"
        },
        0.888: {
          skewX: "-0.1953125deg",
          skewY: "-0.1953125deg"
        },
        1: {
          skewX: "0deg",
          skewY: "0deg"
        }
      }),
      (t.pulse = {
        0: {
          scale: 1
        },
        0.5: {
          scale: 1.05
        },
        1: {
          scale: 1
        }
      }),
      (t.rotate = {
        0: {
          rotate: "0deg"
        },
        0.25: {
          rotate: "90deg"
        },
        0.5: {
          rotate: "180deg"
        },
        0.75: {
          rotate: "270deg"
        },
        1: {
          rotate: "360deg"
        }
      }),
      (t.shake = {
        0: {
          translateX: 0
        },
        0.1: {
          translateX: -10
        },
        0.2: {
          translateX: 10
        },
        0.3: {
          translateX: -10
        },
        0.4: {
          translateX: 10
        },
        0.5: {
          translateX: -10
        },
        0.6: {
          translateX: 10
        },
        0.7: {
          translateX: -10
        },
        0.8: {
          translateX: 10
        },
        0.9: {
          translateX: -10
        },
        1: {
          translateX: 0
        }
      }),
      (t.swing = {
        0: {
          rotate: "0deg"
        },
        0.2: {
          rotate: "15deg"
        },
        0.4: {
          rotate: "-10deg"
        },
        0.6: {
          rotate: "5deg"
        },
        0.8: {
          rotate: "-5deg"
        },
        1: {
          rotate: "0deg"
        }
      }),
      (t.rubberBand = {
        0: {
          scaleX: 1,
          scaleY: 1
        },
        0.3: {
          scaleX: 1.25,
          scaleY: 0.75
        },
        0.4: {
          scaleX: 0.75,
          scaleY: 1.25
        },
        0.5: {
          scaleX: 1.15,
          scaleY: 0.85
        },
        0.65: {
          scaleX: 0.95,
          scaleY: 1.05
        },
        0.75: {
          scaleX: 1.05,
          scaleY: 0.95
        },
        1: {
          scaleX: 1,
          scaleY: 1
        }
      }),
      (t.tada = {
        0: {
          scale: 1,
          rotate: "0deg"
        },
        0.1: {
          scale: 0.9,
          rotate: "-3deg"
        },
        0.2: {
          scale: 0.9,
          rotate: "-3deg"
        },
        0.3: {
          scale: 1.1,
          rotate: "-3deg"
        },
        0.4: {
          rotate: "3deg"
        },
        0.5: {
          rotate: "-3deg"
        },
        0.6: {
          rotate: "3deg"
        },
        0.7: {
          rotate: "-3deg"
        },
        0.8: {
          rotate: "3deg"
        },
        0.9: {
          scale: 1.1,
          rotate: "3deg"
        },
        1: {
          scale: 1,
          rotate: "0deg"
        }
      }),
      (t.wobble = {
        0: {
          translateX: 0,
          rotate: "0deg"
        },
        0.15: {
          translateX: -25,
          rotate: "-5deg"
        },
        0.3: {
          translateX: 20,
          rotate: "3deg"
        },
        0.45: {
          translateX: -15,
          rotate: "-3deg"
        },
        0.6: {
          translateX: 10,
          rotate: "2deg"
        },
        0.75: {
          translateX: -5,
          rotate: "-1deg"
        },
        1: {
          translateX: 0,
          rotate: "0deg"
        }
      });
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.bounceIn = {
      0: {
        opacity: 0,
        scale: 0.3
      },
      0.2: {
        scale: 1.1
      },
      0.4: {
        scale: 0.9
      },
      0.6: {
        opacity: 1,
        scale: 1.03
      },
      0.8: {
        scale: 0.97
      },
      1: {
        opacity: 1,
        scale: 1
      }
    }),
      (t.bounceInUp = {
        0: {
          opacity: 0,
          translateY: 800
        },
        0.6: {
          opacity: 1,
          translateY: -25
        },
        0.75: {
          translateY: 10
        },
        0.9: {
          translateY: -5
        },
        1: {
          translateY: 0
        }
      }),
      (t.bounceInDown = {
        0: {
          opacity: 0,
          translateY: -800
        },
        0.6: {
          opacity: 1,
          translateY: 25
        },
        0.75: {
          translateY: -10
        },
        0.9: {
          translateY: 5
        },
        1: {
          translateY: 0
        }
      }),
      (t.bounceInRight = {
        0: {
          opacity: 0,
          translateX: 600
        },
        0.6: {
          opacity: 1,
          translateX: -20
        },
        0.75: {
          translateX: 8
        },
        0.9: {
          translateX: -4
        },
        1: {
          translateX: 0
        }
      }),
      (t.bounceInLeft = {
        0: {
          opacity: 0,
          translateX: -600
        },
        0.6: {
          opacity: 1,
          translateX: 20
        },
        0.75: {
          translateX: -8
        },
        0.9: {
          translateX: 4
        },
        1: {
          translateX: 0
        }
      });
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.bounceOut = {
      0: {
        opacity: 1,
        scale: 1
      },
      0.2: {
        scale: 0.9
      },
      0.5: {
        opacity: 1,
        scale: 1.11
      },
      0.55: {
        scale: 1.11
      },
      1: {
        opacity: 0,
        scale: 0.3
      }
    }),
      (t.bounceOutUp = {
        0: {
          opacity: 1,
          translateY: 0
        },
        0.2: {
          opacity: 1,
          translateY: -10
        },
        0.4: {
          translateY: 20
        },
        0.45: {
          translateY: 20
        },
        0.55: {
          opacity: 1
        },
        1: {
          opacity: 0,
          translateY: -800
        }
      }),
      (t.bounceOutDown = {
        0: {
          opacity: 1,
          translateY: 0
        },
        0.2: {
          opacity: 1,
          translateY: 10
        },
        0.4: {
          translateY: -20
        },
        0.45: {
          translateY: -20
        },
        0.55: {
          opacity: 1
        },
        1: {
          opacity: 0,
          translateY: 800
        }
      }),
      (t.bounceOutRight = {
        0: {
          opacity: 1,
          translateX: 0
        },
        0.2: {
          opacity: 1,
          translateX: 10
        },
        0.4: {
          translateX: -20
        },
        0.45: {
          translateX: -20
        },
        0.55: {
          opacity: 1
        },
        1: {
          opacity: 0,
          translateX: 600
        }
      }),
      (t.bounceOutLeft = {
        0: {
          opacity: 1,
          translateX: 0
        },
        0.2: {
          opacity: 1,
          translateX: -10
        },
        0.4: {
          translateX: 20
        },
        0.45: {
          translateX: 20
        },
        0.55: {
          opacity: 1
        },
        1: {
          opacity: 0,
          translateX: -600
        }
      });
  },
  function(e, t) {
    function n(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }

    function i(e, t) {
      return {
        from: n(
          {
            opacity: 0
          },
          e,
          t
        ),
        to: n(
          {
            opacity: 1
          },
          e,
          0
        )
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.fadeIn = {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }),
      (t.fadeInDown = i("translateY", -100)),
      (t.fadeInUp = i("translateY", 100)),
      (t.fadeInLeft = i("translateX", -100)),
      (t.fadeInRight = i("translateX", 100)),
      (t.fadeInDownBig = i("translateY", -500)),
      (t.fadeInUpBig = i("translateY", 500)),
      (t.fadeInLeftBig = i("translateX", -500)),
      (t.fadeInRightBig = i("translateX", 500));
  },
  function(e, t) {
    function n(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }

    function i(e, t) {
      return {
        from: n(
          {
            opacity: 1
          },
          e,
          0
        ),
        to: n(
          {
            opacity: 0
          },
          e,
          t
        )
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.fadeOut = {
      from: {
        opacity: 1
      },
      to: {
        opacity: 0
      }
    }),
      (t.fadeOutDown = i("translateY", 100)),
      (t.fadeOutUp = i("translateY", -100)),
      (t.fadeOutLeft = i("translateX", -100)),
      (t.fadeOutRight = i("translateX", 100)),
      (t.fadeOutDownBig = i("translateY", 500)),
      (t.fadeOutUpBig = i("translateY", -500)),
      (t.fadeOutLeftBig = i("translateX", -500)),
      (t.fadeOutRightBig = i("translateX", 500));
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.flipInX = {
      easing: "ease-in",
      style: {
        backfaceVisibility: "visible",
        perspective: 400
      },
      0: {
        opacity: 0,
        rotateX: "90deg"
      },
      0.4: {
        rotateX: "-20deg"
      },
      0.6: {
        opacity: 1,
        rotateX: "10deg"
      },
      0.8: {
        rotateX: "-5deg"
      },
      1: {
        opacity: 1,
        rotateX: "0deg"
      }
    }),
      (t.flipInY = {
        easing: "ease-in",
        style: {
          backfaceVisibility: "visible",
          perspective: 400
        },
        0: {
          opacity: 0,
          rotateY: "90deg"
        },
        0.4: {
          rotateY: "-20deg"
        },
        0.6: {
          opacity: 1,
          rotateY: "10deg"
        },
        0.8: {
          rotateY: "-5deg"
        },
        1: {
          opacity: 1,
          rotateY: "0deg"
        }
      }),
      (t.flipOutX = {
        style: {
          backfaceVisibility: "visible",
          perspective: 400
        },
        0: {
          opacity: 1,
          rotateX: "0deg"
        },
        0.3: {
          opacity: 1,
          rotateX: "-20deg"
        },
        1: {
          opacity: 0,
          rotateX: "90deg"
        }
      }),
      (t.flipOutY = {
        style: {
          backfaceVisibility: "visible",
          perspective: 400
        },
        0: {
          opacity: 1,
          rotateY: "0deg"
        },
        0.3: {
          opacity: 1,
          rotateY: "-20deg"
        },
        1: {
          opacity: 0,
          rotateY: "90deg"
        }
      });
  },
  function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.lightSpeedIn = {
      easing: "ease-out",
      0: {
        opacity: 0,
        translateX: 200,
        skewX: "-30deg"
      },
      0.6: {
        opacity: 1,
        translateX: 0,
        skewX: "20deg"
      },
      0.8: {
        skewX: "-5deg"
      },
      1: {
        opacity: 1,
        translateX: 0,
        skewX: "0deg"
      }
    }),
      (t.lightSpeedOut = {
        easing: "ease-in",
        0: {
          opacity: 1,
          translateX: 0,
          skewX: "0deg"
        },
        1: {
          opacity: 0,
          translateX: 200,
          skewX: "30deg"
        }
      });
  },
  function(e, t) {
    function n(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }

    function i(e, t) {
      return {
        from: n({}, e, t),
        to: n({}, e, 0)
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.slideInDown = i("translateY", -100)),
      (t.slideInUp = i("translateY", 100)),
      (t.slideInLeft = i("translateX", -100)),
      (t.slideInRight = i("translateX", 100));
  },
  function(e, t) {
    function n(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }

    function i(e, t) {
      return {
        from: n({}, e, 0),
        to: n({}, e, t)
      };
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    (t.slideOutDown = i("translateY", 100)),
      (t.slideOutUp = i("translateY", -100)),
      (t.slideOutLeft = i("translateX", -100)),
      (t.slideOutRight = i("translateX", 100));
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.zoomInRight = t.zoomInLeft = t.zoomInUp = t.zoomInDown = t.zoomIn = void 0);
    var i = n(0);

    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }

    function o(e, t) {
      var n = Math.min(1, Math.max(-1, t));
      return {
        easing: i.Easing.bezier(0.175, 0.885, 0.32, 1),
        0: a(
          {
            opacity: 0,
            scale: 0.1
          },
          e,
          -1e3 * n
        ),
        0.6: a(
          {
            opacity: 1,
            scale: 0.457
          },
          e,
          t
        ),
        1: a(
          {
            scale: 1
          },
          e,
          0
        )
      };
    }
    (t.zoomIn = {
      from: {
        opacity: 0,
        scale: 0.3
      },
      0.5: {
        opacity: 1
      },
      to: {
        opacity: 1,
        scale: 1
      }
    }),
      (t.zoomInDown = o("translateY", 60)),
      (t.zoomInUp = o("translateY", -60)),
      (t.zoomInLeft = o("translateX", 10)),
      (t.zoomInRight = o("translateX", -10));
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.zoomOutRight = t.zoomOutLeft = t.zoomOutUp = t.zoomOutDown = t.zoomOut = void 0);
    var i = n(0);

    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }

    function o(e, t) {
      var n = Math.min(1, Math.max(-1, t));
      return {
        easing: i.Easing.bezier(0.175, 0.885, 0.32, 1),
        0: a(
          {
            opacity: 1,
            scale: 1
          },
          e,
          0
        ),
        0.4: a(
          {
            opacity: 1,
            scale: 0.457
          },
          e,
          t
        ),
        1: a(
          {
            opacity: 0,
            scale: 0.1
          },
          e,
          -1e3 * n
        )
      };
    }
    (t.zoomOut = {
      from: {
        opacity: 1,
        scale: 1
      },
      0.5: {
        opacity: 1,
        scale: 0.3
      },
      to: {
        opacity: 0,
        scale: 0
      }
    }),
      (t.zoomOutDown = o("translateY", 60)),
      (t.zoomOutUp = o("translateY", -60)),
      (t.zoomOutLeft = o("translateX", 10)),
      (t.zoomOutRight = o("translateX", -10));
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = n(1),
      o = c(a),
      r = (c(n(4)), n(0)),
      s = c(n(34)),
      l = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(36)),
      u = (n(9), c(n(38)));

    function c(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    }
    var f = 0,
      p = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (
            (n.animateFadeIn = function(e) {
              n.state.animationFade && n.state.animationFade.stop();
              var t = r.Animated.timing(n.state.opacityFade, {
                toValue: 1,
                duration: 300
              });
              n.setState(
                {
                  animationFade: t
                },
                function() {
                  requestAnimationFrame(function() {
                    n.setState(
                      {
                        styleFade: {
                          display: "flex"
                        }
                      },
                      function() {
                        return n.state.animationFade.start(e);
                      }
                    );
                  });
                }
              );
            }),
            (n.animateFadeOut = function(e) {
              n.state.animationFade && n.state.animationFade.stop();
              var t = r.Animated.timing(n.state.opacityFade, {
                toValue: 0,
                duration: 300
              });
              n.setState(
                {
                  animationFade: t
                },
                function() {
                  requestAnimationFrame(function() {
                    n.state.animationFade.start(function() {
                      n.setState(
                        {
                          styleFade: {
                            display: "none"
                          }
                        },
                        e
                      );
                    });
                  });
                }
              );
            }),
            (n.animateSlideIn = function(e) {
              n.state.animationSlide && n.state.animationSlide.stop();
              var t = r.Animated.timing(n.state.slideTranslation, {
                toValue: 1,
                easing: r.Easing.out(r.Easing.poly(4)),
                duration: 300
              });
              n.setState(
                {
                  animationSlide: t
                },
                function() {
                  requestAnimationFrame(function() {
                    n.setState(
                      {
                        styleFade: {
                          display: "flex"
                        }
                      },
                      function() {
                        return n.state.animationSlide.start(e);
                      }
                    );
                  });
                }
              );
            }),
            (n.animateSlideOut = function(e) {
              n.state.animationSlide && n.state.animationSlide.stop();
              var t = r.Animated.timing(n.state.slideTranslation, {
                toValue: 0,
                easing: r.Easing.in(r.Easing.poly(4)),
                duration: 300
              });
              n.setState(
                {
                  animationSlide: t
                },
                function() {
                  requestAnimationFrame(function() {
                    n.state.animationSlide.start(function() {
                      n.setState(
                        {
                          styleFade: {
                            display: "none"
                          }
                        },
                        e
                      );
                    });
                  });
                }
              );
            }),
            (n.state = {
              animationSlide: null,
              animationFade: null,
              styleFade: {
                display: e.visible ? "flex" : "none"
              },
              opacityFade: new r.Animated.Value(0),
              slideTranslation: new r.Animated.Value(0)
            }),
            n
          );
        }
        return (
          (function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, a.Component),
          i(t, null, [
            {
              key: "setAppElement",
              value: function(e) {
                l.setElement(e);
              }
            }
          ]),
          i(t, [
            {
              key: "componentDidMount",
              value: function() {
                this.props.visible && this.handleShow();
              }
            },
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                var t = e.visible;
                t && !this.props.visible && this.handleShow(),
                  !t && this.props.visible && this.handleClose();
              }
            },
            {
              key: "handleShow",
              value: function() {
                var e = this.props,
                  t = e.animationType,
                  n = e.onShow,
                  i = e.ariaHideApp,
                  a = e.appElement;
                i && ((f += 1), l.hide(a)),
                  "slide" === t
                    ? this.animateSlideIn(n)
                    : "fade" === t
                    ? this.animateFadeIn(n)
                    : n();
              }
            },
            {
              key: "handleClose",
              value: function() {
                var e = this.props,
                  t = e.animationType,
                  n = e.onDismiss,
                  i = e.ariaHideApp,
                  a = e.appElement;
                "slide" === t
                  ? this.animateSlideOut(n)
                  : "fade" === t
                  ? this.animateFadeOut(n)
                  : n(),
                  i && f > 0 && 0 === (f -= 1) && l.show(a);
              }
            },
            {
              key: "getAnimationStyle",
              value: function() {
                var e = this.props,
                  t = e.visible,
                  n = e.animationType,
                  i = this.state.styleFade;
                return "slide" === n
                  ? [
                      {
                        transform: [
                          {
                            translateY: this.state.slideTranslation.interpolate(
                              {
                                inputRange: [0, 1],
                                outputRange: [
                                  r.Dimensions.get("window").height,
                                  0
                                ],
                                extrapolate: "clamp"
                              }
                            )
                          }
                        ]
                      },
                      i
                    ]
                  : "fade" === n
                  ? [
                      {
                        opacity: this.state.opacityFade
                      },
                      i
                    ]
                  : [u.default[t ? "visible" : "hidden"]];
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.transparent,
                  n = e.children,
                  i = t ? u.default.bgTransparent : u.default.bgNotTransparent,
                  a = this.getAnimationStyle();
                return o.default.createElement(
                  s.default,
                  null,
                  o.default.createElement(
                    r.Animated.View,
                    {
                      "aria-modal": "true",
                      style: [u.default.baseStyle, i, a]
                    },
                    n
                  )
                );
              }
            }
          ]),
          t
        );
      })();
    (p.defaultProps = {
      animationType: "none",
      transparent: !1,
      visible: !0,
      onShow: function() {},
      onRequestClose: function() {},
      onDismiss: function() {},
      ariaHideApp: !0,
      appElement: null
    }),
      (t.default = p),
      (p.propTypes = {}),
      (e.exports = t.default);
  },
  function(e, t, n) {
    "use strict";
    var i = n(33);

    function a() {}
    e.exports = function() {
      function e(e, t, n, a, o, r) {
        if (r !== i) {
          var s = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((s.name = "Invariant Violation"), s);
        }
      }

      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t
      };
      return (n.checkPropTypes = a), (n.PropTypes = n), n;
    };
  },
  function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      a = n(1),
      o = r(n(35));
    r(n(4));

    function r(e) {
      return e && e.__esModule
        ? e
        : {
            default: e
          };
    }

    function s(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var l = (function(e) {
      function t() {
        var e, n, i;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        for (var a = arguments.length, o = Array(a), r = 0; r < a; r++)
          o[r] = arguments[r];
        return (
          (n = i = s(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(o)
            )
          )),
          (i.state = {
            el: null,
            target: null
          }),
          s(i, n)
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, a.Component),
        i(t, [
          {
            key: "componentDidMount",
            value: function() {
              var e = this;
              this.setState(
                {
                  el: document.createElement("div"),
                  target: document.body
                },
                function() {
                  e.state.target.appendChild(e.state.el);
                }
              );
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              this.state.target && this.state.target.removeChild(this.state.el);
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props.children;
              return this.state.el
                ? o.default.createPortal(e, this.state.el)
                : null;
            }
          }
        ]),
        t
      );
    })();
    (t.default = l), (l.propTypes = {}), (e.exports = t.default);
  },
  function(e, t) {
    e.exports = require("react-dom");
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      (t.assertNodeList = r),
      (t.setElement = function(e) {
        var t = e;
        if ("string" == typeof t && a.canUseDOM) {
          var n = document.querySelectorAll(t);
          r(n, t), (t = "length" in n ? n[0] : n);
        }
        return (o = t || o);
      }),
      (t.validateElement = s),
      (t.hide = function(e) {
        s(e) && (e || o).setAttribute("aria-hidden", "true");
      }),
      (t.show = function(e) {
        s(e) && (e || o).removeAttribute("aria-hidden");
      }),
      (t.documentNotReadyOrSSRTesting = function() {
        o = null;
      }),
      (t.resetForTesting = function() {
        o = null;
      });
    var i = (function(e) {
        return e && e.__esModule
          ? e
          : {
              default: e
            };
      })(n(37)),
      a = n(9);
    var o = null;

    function r(e, t) {
      if (!e || !e.length)
        throw new Error(
          "modal-react-native-web: No elements were found for selector " +
            t +
            "."
        );
    }

    function s(e) {
      return (
        !(!e && !o) ||
        ((0, i.default)(
          !1,
          [
            "modal-react-native-web: App element is not defined.",
            "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
            "This is needed so screen readers don't see main content",
            "when modal is opened. It is not recommended, but you can opt-out",
            "by setting `ariaHideApp={false}`."
          ].join(" ")
        ),
        !1)
      );
    }
  },
  function(e, t, n) {
    "use strict";
    var i = function() {};
    e.exports = i;
  },
  function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = n(0);
    (t.default = i.StyleSheet.create({
      baseStyle: {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999
      },
      bgTransparent: {
        backgroundColor: "transparent"
      },
      bgNotTransparent: {
        backgroundColor: "#ffffff"
      },
      hidden: {
        display: "none"
      },
      visible: {
        display: "flex"
      }
    })),
      (e.exports = t.default);
  }
]);
