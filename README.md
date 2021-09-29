# The Web Ethics Commitment Project

![Current GitHub Pages Deployment Status](https://github.com/DrunkenUX/web-ethics-commitment/actions/workflows/build.yml/badge.svg)

Ethical design and development of projects that power the web is more important now than ever. As the footprint grows, and new tools and techniques become available, so, too, do the opportunities for abuse. This site is designed to outline guiding behavior for web professionals, and provide references to supporting materials, so that you can help others commit to creating a web that is better for all of us. ~~This repo provides the source for webethicscommitment.com.~~

## Contributing

### Add Your Endorsement of Our Ethical Principles

#### If you're not familiar with Git

This process will be easier for designers and others not familiar with making code edits and commits, however may be slower for getting your endorsement added to the site.

 * [Log an Issue](https://github.com/DrunkenUX/web-ethics-commitment/issues) in this repo that indicates that you want to sign
 * ~~Send an email to [ethics@drunkenux.com](mailto:ethics@drunkenux.com?subject=Ethics%20Endorsement) to indicate that you want to sign. Include "Ethics Endorsement" or something similarly obvious in the subject.~~ 
 * Send a Twitter direct message to [@DrunkenUX](https://twitter.com/drunkenux) to indicate that you want to sign

#### If you're comfortable with Git

Look for the `/src/signatories.md` file and jump to the bottom of it. You'll find the file is an ordered list. Add your name to the bottom of that list with the next number, in the following format:  Name, Title, Organization. For example: `Jane Williams, CFO, Powerful LLC`.  *You are not required to list a company or job title if you are not comfortable with it.* In that case, just note it as `Jane Williams, self`.

Links, emojis, and other formatting will be removed before publishing.

Please use the PR process described below, issuing your PR against the `develop` branch.

### Design and/or Code

We welcome contributions to the design and/or code of the site, including suggestions for improvements, performance enhancements, and anything else to the build, CSS, etc. When considering suggesting changes to the site, please consider following these steps:

1. Check to see if there is already an issue for the suggestion you want to make. If there isn't, [log an Issue](https://github.com/DrunkenUX/web-ethics-commitment/issues) that describes the change you want to make and a dev will review the request and tag it accordingly.
2. Create a fork or branch for that issue.
3. Issue a pull request (PR) against the `develop` branch that is *solely focused* on the issue you're working against.
4. A repo admin will either approve the PR or suggestion revisions, and once complete, it will be merged into `develop`
5. From there, it will be scheduled for the next convenient PR to release the change from `develop` to `main`.
6. When the PR to `main` has passed, it will automatically deploy.
