## The Story of Keswick Hall  

A rebuild based off of data collected from Wayback Machine (html, styles, images) using Gatsby.

### Deploying

CircleCI integrations will automatically build and deploy the site to AWS.

1. To deploy to `staging.storyofkeswick.com`, commit to the `develop` branch.
2. To deploy to `storyofkeswick.com` and invalidate the cloudfront distribution, tag any branch starting with `production-`.
