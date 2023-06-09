export type Balance = {
  id: number;
  date: Date;
  value: {
    income: number;
    outcome: number;
  };
};

export const balanceData: Balance[] = [
  {
    id: 0,
    date: new Date(2023, 6, 3),
    value: {
      income: Math.floor(Math.random() * 2000) + 1000,
      outcome: Math.floor(Math.random() * 2000) + 1000,
    },
  },
  {
    id: 1,
    date: new Date(2023, 6, 4),
    value: {
      income: Math.floor(Math.random() * 2000) + 1000,
      outcome: Math.floor(Math.random() * 2000) + 1000,
    },
  },
  {
    id: 2,
    date: new Date(2023, 6, 5),
    value: {
      income: Math.floor(Math.random() * 2000) + 1000,
      outcome: Math.floor(Math.random() * 2000) + 1000,
    },
  },
  {
    id: 3,
    date: new Date(2023, 6, 6),
    value: {
      income: Math.floor(Math.random() * 2000) + 1000,
      outcome: Math.floor(Math.random() * 2000) + 1000,
    },
  },
  {
    id: 4,
    date: new Date(2023, 6, 7),
    value: {
      income: Math.floor(Math.random() * 2000) + 1000,
      outcome: Math.floor(Math.random() * 2000) + 1000,
    },
  },
  {
    id: 5,
    date: new Date(2023, 6, 8),
    value: {
      income: Math.floor(Math.random() * 2000) + 1000,
      outcome: Math.floor(Math.random() * 2000) + 1000,
    },
  },
];
