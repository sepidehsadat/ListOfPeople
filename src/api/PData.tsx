
import TypePeople from "../types/PTypes";

export function getPeopleAll(): TypePeople[]
{
    return [
        {
            id: 1,
            name: "Sepideh",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpeE48MQkk83bsdYW1EQO7EDLdXVIkR0KI7sOepOssuPNzkYjCfd5K7MSsp2-q7Mq2D8&usqp=CAU",
            bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
        {
            id: 2,
            name: "Sara",
            image: "https://cdn-icons-png.flaticon.com/512/6833/6833605.png",
            bio: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        },
        {
            id: 3,
            name: "Sahar",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNKWd12rq9v3HTo0RUjk-n9u-EFrsudysaNnUaiLOMBHqPcr9gOeepJYvIO3XQY4s7II&usqp=CAU",
            bio: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
        },
        {
            id: 4,
            name: "Nazanin",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI6G4BLc75gHp9OVjCtr534K8nM_RYL5K6HM6Fzn15VpW97upLM3ZaGGugTqeL5QgFa8&usqp=CAU",
            bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        }
    ];
}