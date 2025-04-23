export default function createIteratorObject(report) {
  return {
    *[Symbol.iterator]() {
      // Access all departments in the report
      const departments = Object.values(report.allEmployees);
      
      // Iterate through each department
      for (const department of departments) {
        // Iterate through each employee in the department
        for (const employee of department) {
          yield employee;
        }
      }
    }
  };
}
