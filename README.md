# Discourse Bugzilla
*Discourse plugin to make it play nice with Bugzilla*

**Mentor**: [Leo McArdle](https://mozillians.org/u/leo/ )

**Good first bugs**: https://github.com/Mozilla-cIT/discourse-bugzilla/labels/good%20first%20bug

**Description**: The Bugzilla plugin adds various features to Discourse enhancing how it works with Bugzilla by default.

# Usage

Simply type `bug` followed by the id of the bug you want to link to and it will automagically turn into a link.

# Installation

Add the plugin's repo url to your container's `app.yml` file:

```yml
hooks:
  after_code:
    - exec:
        cd: $home/plugins
        cmd:
          - mkdir -p plugins
          - git clone https://github.com/discourse/docker_manager.git
          - git clone https://github.com/Mozilla-cIT/discourse-bugzilla.git
```

Rebuild the container:

```
cd /var/docker
git pull
./launcher rebuild app
```

# Licence

[MPL 2.0](https://www.mozilla.org/MPL/2.0/)
