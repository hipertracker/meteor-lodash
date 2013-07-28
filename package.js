Package.describe({
  summary: "Lo-Dash like Underscore.js but faster and more consistent"
});

Npm.depends({'lodash': '1.3.1'});

Package.on_use(function (api) {
  api.add_files(["lib/lodash.js"], ["client", "server"]);
});