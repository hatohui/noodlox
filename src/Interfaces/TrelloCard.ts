import { TrelloCheckItem } from "./TrelloCheckItem";
import { TrelloLabel } from "./TrelloLabel";

export type TrelloCard = {
  id: string;
  badges: {
    attachments: number;
    fogbugz: string;
    checkItems: number;
    checkItemsChecked: number;
    checkItemsEarliestDue: string | null;
    comments: number;
    description: boolean;
    due: Date | null;
    dueComplete: boolean;
    lastUpdatedByAi: boolean;
    start: string | null;
    externalSource: string | null;
    attachmentsByType: {
      trello: {
        board: number;
        card: number;
      };
    };
    location: boolean;
    votes: number;
    maliciousAttachments: number;
    viewingMemberVoted: boolean;
    subscribed: boolean;
  };
  checkItemStates: TrelloCheckItem[];
  closed: boolean;
  dueComplete: boolean;
  dateLastActivity: string;
  desc: string;
  descData: {
    emoji: {};
  };

  due: string | null;
  dueReminder: number | null;
  email: string | null;
  idBoard: string;
  idChecklists: string[];
  idList: string;
  idMembers: string[];
  idMembersVoted: string[];
  idShort: number;
  idAttachmentCover: string | null;
  labels: TrelloLabel[];
  idLabels: string[];
  manualCoverAttachment: boolean;
  name: string;
  nodeId: string;
  pinned: boolean;
  pos: number;
  shortLink: string;
  shortUrl: string;
  start: string | null;
  subscribed: boolean;
  url: string;
  cover: {
    idAttachment: string | null;
    color: string | null;
    idUploadedBackground: boolean | null;
    size: "normal";
    brightness: "light" | "dark";
    idPlugin: string | null;
  };
  isTemplate: boolean;
  cardRole: string | null;
  mirrorSourceId: string | null;
};
