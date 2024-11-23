import SvgKitkatOne from "@/components/svgs/Kitkat";
import SvgKitkatTwo from "@/components/svgs/KitkatTwo";
import SvgKitkatThree from "@/components/svgs/KitkatThree";
import SvgKitkatFour from "@/components/svgs/KitkatFour";
import SvgKitkatFive from "@/components/svgs/KitkatFive";
import SvgKitkatSix from "@/components/svgs/KitkatSix";
import SvgClicksOne from "@/components/svgs/ClicksOne";
import SvgClicksTwo from "@/components/svgs/ClicksTwo";
import SvgClicksThree from "@/components/svgs/ClicksThree";
import SvgClicksFour from "@/components/svgs/ClicksFour";
import SvgClicksFive from "@/components/svgs/ClicksFive";
import SvgClicksSix from "@/components/svgs/ClicksSix";
import SvgClicksSeven from "@/components/svgs/ClicksSeven";
import SvgStatusOne from "@/components/svgs/StatusOne";
import SvgStatusTwo from "@/components/svgs/StatusTwo";
import SvgStatusThree from "@/components/svgs/StatusThree";
import SvgStatusFour from "@/components/svgs/StatusFour";
import SvgStatusFive from "@/components/svgs/StatusFive";
import SvgStatusSix from "@/components/svgs/StatusSix";
import SvgStatusSeven from "@/components/svgs/StatusSeven";
import SvgMessagesOne from "@/components/svgs/MessagesOne";
import SvgMessagesTwo from "@/components/svgs/MessagesTwo";
import SvgMessagesThree from "@/components/svgs/MessagesThree";
import SvgMessagesFour from "@/components/svgs/MessagesFour";
import SvgMessagesFive from "@/components/svgs/MessagesFive";
import SvgMessagesSix from "@/components/svgs/MessagesSix";

export const employmentStatusOptions = [
  { label: "Employed", value: "employed" },
  { label: "Unemployed", value: "unemployed" },
  { label: "Student", value: "student" },
  { label: "Self-Employed", value: "self-employed" },
  { label: "Retired", value: "retired" },
];

export const interestsOptions = [
  {
    icon: require("../assets/images/movies-icon.png"),
    title: "Movies",
    altIcon: require("../assets/images/movies-alt.png"),
  },
  {
    icon: require("../assets/images/games-icon.png"),
    title: "Games",
    altIcon: require("../assets/images/games-alt.png"),
  },
  {
    icon: require("../assets/images/books-icon.png"),
    title: "Books",
    altIcon: require("../assets/images/books-alt.png"),
  },
  {
    icon: require("../assets/images/swim-icon.png"),
    title: "Swimming",
    altIcon: require("../assets/images/swim-alt.png"),
  },
  {
    icon: require("../assets/images/design-icon.png"),
    title: "Design",
    altIcon: require("../assets/images/design-alt.png"),
  },
  {
    icon: require("../assets/images/music-icon.png"),
    title: "Music",
    altIcon: require("../assets/images/music-alt.png"),
  },
  {
    icon: require("../assets/images/photo-icon.png"),
    title: "Photography",
    altIcon: require("../assets/images/photo-alt.png"),
  },
  {
    icon: require("../assets/images/shop-icon.png"),
    title: "Shopping",
    altIcon: require("../assets/images/shop-alt.png"),
  },
  {
    icon: require("../assets/images/cook-icon.png"),
    title: "Cooking",
    altIcon: require("../assets/images/cook-alt.png"),
  },
];

export const genderOptions = [
  {
    label: "Male",
    value: "male",
    icon: require("../assets/images/male-icon.png"),
    iconHighlight: require("../assets/images/male-highlight.png"),
  },
  {
    label: "Female",
    value: "female",
    icon: require("../assets/images/female-icon.png"),
    iconHighlight: require("../assets/images/female-highlight.png"),
  },
];

export const pillNavFinders = ["Look-see", "Swipe", "Quick Match", "Favorites"];

export const pillNavMessages = ["All", "Unread", "Clicks", "Notifications"];

export const findersData = [
  {
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgKitkatOne,
  },
  {
    name: "Esty",
    age: 21,
    job: "Product Designer",
    profilePic: SvgKitkatTwo,
  },
  {
    name: "Joy",
    age: 27,
    job: "Product Designer",
    profilePic: SvgKitkatThree,
  },
  {
    name: "Chi Chi",
    age: 20,
    job: "Product Designer",
    profilePic: SvgKitkatFour,
  },
  {
    name: "Eve",
    age: 28,
    job: "Product Designer",
    profilePic: SvgKitkatFive,
  },
  {
    name: "Abi",
    age: 25,
    job: "Product Designer",
    profilePic: SvgKitkatSix,
  },
];

export const clicksData = [
  {
    profilePic: SvgClicksOne,
    groupName: "Love@firstBite",
    groupDesc: "FoodiesLove",
    status: "Free",
  },
  {
    profilePic: SvgClicksTwo,
    groupName: "ASixFigurething",
    groupDesc: "MD's CEO's",
    status: "Premium",
  },
  {
    profilePic: SvgClicksThree,
    groupName: "Love&Design",
    groupDesc: "Creatives",
    status: "Free",
  },
  {
    profilePic: SvgClicksFour,
    groupName: "CodeNameLove",
    groupDesc: "Developers",
    status: "Free",
  },
  {
    profilePic: SvgClicksFive,
    groupName: "Universities",
    groupDesc: "Students",
    status: "Premium",
  },
  {
    profilePic: SvgClicksSix,
    groupName: "RelationshipMatters",
    groupDesc: "For All",
    status: "Premium",
  },
  {
    profilePic: SvgClicksSeven,
    groupName: "PurpleLove",
    groupDesc: "WhatMakesLovePurple",
    status: "Free",
  },
  {
    profilePic: SvgClicksOne,
    groupName: "Love@firstBite",
    groupDesc: "FoodiesLove",
    status: "Free",
  },
  {
    profilePic: SvgClicksTwo,
    groupName: "ASixFigurething",
    groupDesc: "MD's CEO's",
    status: "Premium",
  },
  {
    profilePic: SvgClicksThree,
    groupName: "Love&Design",
    groupDesc: "Creatives",
    status: "Free",
  },
];

export const statusData = [
  {
    name: "Andy",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusOne,
    time: "12:39 AM",
  },
  {
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusTwo,
    time: "12:39 AM",
  },
  {
    name: "Esty",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusThree,
    time: "12:39 AM",
  },
  {
    name: "Abi",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusFour,
    time: "12:39 AM",
  },
  {
    name: "Joy",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusFive,
    time: "12:39 AM",
  },
  {
    name: "Chi Chi",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusSix,
    time: "12:39 AM",
  },
  {
    name: "Eve",
    age: 24,
    job: "Product Designer",
    profilePic: SvgStatusSeven,
    time: "12:39 AM",
  },
];

export const messagesData = [
  {
    profilePic: SvgMessagesOne,
    chatName: "Love@firstbite",
    chatMessages: "@Kizy How have you been do...",
    time: "12:39 AM",
    unread: true,
    noOfMessages: 3,
  },
  {
    profilePic: SvgMessagesTwo,
    chatName: "Love@firstbite",
    chatMessages: "@Kizy How have you been do...",
    time: "12:39 AM",
    unread: false,
    noOfMessages: 0,
  },
  {
    profilePic: SvgMessagesThree,
    chatName: "Love@firstbite",
    chatMessages: "@Kizy How have you been do...",
    time: "12:39 AM",
    unread: true,
    noOfMessages: 2,
  },
  {
    profilePic: SvgMessagesFour,
    chatName: "Love@firstbite",
    chatMessages: "@Kizy How have you been do...",
    time: "12:39 AM",
    unread: false,
    noOfMessages: 0,
  },
  {
    profilePic: SvgMessagesFive,
    chatName: "Love@firstbite",
    chatMessages: "@Kizy How have you been do...",
    time: "12:39 AM",
    unread: true,
    noOfMessages: 5,
  },
  {
    profilePic: SvgMessagesSix,
    chatName: "Love@firstbite",
    chatMessages: "@Kizy How have you been do...",
    time: "12:39 AM",
    unread: false,
    noOfMessages: 1,
  },
];

export const notificationsData = [
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
  {
    profilePic: SvgMessagesThree,
    name: "Kassie",
    age: 24,
    info: "Wants to chat with you",
    time: "12:39 AM",
  },
];
