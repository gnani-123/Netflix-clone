const build = (list, startId) =>
  list.map(([title, year], i) => ({
    id: title,
    title,
    year,
    img: `https://picsum.photos/id/${startId + i}/300/450`,
    desc: "A thrilling story full of action, drama and surprises.",
  }));

export const telugu2018 = build(
  [
    ["Agnyaathavaasi", 2018],
    ["Inttelligent", 2018],
    ["Tholi Prema", 2018],
    ["Awe", 2018],
    ["Kirrak Party", 2018],
    ["Rangasthalam", 2018],
    ["Bharat Ane Nenu", 2018],
    ["Mahanati", 2018],
    ["Naa Peru Surya", 2018],
    ["Sammohanam", 2018],
    ["Ee Nagaraniki Em Aindi", 2018],
    ["RX 100", 2018],
    ["Chi La Sow", 2018],
    ["Goodachari", 2018],
    ["Srinivasa Kalyanam", 2018],
    ["Geetha Govindam", 2018],
    ["Sailaja Reddy Alludu", 2018],
    ["Devadas", 2018],
    ["Aravinda Sametha Veera Raghava", 2018],
    ["Taxiwaala", 2018],
  ],
  10
);

export const trending = build(
  [["Trending 1", 2024], ["Trending 2", 2023], ["Trending 3", 2024], ["Trending 4", 2022], ["Trending 5", 2023], ["Trending 6", 2024]],
  40
);

export const tvShows = build(
  [["Mystery Files", 2022], ["City Lights", 2021], ["Dark Waters", 2023], ["The Family", 2020], ["Crime Diary", 2024], ["Time Travelers", 2022]],
  50
);