const level3Cards = [
    {mime_1: "mime_3_1_1", mime_2: "mime_3_2_1", speak_1: "speak_3_1_1", speak_2: "speak_3_2_1", draw_1: "draw_3_1_1", draw_2: "draw_3_2_1", value: "3"}, 
    {mime_1: "mime_3_1_2", mime_2: "mime_3_2_2", speak_1: "speak_3_1_2", speak_2: "speak_3_2_2", draw_1: "draw_3_1_2", draw_2: "draw_3_2_2", value: "3"} 
];
const level4Cards = [
    {mime_1: "mime_4_1_1", mime_2: "mime_4_2_1", speak_1: "speak_4_1_1", speak_2: "speak_4_2_1", draw_1: "draw_4_1_1", draw_2: "draw_4_2_1", value: "4"}, 
    {mime_1: "mime_4_1_2", mime_2: "mime_4_2_2", speak_1: "speak_4_1_2", speak_2: "speak_4_2_2", draw_1: "draw_4_1_2", draw_2: "draw_4_2_2", value: "4"} 
];
const level5Cards = [
    {mime_1: "mime_5_1_1", mime_2: "mime_5_2_1", speak_1: "speak_5_1_1", speak_2: "speak_5_2_1", draw_1: "draw_5_1_1", draw_2: "draw_5_2_1", value : "5"}, 
    {mime_1: "mime_5_1_2", mime_2: "mime_5_2_2", speak_1: "speak_5_1_2", speak_2: "speak_5_2_2", draw_1: "draw_5_1_2", draw_2: "draw_5_2_2", value : "5"} 
];

const allLevelcards = [
    {level: 3, cards :level3Cards},
    {level: 4, cards :level4Cards},
    {level: 5, cards :level5Cards}
]

function getCardForLevel(level) {
    console.log("level "+ level)
    const items = allLevelcards[level - 3].cards
    return items[Math.floor(Math.random() * items.length)];
}

module.exports = {
    getCardForLevel: getCardForLevel,

}