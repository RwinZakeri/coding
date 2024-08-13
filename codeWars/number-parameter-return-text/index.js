function likes(names) {
  console.log(Boolean(names.length));
  if (!names.length) {
    return "no one likes this";
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  } else if (names.length >= 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length > 0) {
    return `${names[0]} like this`;
  }
}

console.log(likes(["ali"]));
