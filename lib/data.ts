import SvgKitkatOne from "@/dist/Kitkat";
import SvgKitkatTwo from "@/dist/KitkatTwo";
import SvgKitkatThree from "@/dist/KitkatThree";
import SvgKitkatFour from "@/dist/KitkatFour";
import SvgKitkatFive from "@/dist/KitkatFive";
import SvgKitkatSix from "@/dist/KitkatSix";

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
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgKitkatTwo,
  },
  {
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgKitkatThree,
  },
  {
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgKitkatFour,
  },
  {
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgKitkatFive,
  },
  {
    name: "KitKat",
    age: 24,
    job: "Product Designer",
    profilePic: SvgKitkatSix,
  },
];
