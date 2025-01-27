import Balance from "react-wrap-balancer";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { siteUrls } from "@/config/urls";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { HighlightTabs } from "@/app/(app)/_components/highlight-tabs";
import { EarlyAccessForm } from "@/app/(app)/_components/early-access-form";
import Balancer from "react-wrap-balancer";
import { Background } from "@/components/background";

export default function HomePage() {
    8;
    // const repoStars = await getRepoStars();

    return (
        <>
            <section className="container flex flex-col items-center justify-center gap-4 py-20">
                <Link
                    href={siteUrls.socials.twitter}
                    className="flex items-center space-x-2 rounded-md bg-secondary px-3 py-2 text-sm hover:bg-secondary/80"
                >
                    <span>🎉</span>
                    <span className="font-medium">
                        Our Multi-Tenant Starter Template is in development.
                        Stay updated and follow our progress on 𝕏 (formerly
                        Twitter).
                    </span>
                    <ExternalLinkIcon className="h-4 w-4 flex-shrink-0" />
                </Link>
                <Balance
                    as="h1"
                    className="text-center font-heading text-3xl font-bold sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                    Effortlessly Build Multi-Tenant Apps with React Native &
                    Expo
                </Balance>
                <Balance
                    as="p"
                    className="text-center text-muted-foreground sm:text-xl"
                >
                    Take your development to the next level with our
                    customizable and feature-packed starter template. Designed
                    specifically for multi-tenant apps, this template provides
                    everything you need to launch your app faster.
                </Balance>
                <div className="flex items-center gap-4">
                    <Link
                        href={siteUrls.marketing.earlyAccess}
                        className={buttonVariants({
                            className: "flex items-center gap-2",
                        })}
                    >
                        Early Access
                    </Link>
                    <Link
                        href={siteUrls.socials.github}
                        className={buttonVariants({
                            className: "flex items-center",
                            variant: "outline",
                        })}
                    >
                        <Icons.gitHub className="mr-2 h-4 w-4" />
                        Github
                        {/* <span className="ml-1 flex items-center font-normal text-muted-foreground">
                            {repoStars}
                        </span> */}
                    </Link>
                </div>

                <HighlightTabs className="mt-36" />
            </section>

            <section
                id="early-access"
                className="relative border-y border-border bg-muted/30 py-36"
            >
                <Background>
                    <div className="container flex max-w-xl flex-col items-center space-y-8">
                        <Balancer
                            as="h2"
                            className="w-full text-center font-heading text-4xl font-bold"
                        >
                            Join the Early Access List and get notified when we
                            launch!
                        </Balancer>

                        <EarlyAccessForm />
                    </div>
                </Background>
            </section>
        </>
    );
}

// async function getRepoStars() {
//     const response = await fetch(
//         "https://api.github.com/repos/alifarooq9/expotenants",
//         {
//             next: {
//                 // run every 15 minutes
//                 revalidate: 900,
//             },
//         },
//     );

//     const data: unknown = await response.json();
//     const stars: number = (data as { stargazers_count?: string })
//         ?.stargazers_count
//         ? Number((data as { stargazers_count?: string }).stargazers_count)
//         : 0;

//     return stars;
// }
