Discourse.Dialect.inlineRegexp({
  start: 'bug',
  matcher: /^(bug (\d+))(?!\w)/gm,
  wordBoundary: true,
  
  emitter: function(matches) {
    var bug = matches[1]; // e.g. bug 12345
    var number = matches[2] // e.g. 12345
    return ['a', {href: Discourse.SiteSettings.bugzilla_url + '/show_bug.cgi?id=' + number}, bug];
  }
});

var regex = /^bug (\d+)$/;

Discourse.Dialect.on("parseNode", function(event) {
  var node = event.node;
  var path = event.path;
  
  // We only care about links
  if (node[0] !== 'a') return;
  
  match = regex.exec(node[2]);
  
  if (match == null) return;
  
  node[1].title = "not what I want"
  
  Discourse.ajax({
    url: Discourse.SiteSettings.bugzilla_url + '/rest/bug/' + match[1] + '?include_fields=assigned_to,status,summary'
  }).then(function(data) {
    node[1].title = data.bugs[0].status + ', ' + data.bugs[0].assigned_to + ' - ' + data.bugs[0].summary;
  });
});
