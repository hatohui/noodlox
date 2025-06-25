export type TrelloCheckItem = {
  idCheckItem: string;
  state: string;
};

export type DetailedCheckItem = {
  id: string;
  name: string;
  idBoard: string;
  idCard: string;
  pos: number;
  checkItems: [
    {
      id: string;
      name: string;
      nameData: {
        emoji: {};
      };
    }
  ];
  state: string;
  due: string | null;
  dueReminder: number | null;
  idMember: null;
  idChecklist: string;
};
