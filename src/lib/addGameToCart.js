import supabase from "../config/supabaseClient";

export const addGameToBucket = async ({ title, genre, platform, price }) => {
    if (!title || !genre || !platform || !price) {
        throw new Error("could not read parametrs");
    }

    const { data, error } = await supabase
        .from("bucket")
        .insert([{ title, genre, platform, price }]);

    if (error) {
        console.log(error);
        throw new Error("could not send game to bucket");
    }
};
