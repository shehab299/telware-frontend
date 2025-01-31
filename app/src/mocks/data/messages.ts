import {
  DeleteType,
  MessageInterface,
  MessageStatus,
  MessageTypes,
} from "types/messages";

const messages: MessageInterface[] = [
  {
    id: "1",
    content: "Hey there!",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:00:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:00:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "2",
    content: "Hi! How are you?",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:01:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:01:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: true,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "3",
    content: "I'm good, thanks! What about you?",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:02:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:02:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "4",
    content: "I'm doing well! What's new?",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:03:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:03:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "5",
    content: "Just working on some stuff. How about you?",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:04:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:04:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "6",
    content: "Same here! Busy day ahead.",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:05:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:05:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "7",
    content: "Yeah, same. Lots of things to get done.",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:06:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:06:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "8",
    content: "I hear you. Do you have any plans for the weekend?",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:07:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:07:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "9",
    content: "Nothing specific, just relaxing. You?",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:08:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:08:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "10",
    content: "I'm planning to go hiking if the weather's nice.",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:09:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:09:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "11",
    content: "That sounds fun! Where do you usually go?",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:10:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:10:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "12",
    content: "There's a great trail nearby. It's not too difficult.",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:11:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:11:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "13",
    content: "Nice! I might have to try it sometime.",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:12:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:12:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: false,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "14",
    content: "Definitely! It's a great way to clear your mind.",
    senderId: "2",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:13:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:13:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: true,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
  {
    id: "15",
    content: "I agree, nature has a calming effect.",
    senderId: "1",
    type: MessageTypes.normal,
    createdAt: new Date("2024-11-27T10:14:00").toISOString(),
    updatedAt: new Date("2024-11-27T10:14:00").toISOString(),
    chatId: "chat1",
    parentMessageId: "",
    isDeleted: false,
    isPinned: true,
    deleteType: DeleteType.none,
    status: MessageStatus.sent,
  },
];

export { messages };
