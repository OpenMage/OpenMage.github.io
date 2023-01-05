This project is the source code for rendering the OpenMage public site at https://www.openmage.org

# How to edit / contribute 

This project is powered by [GitHub Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/). Please refer to those projects for detailed documentation.

The Jekyll app which is used for local development has been Dockerized, so to perform development on a local instance:

1. Make sure you have Docker and Docker Compose installed
2. Checkout this repo into a directory on your local machine
3. Make sure port 4000 is unused
4. Run the Docker Compose project

```
cd OpenMage.github.io
docker-compose up -d
```

See your live modifications via http://127.0.0.1:4000 (or the IP/host of your docker exposed port if you have an uncommon Docker setup).
