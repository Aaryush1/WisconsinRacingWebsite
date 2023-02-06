export type SponsorInfo = {
    name: string;
    logoImage: string;
    tier: "Diamond" | "Gold" | "Silver" | "Bronze";
    description: string;
    year: number;
    website: string;
}
