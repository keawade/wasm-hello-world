# wasm-hello-world

# Instructions

## Setup WASM Toolchain

1. [Download the Portable Emscripten SDK for Linux and OS X.](https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz) (Documentation)[http://kripken.github.io/emscripten-site/index.html]
2. `tar -xvf emsdk-portable.tar.gz`
3. `cd emsdk-portable`
4. `./emsdk update`
5. `./emsdk install latest`
6. `./emsdk activate latest`
7. `source ./emsdk_env.sh`

*For more information regarding the WASM toolchain, see [**WebAssembly 101: a developer's first steps**](http://blog.openbloc.fr/webassembly-first-steps/).*

## Compile C

1. Navigate to containing directory
2. `emcc counter.c -01 -o counter.wasm -s WASM=1 -s SIDE_MODULE=1`

## Build JS Bundle with Webpack

1. `yarn`
2. `yarn build`
3. Open `dist/index.html`
