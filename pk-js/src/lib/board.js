const cells = new Array().fill(null, 9 * 9);

// Bottom
cells[81] = {
    coord: { x: 9, y: 9 },
    cell: "Start",
};

cells[80] = {
    coord: { x: 8, y: 9 },
    cell: "Dawn Island",
};

cells[79] = {
    coord: { x: 7, y: 9 },
    cell: "Louge Town",
};

cells[78] = {
    coord: { x: 6, y: 9 },
    cell: "Arabasta",
};

cells[77] = {
    coord: { x: 5, y: 9 },
    cell: "RP 1",
};

cells[76] = {
    coord: { x: 4, y: 9 },
    cell: "Water 7",
};

cells[75] = {
    coord: { x: 3, y: 9 },
    cell: "Ennies Lobby",
};

cells[74] = {
    coord: { x: 2, y: 9 },
    cell: "Thriller Bark",
};

cells[73] = {
    coord: { x: 1, y: 9 },
    cell: "Impel Down",
};

// Left
cells[64] = {
    coord: { x: 1, y: 8 },
    cell: "Sabaody",
};
cells[55] = {
    coord: { x: 1, y: 7 },
    cell: "Amazon Lily",
};
cells[46] = {
    coord: { x: 1, y: 6 },
    cell: "Ohara",
};
cells[37] = {
    coord: { x: 1, y: 5 },
    cell: "Marine Ford",
};
cells[28] = {
    coord: { x: 1, y: 4 },
    cell: "Fishman Island",
};
cells[19] = {
    coord: { x: 1, y: 3 },
    cell: "RP 2",
};
cells[10] = {
    coord: { x: 1, y: 2 },
    cell: "Punk Hazard",
};
// Top
cells[1] = {
    coord: { x: 1, y: 1 },
    cell: "Holy Land",
};
cells[2] = {
    coord: { x: 2, y: 1 },
    cell: "Dressrosa",
};
cells[3] = {
    coord: { x: 3, y: 1 },
    cell: "RP 3",
};
cells[4] = {
    coord: { x: 4, y: 1 },
    cell: "Zou",
};
cells[5] = {
    coord: { x: 5, y: 1 },
    cell: "",
};
cells[6] = {
    coord: { x: 6, y: 1 },
    cell: "Whole Cake",
};
cells[7] = {
    coord: { x: 7, y: 1 },
    cell: "Wano",
};
cells[8] = {
    coord: { x: 8, y: 1 },
    cell: "Elbaf",
};
cells[9] = {
    coord: { x: 9, y: 1 },
    cell: "Weatheria",
};
// Right
cells[18] = {
    coord: { x: 9, y: 2 },
    cell: "RP 4",
};
cells[27] = {
    coord: { x: 9, y: 3 },
    cell: "Egg Head",
};
cells[36] = {
    coord: { x: 9, y: 4 },
    cell: "Germa Kingdom",
};
cells[45] = {
    coord: { x: 9, y: 5 },
    cell: "Kari Bari",
};
cells[54] = {
    coord: { x: 9, y: 6 },
    cell: "God Valley",
};
cells[63] = {
    coord: { x: 9, y: 7 },
    cell: "Heavenly Tribute",
};
cells[72] = {
    coord: { x: 9, y: 8 },
    cell: "Road Star",
};

export default {
    cells: cells,
};
