extern "C" {
    pub fn sqlite3_libversion_number() -> ::std::os::raw::c_int;
}

/// Returns the SQLite version as an integer; e.g., `3016002` for version 3.16.2.
///
/// See [`sqlite3_libversion_number()`](https://www.sqlite.org/c3ref/libversion.html).
pub fn version_number() -> i32 {
    unsafe { sqlite3_libversion_number() }
}

fn main() {
    println!("Hello with SQLite version {}", version_number());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(version_number(), 3019003);
    }
}
