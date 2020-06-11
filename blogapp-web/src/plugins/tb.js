/*! 2020-06-10 16:02:32 v8.14.1 */ ! function ( e ) {
	function i( n ) {
		if ( o[ n ] ) return o[ n ].exports;
		var r = o[ n ] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return e[ n ].call( r.exports, r, r.exports, i ), r.loaded = !0, r.exports
	}
	var o = {};
	return i.m = e, i.c = o, i.p = "", i( 0 )
}( [ function ( e, i ) {
	"use strict";
	var o = window,
		n = document;
	! function ( ) {
		var e = 2,
			r = "ali_analytics";
		if ( o[ r ] && o[ r ].ua && e <= o[ r ].ua.version ) return void( i.info = o[ r ].ua );
		var t, a, d, s, c, u, h, l, m, b, f, v, p, w, g, x, z, O = o.navigator,
			k = O.appVersion,
			T = O && O.userAgent || "",
			y = function ( e ) {
				var i = 0;
				return parseFloat( e.replace( /\./g, function ( ) {
					return 0 === i++ ? "." : ""
				} ) )
			},
			_ = function ( e, i ) {
				var o, n;
				i[ o = "trident" ] = .1, ( n = e.match( /Trident\/([\d.]*)/ ) ) && n[ 1 ] && ( i[ o ] = y( n[ 1 ] ) ), i.core = o
			},
			N = function ( e ) {
				var i, o;
				return ( i = e.match( /MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/ ) ) && ( o = i[ 1 ] || i[ 2 ] ) ? y( o ) : 0
			},
			P = function ( e ) {
				return e || "other"
			},
			M = function ( e ) {
				function i( ) {
					for ( var i = [
							[ "Windows NT 5.1", "winXP" ],
							[ "Windows NT 6.1", "win7" ],
							[ "Windows NT 6.0", "winVista" ],
							[ "Windows NT 6.2", "win8" ],
							[ "Windows NT 10.0", "win10" ],
							[ "iPad", "ios" ],
							[ "iPhone;", "ios" ],
							[ "iPod", "ios" ],
							[ "Macintosh", "mac" ],
							[ "Android", "android" ],
							[ "Ubuntu", "ubuntu" ],
							[ "Linux", "linux" ],
							[ "Windows NT 5.2", "win2003" ],
							[ "Windows NT 5.0", "win2000" ],
							[ "Windows", "winOther" ],
							[ "rhino", "rhino" ]
						], o = 0, n = i.length; o < n; ++o )
						if ( e.indexOf( i[ o ][ 0 ] ) !== -1 ) return i[ o ][ 1 ];
					return "other"
				}

				function r( e, i, n, r ) {
					var t, a = o.navigator.mimeTypes;
					try {
						for ( t in a )
							if ( a.hasOwnProperty( t ) && a[ t ][ e ] == i ) {
								if ( void 0 !== n && r.test( a[ t ][ n ] ) ) return !0;
								if ( void 0 === n ) return !0
							} return !1
					} catch ( e ) {
						return !1
					}
				}
				var t, a, d, s, c, u, h, l = "",
					m = l,
					b = l,
					f = [ 6, 9 ],
					v = "{{version}}",
					p = "<!--[if IE " + v + "]><s></s><![endif]-->",
					w = n && n.createElement( "div" ),
					g = [ ],
					x = {
						webkit: void 0,
						edge: void 0,
						trident: void 0,
						gecko: void 0,
						presto: void 0,
						chrome: void 0,
						safari: void 0,
						firefox: void 0,
						ie: void 0,
						ieMode: void 0,
						opera: void 0,
						mobile: void 0,
						core: void 0,
						shell: void 0,
						phantomjs: void 0,
						os: void 0,
						ipad: void 0,
						iphone: void 0,
						ipod: void 0,
						ios: void 0,
						android: void 0,
						nodejs: void 0,
						extraName: void 0,
						extraVersion: void 0
					};
				if ( w && w.getElementsByTagName && ( w.innerHTML = p.replace( v, "" ), g = w.getElementsByTagName( "s" ) ), g.length >
					0 ) {
					for ( _( e, x ), s = f[ 0 ], c = f[ 1 ]; s <= c; s++ )
						if ( w.innerHTML = p.replace( v, s ), g.length > 0 ) {
							x[ b = "ie" ] = s;
							break
						}! x.ie && ( d = N( e ) ) && ( x[ b = "ie" ] = d )
				} else( ( a = e.match( /AppleWebKit\/*\s*([\d.]*)/i ) ) || ( a = e.match( /Safari\/([\d.]*)/ ) ) ) && a[ 1 ] ? (
						x[ m = "webkit" ] = y( a[ 1 ] ), ( a = e.match( /OPR\/(\d+\.\d+)/ ) ) && a[ 1 ] ? x[ b = "opera" ] = y( a[ 1 ] ) :
						( a = e.match( /Chrome\/([\d.]*)/ ) ) && a[ 1 ] ? x[ b = "chrome" ] = y( a[ 1 ] ) : ( a = e.match(
							/\/([\d.]*) Safari/ ) ) && a[ 1 ] ? x[ b = "safari" ] = y( a[ 1 ] ) : x.safari = x.webkit, ( a = e.match(
							/Edge\/([\d.]*)/ ) ) && a[ 1 ] && ( m = b = "edge", x[ m ] = y( a[ 1 ] ) ), / Mobile\//.test( e ) && e.match(
							/iPad|iPod|iPhone/ ) ? ( x.mobile = "apple", a = e.match( /OS ([^\s]*)/ ), a && a[ 1 ] && ( x.ios = y( a[ 1 ].replace(
							"_", "." ) ) ), t = "ios", a = e.match( /iPad|iPod|iPhone/ ), a && a[ 0 ] && ( x[ a[ 0 ].toLowerCase( ) ] = x
						.ios ) ) : / Android/i.test( e ) ? ( /Mobile/.test( e ) && ( t = x.mobile = "android" ), a = e.match(
							/Android ([^\s]*);/ ), a && a[ 1 ] && ( x.android = y( a[ 1 ] ) ) ) : ( a = e.match(
							/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/ ) ) && ( x.mobile = a[ 0 ].toLowerCase( ) ), ( a = e.match(
							/PhantomJS\/([^\s]*)/ ) ) && a[ 1 ] && ( x.phantomjs = y( a[ 1 ] ) ) ) : ( a = e.match( /Presto\/([\d.]*)/ ) ) &&
					a[ 1 ] ? ( x[ m = "presto" ] = y( a[ 1 ] ), ( a = e.match( /Opera\/([\d.]*)/ ) ) && a[ 1 ] && ( x[ b = "opera" ] =
						y( a[ 1 ] ), ( a = e.match( /Opera\/.* Version\/([\d.]*)/ ) ) && a[ 1 ] && ( x[ b ] = y( a[ 1 ] ) ), ( a = e.match(
							/Opera Mini[^;]*/ ) ) && a ? x.mobile = a[ 0 ].toLowerCase( ) : ( a = e.match( /Opera Mobi[^;]*/ ) ) && a &&
						( x.mobile = a[ 0 ] ) ) ) : ( d = N( e ) ) ? ( x[ b = "ie" ] = d, _( e, x ) ) : ( a = e.match( /Gecko/ ) ) && (
						x[ m = "gecko" ] = .1, ( a = e.match( /rv:([\d.]*)/ ) ) && a[ 1 ] && ( x[ m ] = y( a[ 1 ] ), /Mobile|Tablet/.test(
							e ) && ( x.mobile = "firefox" ) ), ( a = e.match( /Firefox\/([\d.]*)/ ) ) && a[ 1 ] && ( x[ b = "firefox" ] =
							y( a[ 1 ] ) ) );
				t || ( t = i( ) );
				var z, O, T;
				if ( !r( "type", "application/vnd.chromium.remoting-viewer" ) ) {
					z = "scoped" in n.createElement( "style" ), T = "v8Locale" in o;
					try {
						O = o.external || void 0
					} catch ( e ) {}
					if ( a = e.match( /360SE/ ) ) u = "360";
					else if ( ( a = e.match( /SE\s([\d.]*)/ ) ) || O && "SEVersion" in O ) u = "sougou", h = y( a[ 1 ] ) || .1;
					else if ( ( a = e.match( /Maxthon(?:\/)+([\d.]*)/ ) ) && O ) {
						u = "maxthon";
						try {
							h = y( O.max_version || a[ 1 ] )
						} catch ( e ) {
							h = .1
						}
					} else z && T ? u = "360se" : z || T || !/Gecko\)\s+Chrome/.test( k ) || x.opera || x.edge || ( u = "360ee" )
				}( a = e.match( /TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/ ) ) ? ( u = "tt", h = y( a[ 2 ] ) || .1 ) : ( a =
					e.match( /LBBROWSER/ ) ) || O && "LiebaoGetVersion" in O ? u = "liebao" : ( a = e.match( /TheWorld/ ) ) ? ( u =
						"theworld", h = 3 ) : ( a = e.match( /TaoBrowser\/([\d.]*)/ ) ) ? ( u = "taobao", h = y( a[ 1 ] ) || .1 ) : ( a =
						e.match( /UCBrowser\/([\d.]*)/ ) ) && ( u = "uc", h = y( a[ 1 ] ) || .1 ), x.os = t, x.core = x.core || m, x.shell =
					b, x.ieMode = x.ie && n.documentMode || x.ie, x.extraName = u, x.extraVersion = h;
				var P = o.screen.width,
					M = o.screen.height;
				return x.resolution = P + "x" + M, x
			},
			S = function ( e ) {
				function i( e ) {
					return Object.prototype.toString.call( e )
				}

				function o( e, o, n ) {
					if ( "[object Function]" == i( o ) && ( o = o( n ) ), !o ) return null;
					var r = {
							name: e,
							version: ""
						},
						t = i( o );
					if ( o === !0 ) return r;
					if ( "[object String]" === t ) {
						if ( n.indexOf( o ) !== -1 ) return r
					} else if ( o.exec ) {
						var a = o.exec( n );
						if ( a ) return a.length >= 2 && a[ 1 ] ? r.version = a[ 1 ].replace( /_/g, "." ) : r.version = "", r
					}
				}
				var n = {
					name: "other",
					version: ""
				};
				e = ( e || "" ).toLowerCase( );
				for ( var r = [
						[ "nokia", function ( e ) {
							return e.indexOf( "nokia " ) !== -1 ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
						} ],
						[ "samsung", function ( e ) {
							return e.indexOf( "samsung" ) !== -1 ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ :
								/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
						} ],
						[ "wp", function ( e ) {
							return e.indexOf( "windows phone " ) !== -1 || e.indexOf( "xblwp" ) !== -1 || e.indexOf( "zunewp" ) !== -1 ||
								e.indexOf( "windows ce" ) !== -1
						} ],
						[ "pc", "windows" ],
						[ "ipad", "ipad" ],
						[ "ipod", "ipod" ],
						[ "iphone", /\biphone\b|\biph(\d)/ ],
						[ "mac", "macintosh" ],
						[ "mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/ ],
						[ "hongmi", /\bhm[ \-]?([a-z0-9]+)/ ],
						[ "aliyun", /\baliyunos\b(?:[\-](\d+))?/ ],
						[ "meizu", function ( e ) {
							return e.indexOf( "meizu" ) >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9x]{1,3})\b/
						} ],
						[ "nexus", /\bnexus ([0-9s.]+)/ ],
						[ "huawei", function ( e ) {
							var i = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
							return e.indexOf( "huawei-huawei" ) !== -1 ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : i.test( e ) ? i :
								/\bhuawei[ _\-]?([a-z0-9]+)/
						} ],
						[ "lenovo", function ( e ) {
							return e.indexOf( "lenovo-lenovo" ) !== -1 ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ :
								/\blenovo[ \-]?([a-z0-9]+)/
						} ],
						[ "zte", function ( e ) {
							return /\bzte\-[tu]/.test( e ) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
						} ],
						[ "vivo", /\bvivo(?: ([a-z0-9]+))?/ ],
						[ "htc", function ( e ) {
							return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test( e ) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ :
								/\bhtc[ _\-]?([a-z0-9 ]+)/
						} ],
						[ "oppo", /\boppo[_]([a-z0-9]+)/ ],
						[ "konka", /\bkonka[_\-]([a-z0-9]+)/ ],
						[ "sonyericsson", /\bmt([a-z0-9]+)/ ],
						[ "coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/ ],
						[ "lg", /\blg[\-]([a-z0-9]+)/ ],
						[ "android", /\bandroid\b|\badr\b/ ],
						[ "blackberry", function ( e ) {
							return e.indexOf( "blackberry" ) >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
						} ]
					], t = 0; t < r.length; t++ ) {
					var a = r[ t ][ 0 ],
						d = r[ t ][ 1 ],
						s = o( a, d, e );
					if ( s ) {
						n = s;
						break
					}
				}
				return n
			},
			E = 1;
		try {
			t = M( T ), a = S( T ), d = t.os, s = t.shell, c = t.core, u = t.resolution, h = t.extraName, l = t.extraVersion,
				m = a.name, b = a.version, v = d ? d + ( t[ d ] ? t[ d ] : "" ) : "", p = s ? s + parseInt( t[ s ] ) : "", w = c,
				g = u, x = h ? h + ( l ? parseInt( l ) : "" ) : "", z = m + b
		} catch ( e ) {}
		f = {
				p: E,
				o: P( v ),
				b: P( p ),
				w: P( w ),
				s: g,
				mx: x,
				ism: z
			}, o[ r ] || ( o[ r ] = {} ), o[ r ].ua || ( o[ r ].ua = {} ), o.goldlog || ( o.goldlog = {} ), i.info = o[ r ].ua =
			goldlog._aplus_client = {
				version: e,
				ua_info: f
			}
	}( )
} ] ); /*! 2017-10-31 20:15:15 v0.2.4 */
! function ( t ) {
	function e( o ) {
		if ( n[ o ] ) return n[ o ].exports;
		var i = n[ o ] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return t[ o ].call( i.exports, i, i.exports, e ), i.loaded = !0, i.exports
	}
	var n = {};
	return e.m = t, e.c = n, e.p = "", e( 0 )
}( [ function ( t, e, n ) {
	"use strict";
	! function ( ) {
		var t = window.goldlog || ( window.goldlog = {} );
		t._aplus_cplugin_utilkit || ( t._aplus_cplugin_utilkit = {
			status: "init"
		}, n( 1 ).init( t ), t._aplus_cplugin_utilkit.status = "complete" )
	}( )
}, function ( t, e, n ) {
	"use strict";
	var o = n( 2 ),
		i = n( 4 );
	e.init = function ( t ) {
		t.setCookie = o.setCookie, t.getCookie = o.getCookie, t.on = i.on
	}
}, function ( t, e, n ) {
	"use strict";
	var o = document,
		i = n( 3 ),
		a = function ( t ) {
			var e = new RegExp( "(?:^|;)\\s*" + t + "=([^;]+)" ),
				n = o.cookie.match( e );
			return n ? n[ 1 ] : ""
		};
	e.getCookie = a;
	var r = function ( t, e, n ) {
		n || ( n = {} );
		var i = new Date;
		return n.expires && ( "number" == typeof n.expires || n.expires.toUTCString ) ? ( "number" == typeof n.expires ? i
			.setTime( i.getTime( ) + 24 * n.expires * 60 * 60 * 1e3 ) : i = n.expires, e += "; expires=" + i.toUTCString( ) ) :
			"session" !== n.expires && ( i.setTime( i.getTime( ) + 63072e7 ), e += "; expires=" + i.toUTCString( ) ), e +=
			"; path=" + ( n.path ? n.path : "/" ), e += "; domain=" + n.domain, o.cookie = t + "=" + e, a( t )
	};
	e.setCookie = function ( t, e, n ) {
		try {
			if ( n || ( n = {} ), n.domain ) r( t, e, n );
			else
				for ( var o = i.getDomains( ), a = 0; a < o.length; ) n.domain = o[ a ], r( t, e, n ) ? a = o.length : a++
		} catch ( t ) {}
	}
}, function ( t, e ) {
	"use strict";
	e.getDomains = function ( ) {
		var t = [ ];
		try {
			for ( var e = location.hostname, n = e.split( "." ), o = 2; o <= n.length; ) t.push( n.slice( n.length - o ).join(
				"." ) ), o++
		} catch ( t ) {}
		return t
	}
}, function ( t, e ) {
	"use strict";
	var n = window,
		o = document,
		i = !!o.attachEvent,
		a = "attachEvent",
		r = "addEventListener",
		c = i ? a : r,
		u = function ( t, e ) {
			var n = goldlog._$ || {},
				o = n.meta_info || {},
				i = o.aplus_ctap || {};
			if ( i && "function" == typeof i.on ) i.on( t, e );
			else {
				var a = "ontouchend" in document.createElement( "div" ),
					r = a ? "touchstart" : "mousedown";
				s( t, r, e )
			}
		},
		s = function ( t, e, o ) {
			return "tap" === e ? void u( t, o ) : void t[ c ]( ( i ? "on" : "" ) + e, function ( t ) {
				t = t || n.event;
				var e = t.target || t.srcElement;
				"function" == typeof o && o( t, e )
			}, !1 )
		};
	e.on = s;
	var d = function ( t ) {
			try {
				o.documentElement.doScroll( "left" )
			} catch ( e ) {
				return void setTimeout( function ( ) {
					d( t )
				}, 1 )
			}
			t( )
		},
		l = function ( t ) {
			var e = 0,
				n = function ( ) {
					0 === e && t( ), e++
				};
			"complete" === o.readyState && n( );
			var i;
			if ( o.addEventListener ) i = function ( ) {
				o.removeEventListener( "DOMContentLoaded", i, !1 ), n( )
			}, o.addEventListener( "DOMContentLoaded", i, !1 ), window.addEventListener( "load", n, !1 );
			else if ( o.attachEvent ) {
				i = function ( ) {
					"complete" === o.readyState && ( o.detachEvent( "onreadystatechange", i ), n( ) )
				}, o.attachEvent( "onreadystatechange", i ), window.attachEvent( "onload", n );
				var a = !1;
				try {
					a = null === window.frameElement
				} catch ( t ) {}
				o.documentElement.doScroll && a && d( n )
			}
		};
	e.DOMReady = function ( t ) {
		l( t )
	}, e.onload = function ( t ) {
		"complete" === o.readyState ? t( ) : s( n, "load", t )
	}
} ] );
! function ( o ) {
	function t( r ) {
		if ( e[ r ] ) return e[ r ].exports;
		var a = e[ r ] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return o[ r ].call( a.exports, a, a.exports, t ), a.loaded = !0, a.exports
	}
	var e = {};
	return t.m = o, t.c = e, t.p = "", t( 0 )
}( [ function ( o, t, e ) {
			"use strict";
			!func…
