var matcher = /^(bug (\d+))(?!\w)/gmi;
var emitter = function(matches) {
  var bug = matches[1]; // e.g. bug 12345
  var number = matches[2] // e.g. 12345
  return ['a', {href: Discourse.SiteSettings.bugzilla_url + '/show_bug.cgi?id=' + number}, bug];
}

Discourse.Dialect.inlineRegexp({
  start: 'bug',
  matcher: matcher,
  wordBoundary: true,
  
  emitter: emitter
});

Discourse.Dialect.inlineRegexp({
  start: 'Bug',
  matcher: matcher,
  wordBoundary: true,
  
  emitter: emitter
});

Discourse.Dialect.inlineRegexp({
  start: 'BUG',
  matcher: matcher,
  wordBoundary: true,
  
  emitter: emitter
});
