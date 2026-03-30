## Deployment

Run:
`sh
docker buildx build --platform linux/amd64 --load -t personal:1.0.2 .
`
(increase version number if needed)

Then run:
`sh
docker tag personal:1.0.2 europe-west3-docker.pkg.dev/hybrid-subject-491309-p9/personal/personal:1.0.2
`

Finally push to Google Container Registry:
`sh
docker push europe-west3-docker.pkg.dev/hybrid-subject-491309-p9/personal/personal:1.0.2
`
