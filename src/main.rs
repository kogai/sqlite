// extern crate rusqlite;
extern "C" {
    pub fn sqlite3_libversion_number() -> ::std::os::raw::c_int;
}

// use std::ffi::CStr;

/// Returns the SQLite version as an integer; e.g., `3016002` for version 3.16.2.
///
/// See [`sqlite3_libversion_number()`](https://www.sqlite.org/c3ref/libversion.html).
pub fn version_number() -> i32 {
    unsafe { sqlite3_libversion_number() }
}

/// Returns the SQLite version as a string; e.g., `"3.16.2"` for version 3.16.2.
///
/// See [`sqlite3_libversion()`](https://www.sqlite.org/c3ref/libversion.html).
// pub fn version() -> &'static str {
//     let cstr = unsafe { CStr::from_ptr(ffi::sqlite3_libversion()) };
//     cstr.to_str()
//         .expect("SQLite version string is not valid UTF8 ?!")
// }

fn main() {
    println!("Hello with SQLite version {}", version_number());
    // println!("Hello with SQLite version {}", 1);
}

// #[no_mangle]
// pub fn version() -> i32 {
//     rusqlite::version_number()
// }

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
