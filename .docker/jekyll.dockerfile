FROM ruby:2.5

RUN apt-get update \
  && apt-get install -y \
    git \
    locales \
    make \
    nodejs


RUN \
  echo "en_US UTF-8" > /etc/locale.gen && \
  locale-gen en-US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_ALL en_US.UTF-8


COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install --gemfile=

RUN apt-get clean && \
	rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 4000

ENTRYPOINT ["bundle", "exec"]

CMD ["jekyll", "serve","--host=0.0.0.0"]
