export type SponsorInfo = {
    name: string;
    logo: string;
    tier: "Diamond" | "Gold" | "Silver" | "Bronze";
    description?: string;
    year?: number;
    website: string;
}
