NAME := sqlite
FOSSIL := sqlite.fossil

SRC := $(shell find ./src -type f -name '*.rs')
SRC_SQLITE := $(shell find ./sqlite -type f -name '*')
PWD := $(shell pwd)
GIT_HASH := $(shell git log  --pretty=format:"%H" | head -n1)
OS := $(shell uname)
VERSION := $(shell cat Cargo.toml | grep version | sed -e 's/version\ =\ \"\(.*\)\"/\1/')

all: build/sqlite3.c

build/sqlite3.c: $(SRC_SQLITE)
	cd build && \
		../sqlite/configure && \
		make sqlite3.c

.PHONY: init
init:
	fossil clone https://www.sqlite.org/src sqlite/$(FOSSIL)
	cd sqlite && \
		fossil open $(FOSSIL)
