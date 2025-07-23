module.exports = function() {
  return {
    routes: [],
    root: '/',
    getFragment: function() {
      var fragment = '';
      fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
      return this.clearSlashes(fragment);
    },
    clearSlashes: function(path) {
      return path.toString().replace(/\/$/, '').replace(/^\//, '');
    },
    add: function(re, handler) {
      if(typeof re == 'function') {
        handler = re;
        re = '';
      }
      this.routes.push({ re: re, handler: handler});
      return this;
    },
    check: function(f, params) {
      var fragment = typeof f !== 'undefined' ? f.replace(/^\//, '') : this.getFragment(), vars;
      for(var i=0; i<this.routes.length; i++) {
        var match, re = this.routes[i].re;
        re = re.replace(/^\//, '');
        var vars = re.match(/:[^\s/]+/g);
        var r = new RegExp('^' + re.replace(/:[^\s/]+/g, '([\\w-]+)'));
        match = fragment.match(r);
        if(match) {
          match.shift();
          var matchObj = {};
          if(vars) {
            for(var j=0; j<vars.length; j++) {
              var v = vars[j];
              matchObj[v.substr(1, v.length)] = match[j];
            }
          }
          this.routes[i].handler.apply({}, (params || []).concat([matchObj]));
          return this;
        }
      }
      return false;
    },
    listen: function() {
      var self = this;
      var current = self.getFragment();
      var fn = function() {
        if(current !== self.getFragment()) {
          current = self.getFragment();
          self.check(current);
        }
      }
      clearInterval(this.interval);
      this.interval = setInterval(fn, 50);
      return this;
    },
    // SPA : 페이지를 다시 로드하지 않고 화면을 업데이트하는 것
    // pushState()를 사용하면 URL을 변경하면서도 전체 페이지 새로고침 없이 화면을 바꿀 수 있음
    // pushState는 SPA를 위한 도구
    navigate: function(path) {
      path = path ? path : '';
      history.pushState(null, null, this.root + this.clearSlashes(path));
      return this;
    }
  }
};