(this.webpackJsonpreact_hw_4_movies=this.webpackJsonpreact_hw_4_movies||[]).push([[5],{30:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return u}));var c=n(35),r=n.n(c),a=function(){return r.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=71440d8aca024081c5cc5f02da2f3d93").then((function(t){return t.data.results})).catch(console.error)},i=function(t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=71440d8aca024081c5cc5f02da2f3d93")).then((function(t){return t.data})).catch(console.error)},o=function(t){return r.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=71440d8aca024081c5cc5f02da2f3d93&language=en-US")).then((function(t){return t.data})).catch(console.error)},u=function(t){return r.a.get("https://api.themoviedb.org/3/search/movie?api_key=71440d8aca024081c5cc5f02da2f3d93&language=en-US&page=1&query=".concat(t)).then((function(t){return t.data})).catch(console.error)}},65:function(t,e,n){"use strict";n.r(e);var c=n(31),r=n(32),a=n(34),i=n(33),o=n(0),u=n(8),s=n(30),d=n(3),f=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={films:[]},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;s.c().then((function(e){return t.setState({films:e})}))}},{key:"componentDidUpdate",value:function(t){var e=this,n=this.state.film;t.film!==n&&s.c().then((function(t){return e.setState({film:t})}))}},{key:"render",value:function(){var t=this.state.films;return Object(d.jsx)("div",{children:t&&Object(d.jsx)("ul",{children:t.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(u.c,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})})}}]),n}(o.Component);e.default=f}}]);
//# sourceMappingURL=5.077de11f.chunk.js.map