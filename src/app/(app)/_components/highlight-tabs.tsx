"use client";

import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { TabsProps } from "@radix-ui/react-tabs";
import { SaasStarterkitHighlight } from "@/app/(app)/_components/saas-startkit-highlight";
import React from "react";

const highlights = [
    {
        id: "starter-template",
        title: "Starter Template",
        description:
            "Discover our React Native & Expo starter template for building scalable multi-tenant apps. Launch your multi-tenants app faster today!",
        badge: "Almost Ready",
    },
    {
        id: "cli",
        title: "CLI",
        description:
            "Quickly generate components, configure multi-tenancy, and streamline workflows with our feature-packed CLI.",
        disabled: true,
        badge: "Soon",
    },
    {
        id: "examples",
        title: "Examples",
        description:
            "Complete examples for auth, database, billing, multi-tenancy, and more to kickstart your app.",
        disabled: true,
        badge: "Soon",
    },
];

type HighlightNavProps = TabsProps;

export function HighlightTabs({ className, ...props }: HighlightNavProps) {
    const [selectedHighlight, setSelectedHighlight] = React.useState(
        highlights[0]?.id,
    );

    const activeHighlight = highlights.find(
        (highlight) => highlight.id === selectedHighlight,
    );

    return (
        <Tabs
            className={cn("space-y-10", className)}
            value={selectedHighlight}
            onValueChange={(value) => setSelectedHighlight(value)}
            {...props}
        >
            <div className="flex flex-col items-center gap-4">
                <TabsList className="grid h-auto grid-cols-3 items-start bg-transparent p-0">
                    {highlights.map((highlight) => (
                        <TabsTrigger
                            value={highlight.id}
                            key={highlight.id}
                            disabled={highlight.disabled}
                            className="group flex flex-col items-center justify-start gap-2 whitespace-normal rounded-none border-t py-6 text-start data-[state=active]:border-primary data-[state=active]:shadow-none sm:items-start"
                        >
                            <div className="flex flex-col items-center gap-2 sm:flex-row">
                                <h2 className="text-center font-medium">
                                    {highlight.title}
                                </h2>
                                {highlight?.badge && (
                                    <span className="block rounded-sm bg-secondary px-2 py-0.5 text-center text-xs font-medium text-primary">
                                        {highlight.badge}
                                    </span>
                                )}
                            </div>
                            <p className="hidden font-normal text-muted-foreground transition-all sm:block">
                                {highlight.description}
                            </p>
                        </TabsTrigger>
                    ))}
                </TabsList>

                <p className="block w-full text-center text-sm font-normal text-muted-foreground transition-all sm:hidden">
                    {activeHighlight?.description}
                </p>
            </div>
            <TabsContent value="saas-starterkit">
                <SaasStarterkitHighlight />
            </TabsContent>
        </Tabs>
    );
}
