export function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}






export function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
}





export function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}






export function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];

  for (const array of arrays) {
    for (const item of array) {
      combined.push(item);
    }
  }

  return combined;
}





export interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course: Course): boolean => course.isPublished && course.students >= minStudents
  );
}





export function pluckValues<T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] {
  return items.map((item) => item[key]);
}






export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}







export async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
      return;
    }

    reject(new Error("Access Denied: Must be 18 or older"));
  });
}

export function getUniqueNumbers(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export function updateProductPrice(
  products: Product[],
  productId: number,
  newPrice: number
): Product[] {
  return products.map((product: Product): Product => {
    if (product.id === productId) {
      return { ...product, price: newPrice };
    }

    return product;
  });
}
