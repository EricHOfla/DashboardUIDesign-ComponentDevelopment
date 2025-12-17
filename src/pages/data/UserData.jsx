import { Package, User, Users, TriangleAlert, TextAlignCenter } from "lucide-react";

export const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@ihuza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2 hours ago",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@ihuza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "5 hours ago",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "1 day ago",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.d@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastLogin: "3 days ago",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "d.wilson@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "6 hours ago",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.a@ihuza.com",
    role: "Manager",
    status: "Active",
    lastLogin: "30 min ago",
  },
  {
    id: 7,
    name: "Robert Taylor",
    email: "r.taylor@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "2 days ago",
  },
  {
    id: 8,
    name: "Jennifer Miller",
    email: "j.miller@ihuza.com",
    role: "Staff",
    status: "Active",
    lastLogin: "4 hours ago",
  },
  {
    id: 9,
    name: "Christopher Lee",
    email: "c.lee@ihuza.com",
    role: "Admin",
    status: "Active",
    lastLogin: "1 hour ago",
  },
  {
    id: 10,
    name: "Amanda White",
    email: "a.white@ihuza.com",
    role: "Staff",
    status: "Inactive",
    lastLogin: "1 week ago",
  },
];

export const activities = [
    {
      id: 1,
      icon: <Package />,
      iconBg: "bg-blue-100 text-blue-600",
      title: "Product added to inventory",
      description: 'MacBook Pro 16" M3 (PROD2024001)',
      date: "Dec 4, 2024",
    },
    {
      id: 2,
      icon: <Package />,
      iconBg: "bg-blue-100 text-blue-600",
      title: "Product assigned to Sarah Johnson",
      description: "Dell ThinkPad X1 Carbon",
      date: "Dec 3, 2024",
    },
    {
      id: 3,
      icon: <Package />,
      iconBg: "bg-blue-100 text-blue-600",
      title: "Product assigned to Michael Brown",
      description: "MacBook Air M2",
      date: "Dec 2, 2024",
    },
    {
      id: 4,
      icon: <TriangleAlert />,
      iconBg: "bg-yellow-100 text-yellow-600",
      title: "Product sent for maintenance",
      description: "HP Spectre x360 – Screen replacement",
      date: "Jan 16, 2024",
    },
    {
      id: 5,
      icon: <User />,
      iconBg: "bg-green-100 text-green-600",
      title: "New user registered",
      description: "Amanda White – Staff Member",
      date: "Jan 14, 2024",
    },
  ];

  export const quickActions = [
    {
      id: 1,
      icon: <Users />,
      title: "View Users",
      description: "View all registered users",
      bg: "bg-blue-50",
      btn: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: 2,
      icon: <Package />,
      title: "View Products",
      description: "View all registered products",
      bg: "bg-blue-50",
      btn: "bg-blue-600 hover:bg-blue-700",
    },
    {
      id: 3,
      icon: <TextAlignCenter />,
      title: "View Assignments",
      description: "View all product assignments",
      bg: "bg-purple-50",
      btn: "bg-purple-600 hover:bg-purple-700",
    },
  ];

 export const recentProducts = [
    { Products: "MacBook Pro 16", Category: "Laptops", Date: "Dec 1, 2023" , status: "In Stock"},
    { Products: "iPhone 14", Category: "Smartphones", Date: "Dec 2, 2023" , status: "Out of Stock"},
    { Products: "Pixel 7", Category: "Smartphones", Date: "Dec 3, 2023" , status: "In Stock"},
    { Products: "AirPods Pro", Category: "Accessories", Date: "Dec 4, 2023" , status: " Low Stock"},
    { Products: "PlayStation 5", Category: "Gaming Consoles", Date: "Dec 5, 2023" , status: "In Stock"}
  ];

  export const statsData = [
    { title: "Total Users", value: "116", icon: <Users />, iconBg: "bg-blue-100 text-blue-600" },
    { title: "Total Products", value: "100", icon: <Package />, iconBg: "bg-green-100 text-green-600" },
    { title: "Assigned Products", value: "10", icon: <TextAlignCenter />, iconBg: "bg-purple-100 text-purple-600" },
    { title: "Unassigned Products", value: "90", icon: <TriangleAlert />, iconBg: "bg-yellow-100 text-yellow-600" },
  ];