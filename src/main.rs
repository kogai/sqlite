extern crate rusqlite;

fn main() {
    println!("Hello with SQLite version {}", rusqlite::version());
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
