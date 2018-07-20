NAME := sqlite
EMCC := emcc
FOSSIL := sqlite.fossil
CFLAGS=-O2 -DSQLITE_OMIT_LOAD_EXTENSION -DSQLITE_DISABLE_LFS -DLONGDOUBLE_TYPE=double -DSQLITE_THREADSAFE=0 -DSQLITE_ENABLE_FTS3 -DSQLITE_ENABLE_FTS3_PARENTHESIS

SRC := $(shell find ./src -type f -name '*.rs')
SRC_SQLITE := $(shell find ./sqlite -type f -name '*')
# TARGET := wasm32-unknown-unknown
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
	cargo build --target $(TARGET) --verbose
	# cp target/$(TARGET)/debug/$(NAME).wasm ./$(NAME).wasm
		# $(EMCC) $(EMFLAGS) -s EXPORTED_FUNCTIONS=@exported_functions -s EXTRA_EXPORTED_RUNTIME_METHODS=@exported_runtime_methods c/extension-functions.bc c/sqlite3.bc --post-js js/api.js -o $@ ;\


build/sqlite3.c: $(SRC_SQLITE)
	cd build && \
		../sqlite/configure && \
		make sqlite3.c

libsqlite3-sys/sqlite3/sqlite3.bc: build/sqlite3.c
	source ~/emsdk/emsdk_env.sh && \
	$(EMCC) $(CFLAGS) libsqlite3-sys/sqlite3/sqlite3.c -o sqlite3.bc

libsqlite3-sys/sqlite3/sqlite3.dl: build/sqlite3.c
	source ~/emsdk/emsdk_env.sh && \
	$(EMCC) $(CFLAGS) libsqlite3-sys/sqlite3/sqlite3.c # -o sqlite3.bc

.PHONY: tmp
tmp:
	rustc --crate-type=staticlib --emit=llvm-bc --target=asmjs-unknown-emscripten src/main.rs
	# rustc --emit=llvm-bc src/main.rs
	# rustc --emit=llvm-bc --target=$(TARGET) src/main.rs
	# $(EMCC) -s BINARYEN=1 -s ERROR_ON_UNDEFINED_SYMBOLS=1 main.bc # -o $(NAME).wasm
	$(EMCC) -s BINARYEN=1 main.bc # -o $(NAME).wasm
	# rustc --crate-type=lib --target wasm32-unknown-unknown --emit llvm-bc src/lib.rs -o foo.bc
	# # rustc --crate-type=lib --target wasm32-unknown-unknown --emit llvm-bc src/lib.rs -o foo.bc
	# # rustc --crate-type=lib --emit llvm-bc src/lib.rs -o foo.bc
	# source ~/emsdk/emsdk_env.sh && \
	# $(EMCC) -s BINARYEN=1 -s ERROR_ON_UNDEFINED_SYMBOLS=1 foo.bc # -o $(NAME).wasm
# $(EMCC) $(EMFLAGS) -s EXPORTED_FUNCTIONS=@exported_functions -s EXTRA_EXPORTED_RUNTIME_METHODS=@exported_runtime_methods c/extension-functions.bc c/sqlite3.bc --post-js js/api.js -o $@ ;\

.PHONY: init
init:
	fossil clone https://www.sqlite.org/src sqlite/$(FOSSIL)
	cd sqlite && \
		fossil open $(FOSSIL)
