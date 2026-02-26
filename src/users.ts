import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  //Make changes here
  if (!Array.isArray(apiResponse)){
    return []
  }
  const user :User[] = [];
  for (const item of apiResponse){
    let obj = item as User
    let age;
    if (typeof obj.age === "number") {
        age = obj.age;
      } else if (typeof obj.age === "string") {
        const parsed = Number(obj.age);
        if (Number.isNaN(parsed)) continue;
        age = parsed;
      } else {
        continue;
      }
    user.push({ name: obj.name, age });

  }
  return user; // intentionally unsafe
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}