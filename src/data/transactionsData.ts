export type Transaction = {
  id: number;
  date: string;
  transactions: {
    id: number;
    title: string;
    value: string;
    type: string;
  }[];
};

export const transactionsData: Transaction[] = [
  {
    id: 0,
    date: "TODAY | 8 JUN 2023",
    transactions: [
      {
        id: 0,
        title: "Netflix",
        value: "50.00",
        type: "outcome",
      },
      {
        id: 1,
        title: "Salary for May",
        value: "4300.00",
        type: "income",
      },
    ],
  },
  {
    id: 1,
    date: "YESTERDAY | 7 JUN 2023",
    transactions: [
      {
        id: 0,
        title: "Shopping",
        value: "249.99",
        type: "outcome",
      },
      {
        id: 1,
        title: "Headphones sale",
        value: "110.00",
        type: "income",
      },
      {
        id: 2,
        title: "Car wash",
        value: "53.00",
        type: "outcome",
      },
    ],
  },
];
