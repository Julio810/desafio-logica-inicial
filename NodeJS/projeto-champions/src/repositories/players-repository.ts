import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"

const database: PlayerModel[] =[
    {
        id: 1, 
        name: "Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 2, 
        name: "Cristiano Ronaldo",
        club: "Real Madrid",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 3, 
        name: "Robert Lewandowski",
        club: "Bayern Munchen",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 80,
            Shooting: 92,
            Dribbling: 83,
            Defending: 40,
            Physical: 65,
        },
    },
    {
        id: 4, 
        name: "Alisson Becker",
        club: "Liverpool",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 87,
            Pace: 84,
            Shooting: 70,
            Dribbling: 82,
            Defending: 85,
            Physical: 77,
        },
    },
    {
        id: 5, 
        name: "David Beckham",
        club: "Retired",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 76,
            Shooting: 82,
            Dribbling: 84,
            Defending: 70,
            Physical: 72,
        },
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find( (player) => player.id === id )
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id)

    if(index !== -1){
        database.splice(index, 1)
        return true
    }

    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = database.findIndex( player => player.id === id)

    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex]
}