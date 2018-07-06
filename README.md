```sh
rustc \
  --crate-name sqlite \
  src/main.rs \
  --crate-type bin \
  --emit=dep-info,link \
  -C debuginfo=2 \
  -C metadata=2a2d2dd3b5987183 \
  --out-dir /Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps \
  --target wasm32-unknown-emscripten \
  -C incremental=/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/incremental \
  -L dependency=/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps \
  -L dependency=/Users/kogaishinichi/sqlite/target/debug/deps \
  -L /Users/kogaishinichi/sqlite/libsqlite3-sys/sqlite3 \
  -l sqlite3
```

```sh
"emcc" "-s"
"DISABLE_EXCEPTION_CATCHING=0"
"-L"
"/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.11r0bxsq81jskp3t.rcgu.o"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.1y16o1qfye96o7m0.rcgu.o"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.3rngp6bm2u2q5z0y.rcgu.o"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.4oc10dk278mpk1vy.rcgu.o"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.4xq48u46a1pwiqn7.rcgu.o"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.oa3rad818d8sgn4.rcgu.o"
"-o"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.js"
"-s"
"EXPORTED_FUNCTIONS=[\"_main\",\"_rust_eh_personality\"]"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.crate.allocator.rcgu.o"
"-O0"
"--memory-init-file"
"0"
"-g4"
"-s"
"DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=[]"
"-L"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps"
"-L"
"/Users/kogaishinichi/sqlite/target/debug/deps"
"-L"
"/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/librusqlite-31a5e12d835af219.rlib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/libtime-61dc4c4b7b1548bd.rlib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblibc-694a4cb49c14ce04.rlib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/libbitflags-18d80ea626da8763.rlib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblru_cache-422e3d25a2c5bfa3.rlib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblinked_hash_map-9a90e98b06d2b369.rlib"
"/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblibsqlite3_sys-7afc6da7f4ed0d3c.rlib"
"/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libstd-b5d3274a30b7d230.rlib" "/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libpanic_unwind-1e84ef3f2c2b62b2.rlib" "/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libunwind-87f9afb107133148.rlib"
"/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/liballoc_system-550141922e724881.rlib" "/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/liblibc-d08cc0cbef5060d6.rlib" "/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/liballoc-534d9162423c81f0.rlib" "/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libcore-b4f5d728d7462cba.rlib"
"/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libcompiler_builtins-d4e37ab81e33f633.rlib"
"-l"
"sqlite3"
"-l"
"c"
"-s"
"BINARYEN=1"
"-s"
"ERROR_ON_UNDEFINED_SYMBOLS=1"
```

$(EMCC) $(EMFLAGS) -s EXPORTED_FUNCTIONS=@exported_functions -s EXTRA_EXPORTED_RUNTIME_METHODS=@exported_runtime_methods c/extension-functions.bc c/sqlite3.bc --post-js js/api.js -o $@ ;\
$(EMCC) $(CFLAGS) c/sqlite3.c -o c/sqlite3.bc

sqlite

## Implicit dependencies

- fossil

emcc -s \
DISABLE_EXCEPTION_CATCHING=0 \
-L \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.11r0bxsq81jskp3t.rcgu.o \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.1y16o1qfye96o7m0.rcgu.o \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.3rngp6bm2u2q5z0y.rcgu.o \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.4oc10dk278mpk1vy.rcgu.o \ \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.4xq48u46a1pwiqn7.rcgu.o \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.oa3rad818d8sgn4.rcgu.o \
-o \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.js \
-s \
"EXPORTED_FUNCTIONS=[\"_main\",\"_rust_eh_personality\"]" \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/sqlite.crate.allocator.rcgu.o \
-O0 \
--memory-init-file \
0 \
-g4 \
-s \
"DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=[]" \
-L \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps \
-L \
/Users/kogaishinichi/sqlite/target/debug/deps \
-L \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/librusqlite-31a5e12d835af219.rlib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/libtime-61dc4c4b7b1548bd.rlib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblibc-694a4cb49c14ce04.rlib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/libbitflags-18d80ea626da8763.rlib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblru_cache-422e3d25a2c5bfa3.rlib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblinked_hash_map-9a90e98b06d2b369.rlib \
/Users/kogaishinichi/sqlite/target/wasm32-unknown-emscripten/debug/deps/liblibsqlite3_sys-7afc6da7f4ed0d3c.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libstd-b5d3274a30b7d230.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libpanic_unwind-1e84ef3f2c2b62b2.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libunwind-87f9afb107133148.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/liballoc_system-550141922e724881.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/liblibc-d08cc0cbef5060d6.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/liballoc-534d9162423c81f0.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libcore-b4f5d728d7462cba.rlib \
/Users/kogaishinichi/.rustup/toolchains/nightly-x86_64-apple-darwin/lib/rustlib/wasm32-unknown-emscripten/lib/libcompiler_builtins-d4e37ab81e33f633.rlib \
-l \
sqlite3 \
-l \
c \
-s \
BINARYEN=1 \
-s
