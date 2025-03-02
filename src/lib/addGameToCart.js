import supabase from "../config/supabaseClient";

export const addGameToBucket = async ({ title, gatunek, platform, price }) => {
    if (!title || !gatunek || !platform || !price) {
        throw new Error("could not read parametrs");
    }

    const { data, error } = await supabase
        .from("games")
        .insert({ title, gatunek, platform, price });

    if (error) {
        console.log(error);
        throw new Error("could not send game to bucket");
    }
};
