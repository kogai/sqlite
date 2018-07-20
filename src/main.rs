extern "C" {
    pub fn sqlite3_libversion_number() -> ::std::os::raw::c_int;
}

pub fn version() {
    println!("Hello with SQLite version {}", unsafe {
        sqlite3_libversion_number()
    });
}
