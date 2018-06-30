NAME := sqlite
# First create a directory in which to place
# the build products.  It is recommended, but not required, that the
# build directory be separate from the source directory.  Cd into the
# build directory and then from the build directory run the configure
# script found at the root of the source tree.  Then run "make".

# For example:

#         tar xzf sqlite.tar.gz    ;#  Unpack the source tree into "sqlite"
#         mkdir bld                ;#  Build will occur in a sibling directory
#         cd bld                   ;#  Change to the build directory
#         ../sqlite/configure      ;#  Run the configure script
#         make                     ;#  Run the makefile.
#         make sqlite3.c           ;#  Build the "amalgamation" source file
#         make test                ;#  Run some tests (requires Tcl)
.PHONY: init
init:
	git submodule init
	git submodule update
