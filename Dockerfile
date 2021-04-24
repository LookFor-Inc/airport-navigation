FROM node:12-alpine as build

ARG NO_BUILD=false
ARG NPM_TOKEN

WORKDIR /app

COPY . /app/

RUN if [ "$NO_BUILD" = "false" ] ; then npm install ; else echo Skip install ; fi
RUN if [ "$NO_BUILD" = "false" ] ; then rm -r build ; else echo Skip remove ; fi
RUN if [ "$NO_BUILD" = "false" ] ; then npm run build ; else echo Skip build ; fi

FROM nginx:1.19.6

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf.template
COPY --from=build /app/build /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
