import React from "react";

export const personnelColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerClassName: "headerStyle--header",
  },
  {
    field: "user_name",
    headerName: "Username",
    width: 190,
    headerClassName: "headerStyle--header",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "roles",
    headerName: "Roles",
    sortable: false,
    description: "User's current roles",
    width: 140,
    headerClassName: "headerStyle--header",
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "project",
    headerName: "Project",
    description: "Project asigned to the user",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "team",
    headerName: "Team",
    description: "Team asigned to the user",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
];

export const ordersColumns = [
  {
    field: "id",
    headerName: "Order ID",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "sender",
    headerName: "Sender",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "recipient",
    headerName: "Recipient",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "order_status",
    headerName: "Status",
    sortable: true,
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "carrier",
    headerName: "Carrier",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "shipping_origin",
    headerName: "Shipping Origin",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "shipping_destination",
    headerName: "Shipping Destination",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "shipping_date",
    headerName: "Shipping date",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "shipping_arrival_date",
    headerName: "Expected Arrival",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    headerClassName: "headerStyle--header",
  },
];
