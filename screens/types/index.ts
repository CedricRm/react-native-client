export type Material = {
  id?: number;
  design?: string;
  state?: string;
  quantity?: number;
};

export const MaterialState = {
  good: 'GOOD',
  bad: 'BAD',
  damaging: 'DAMAGING',
};
