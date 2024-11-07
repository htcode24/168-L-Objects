let profile = {
    name: "john",
    status: "complicated",
    children: [
      {
        name: "maya",
        age: 5,
        friends: [
          { name: "nina", age: 4 },
          { name: "lola", age: 5 }
        ]
      },
      { name: "joe", age: 2, children: [] }
    ]
  };

// 1. Is Maya friends with Nina?
let mayasFriend = profile.children[0].friends[0].name
console.log(mayasFriend);

// 2. How many friends maya has?
console.log(profile.children[0].friends.length);

// 3. How many children does John have?
console.log(profile.children.length);
