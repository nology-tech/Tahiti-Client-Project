import staffImage from "../images/staff-img.svg";

const staffData = [
  {
    fullName: "Tom Tompson",
    staffNumber: "1",
    staffImage: { staffImage },
    role: "Admin",
    employeeOverview: "dsdasdff",
    startDate: "09/09/2021",
    courseCompletion: "10/10/2020",
    manager: "Jon Doe",
    jobTitle: "Full Time Employee",

    resources: {
      resourceName: "notepad",
      resourceId: 1,
      quantity: 20,
      autoPurchase: "YES",
      constPerUnit: "£1.99",
      autoPurchaseLevel: 10,
      category: "admin",
    },
  },
  {
    fullName: "John Smith",
    staffNumber: "2",
    staffImage: { staffImage },
    role: "Manager",
    employeeOverview: "dsdasdff",
    startDate: "10/10/2020",
    courseCompletion: "11/11/2021",
    manager: "Jane Doe",
    jobTitle: "Full Time Employee",

    resources: {
      resourceName: "pen",
      resourceId: 2,
      quantity: 50,
      autoPurchase: "NO",
      constPerUnit: "£0.99",
      autoPurchaseLevel: 0,
      category: "admin",
    },
  },
  {
    fullName: "Jane Doe",
    staffNumber: "3",
    staffImage: { staffImage },
    role: "HR Manager",
    employeeOverview: "dsdasdff",
    startDate: "12/12/2019",
    courseCompletion: "01/01/2020",
    manager: "Admin",
    jobTitle: "Full Time Employee",

    resources: {
      resourceName: "mouse pad",
      resourceId: 3,
      quantity: 10,
      autoPurchase: "YES",
      constPerUnit: "£2.49",
      autoPurchaseLevel: 5,
      category: "admin",
    },
  },
  {
    fullName: "Amy Johnson",
    staffNumber: "4",
    staffImage: { staffImage },
    role: "Customer Service Rep",
    employeeOverview: "dsdasdff",
    startDate: "03/03/2022",
    courseCompletion: "N/A",
    manager: "Tom Tompson",
    jobTitle: "Part Time Employee",

    resources: {
      resourceName: "printer paper",
      resourceId: 2,
      quantity: 100,
      autoPurchase: "NO",
      constPerUnit: "£0.20",
      autoPurchaseLevel: 0,
      category: "customer service",
    },
  },
  {
    fullName: "Mike Williams",
    staffNumber: { staffImage },
    staffImage: "poi",
    role: "Software Developer",
    employeeOverview: "dsdasdff",
    startDate: "04/04/2023",
    courseCompletion: "02/02/2023",
    manager: "John Smith",
    jobTitle: "Full Time Employee",

    resources: {
      resourceName: "laptop",
      resourceId: 1,
      quantity: 1,
      autoPurchase: "NO",
      constPerUnit: "£1299.00",
      autoPurchaseLevel: 0,
      category: "software development",
    },
  },
];

// staffImage: staffImage,
// jobTitle: "Full Time Employee",

export default staffData;
