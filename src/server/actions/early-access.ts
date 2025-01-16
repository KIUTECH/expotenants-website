"use server";

// import { earlyAccess } from "@expotenants/db/schema";
// import { db } from "@expotenants/db";

interface JoinEarlyAccessProps {
    email: string;
    name: string;
}

export async function joinEarlyAccessAction({
    email,
    name,
}: JoinEarlyAccessProps) {
    console.log("Joining early access", email, name);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // return await db
    //     .insert(earlyAccess)
    //     .values({ email, name })
    //     .onConflictDoNothing({ target: earlyAccess.email })
    //     .returning({ insertedName: earlyAccess.name })
    //     .execute();
}
