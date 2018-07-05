pub fn main() {
  let link_lib = "libsqlite3-sys/sqlite3";
  println!("cargo:rustc-link-lib={}", link_lib);
  // println!("cargo:rustc-link-search={}", dir);
}
