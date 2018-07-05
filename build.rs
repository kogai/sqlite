pub fn main() {
  println!("cargo:rustc-link-lib={}", "sqlite3");
  println!(
    "cargo:rustc-link-search={}",
    "/Users/kogaishinichi/sqlite/libsqlite3-sys/sqlite3"
  );
}
