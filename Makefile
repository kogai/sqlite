NAME := sqlite
FOSSIL := sqlite.fossil

SRC := $(shell find ./src -type f -name '*.rs')
SRC_SQLITE := $(shell find ./sqlite -type f -name '*')
TARGET := wasm32-unknown-emscripten
PWD := $(shell pwd)
GIT_HASH := $(shell git log  --pretty=format:"%H" | head -n1)
OS := $(shell uname)
VERSION := $(shell cat Cargo.toml | grep version | sed -e 's/version\ =\ \"\(.*\)\"/\1/')

.PHONY: all
all: $(NAME).wasm

.PHONY: $(NAME).wasm
$(NAME).wasm: $(SRC)
	source ~/emsdk/emsdk_env.sh && \
	SQLITE3_LIB_DIR=~/rusqlite/libsqlite3-sys/sqlite3/ && \
	cargo build --target $(TARGET)
	cp target/$(TARGET)/debug/$(NAME).wasm ./$(NAME).wasm

build/sqlite3.c: $(SRC_SQLITE)
	cd build && \
		../sqlite/configure && \
		make sqlite3.c

.PHONY: init
init:
	fossil clone https://www.sqlite.org/src sqlite/$(FOSSIL)
	cd sqlite && \
		fossil open $(FOSSIL)
