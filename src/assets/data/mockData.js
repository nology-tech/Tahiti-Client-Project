const mockData = {
  clientData: [
    {
      name: "Felix Tompson",
      ClientImage:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
      id: 1,
      dateOfBirth: "12/12/1997",
      email: "felixtompson@gmail.com",
      mobileNumber: "+44 745455097",
      practitioner: "Jane Dow",

      bookings: [
        {
          practitioner: "John Smith",
          bookingDate: "12/12/2023",
          bookingTime: "12:30",
        },
      ],
    },
    {
      name: "Sarah Johnson",
      ClientImage:
        "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      id: 2,
      dateOfBirth: "06/02/1982",
      email: "sarahjohnson@gmail.com",
      mobileNumber: "+44 712345678",

      bookings: [
        {
          practitioner: "John Smith",
          bookingDate: "01/01/2023",
          bookingTime: "10:00",
        },
      ],
    },
    {
      name: "David Lee",
      ClientImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      id: 3,
      dateOfBirth: "10/05/1990",
      email: "davidlee@gmail.com",
      mobileNumber: "+44 789012345",

      bookings: [
        {
          practitioner: "Tom Tompson",
          bookingDate: "06/06/2023",
          bookingTime: "14:00",
        },
      ],
    },
    {
      name: "Emma Wilson",
      ClientImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      id: 4,
      dateOfBirth: "07/09/1987",
      email: "emmawilson@gmail.com",
      mobileNumber: "+44 745678901",

      bookings: [
        {
          practitioner: "Jane Dory",
          bookingDate: "08/08/2023",
          bookingTime: "16:00",
        },
      ],
    },
    {
      name: "Tom Jackson",
      ClientImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      id: 5,
      dateOfBirth: "03/11/1981",
      email: "tomjackson@gmail.com",
      mobileNumber: "+44 712345678",

      bookings: [
        {
          practitioner: "Amy Johnson",
          bookingDate: "02/02/2023",
          bookingTime: "09:30",
        },
      ],
    },
    {
      name: "Oliver Green",
      ClientImage:
        "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      id: 6,
      dateOfBirth: "12/08/1978",
      email: "olivergreen@gmail.com",
      mobileNumber: "+44 789012345",

      bookings: [
        {
          practitioner: "Mike Williams",
          bookingDate: "07/07/2023",
          bookingTime: "11:00",
        },
      ],
    },
    {
      name: "Sophie Brown",
      ClientImage:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      id: 7,
      dateOfBirth: "04/03/1993",
      email: "sophiebrown@gmail.com",
      mobileNumber: "+44 745678901",

      bookings: [
        {
          practitioner: "Mike Williams",
          bookingDate: "07/07/2023",
          bookingTime: "11:30",
        },
      ],
    },
    {
      name: "James Taylor",
      ClientImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      id: 8,
      dateOfBirth: "09/12/1980",
      email: "jamestaylor@gmail.com",
      mobileNumber: "+44 712345678",

      bookings: [
        {
          practitioner: "Amy Johnson",
          bookingDate: "04/04/2023",
          bookingTime: "13:00",
        },
      ],
    },
  ],

  staffData: [
    {
      fullName: "Tom Tompson",
      staffNumber: 1,
      staffImage:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      role: "Admin",
      employeeOverview: "dsdasdff",
      startDate: "09/09/2021",
      courseCompletion: "10/12/2021",
      manager: "John Walter",
      jobTitle: "Full Time Employee",

      resources: [
        {
          resourceName: "notepad",
          resourceId: 1,
          quantity: 20,
          autoPurchase: "YES",
          constPerUnit: "£1.99",
          autoPurchaseLevel: 10,
          category: "admin",
        },
      ],
    },
    {
      fullName: "John Smith",
      staffNumber: 2,
      staffImage:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      role: "Practitioner",
      employeeOverview: "dsdasdff",
      startDate: "10/10/2020",
      courseCompletion: "11/11/2021",
      manager: "Jane Lind",
      jobTitle: "Full Time Employee",

      resources: [
        {
          resourceName: "Syringes",
          resourceId: 2,
          quantity: 300,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 50,
          category: "health",
        },
        {
          resourceName: "Needles",
          resourceId: 3,
          quantity: 200,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 100,
          category: "health",
        },
        {
          resourceName: "Saline",
          resourceId: 4,
          quantity: 100,
          autoPurchase: "YES",
          constPerUnit: "£1.99",
          autoPurchaseLevel: 1,
          category: "health",
        },
      ],
    },

    {
      fullName: "Jane Dory",
      staffNumber: 3,
      staffImage:
        "https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80",
      role: "Practitioner",
      employeeOverview: "dsdasdff",
      startDate: "12/12/2019",
      courseCompletion: "01/01/2020",
      manager: "John Walter",
      jobTitle: "Part Time Employee",

      resources: [
        {
          resourceName: "Syringes",
          resourceId: 2,
          quantity: 300,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 50,
          category: "health",
        },
        {
          resourceName: "Needles",
          resourceId: 3,
          quantity: 200,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 100,
          category: "health",
        },
        {
          resourceName: "Saline",
          resourceId: 4,
          quantity: 100,
          autoPurchase: "YES",
          constPerUnit: "£1.99",
          autoPurchaseLevel: 1,
          category: "health",
        },
      ],
    },
    {
      fullName: "Amy Johnson",
      staffNumber: 4,
      staffImage:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      role: "Practitioner",
      employeeOverview: "dsdasdff",
      startDate: "03/03/2022",
      courseCompletion: "27/07/2022",
      manager: "Jane Lind",
      jobTitle: "Part Time Employee",

      resources: [
        {
          resourceName: "Syringes",
          resourceId: 2,
          quantity: 300,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 50,
          category: "health",
        },
        {
          resourceName: "Needles",
          resourceId: 3,
          quantity: 200,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 100,
          category: "health",
        },
        {
          resourceName: "Saline",
          resourceId: 4,
          quantity: 100,
          autoPurchase: "YES",
          constPerUnit: "£1.99",
          autoPurchaseLevel: 1,
          category: "health",
        },
      ],
    },
    {
      fullName: "Mike Williams",
      staffNumber: 5,
      staffImage:
        "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      role: "Practitioner",
      employeeOverview: "dsdasdff",
      startDate: "04/12/2022",
      courseCompletion: "02/02/2023",
      manager: "John Walter",
      jobTitle: "Full Time Employee",

      resources: [
        {
          resourceName: "Syringes",
          resourceId: 2,
          quantity: 300,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 50,
          category: "health",
        },
        {
          resourceName: "Needles",
          resourceId: 3,
          quantity: 200,
          autoPurchase: "YES",
          constPerUnit: "£12.99",
          autoPurchaseLevel: 100,
          category: "health",
        },
        {
          resourceName: "Saline",
          resourceId: 4,
          quantity: 100,
          autoPurchase: "YES",
          constPerUnit: "£1.99",
          autoPurchaseLevel: 1,
          category: "health",
        },
      ],
    },
  ],
};

export default mockData;
