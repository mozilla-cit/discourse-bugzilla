Discourse.Dialect.inlineRegexp({
  start: 'bug',
  matcher: /^(bug (\d+))(?!\w)/gm,
  wordBoundary: true,
  
  emitter: function(matches) {
    var bug = matches[1]; // e.g. bug 12345
    var number = matches[2] // e.g. 12345
    return ['a', {href: Discourse.SiteSettings.bugzilla_base + number}, bug];
  }
});
