let name1 = "Ed Teach";
let name2 = "Stede Bonnet";
let name3 = "Jim Jiminez";

if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 + " is longer than " + name2 + " and " + name3);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + " is longer than " + name1 + " and " + name3);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3 + " is longer than " + name2 + " and " + name1);
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log(name1 + " and " + name2 + " tie for the longest name.");
} else if (name1.length === name3.length && name1.length > name2.length) {
    console.log(name1 + " and " + name3 + " tie for the longest name.");
} else if (name2.length === name3.length && name2.length > name1.length) {
    console.log(name2 + " and " + name3 + " tie for the longest name.");
} else {
    console.log(name1 +", " + name2 + ", and " + name3 + " are the same length.");
}