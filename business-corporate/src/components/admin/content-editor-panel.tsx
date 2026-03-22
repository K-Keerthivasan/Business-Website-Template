"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { contentEditorSeed } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export function ContentEditorPanel() {
  const [heroHeadline, setHeroHeadline] = useState(contentEditorSeed.heroHeadline);
  const [services, setServices] = useState<string[]>(contentEditorSeed.services);
  const [teamMembers, setTeamMembers] = useState<string[]>(contentEditorSeed.teamMembers);

  function updateListItem(
    kind: "services" | "teamMembers",
    index: number,
    value: string,
  ) {
    const setter = kind === "services" ? setServices : setTeamMembers;
    setter((current: string[]) =>
      current.map((item: string, itemIndex: number) => (itemIndex === index ? value : item)),
    );
  }

  function addListItem(kind: "services" | "teamMembers") {
    const setter = kind === "services" ? setServices : setTeamMembers;
    setter((current: string[]) => [...current, "New item"]);
  }

  function removeListItem(kind: "services" | "teamMembers", index: number) {
    const setter = kind === "services" ? setServices : setTeamMembers;
    setter((current: string[]) => current.filter((_: string, itemIndex: number) => itemIndex !== index));
  }

  return (
    <Tabs defaultValue="hero" className="gap-6">
      <TabsList className="w-full justify-start rounded-full p-1">
        <TabsTrigger
          value="hero"
          className="rounded-full data-active:bg-primary data-active:text-primary-foreground"
        >
          Hero
        </TabsTrigger>
        <TabsTrigger
          value="services"
          className="rounded-full data-active:bg-primary data-active:text-primary-foreground"
        >
          Services
        </TabsTrigger>
        <TabsTrigger
          value="team"
          className="rounded-full data-active:bg-primary data-active:text-primary-foreground"
        >
          Team
        </TabsTrigger>
      </TabsList>

      <TabsContent value="hero">
        <Card className="border-border bg-card shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl">Hero Headline</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={heroHeadline}
              onChange={(event) => setHeroHeadline(event.target.value)}
              className="min-h-36 rounded-[24px] px-4 py-3"
            />
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="services">
        <Card className="border-border bg-card shadow-none">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-2xl">Services List</CardTitle>
            <Button
              type="button"
              onClick={() => addListItem("services")}
              className="rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="size-4" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {services.map((service, index) => (
              <div key={`${service}-${index}`} className="flex gap-3">
                <Input
                  value={service}
                  onChange={(event) => updateListItem("services", index, event.target.value)}
                  className="h-12 rounded-2xl px-4"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeListItem("services", index)}
                  className="size-12 rounded-2xl"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="team">
        <Card className="border-border bg-card shadow-none">
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-2xl">Team Members</CardTitle>
            <Button
              type="button"
              onClick={() => addListItem("teamMembers")}
              className="rounded-full bg-primary px-4 text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="size-4" />
              Add
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {teamMembers.map((member, index) => (
              <div key={`${member}-${index}`} className="flex gap-3">
                <Input
                  value={member}
                  onChange={(event) => updateListItem("teamMembers", index, event.target.value)}
                  className="h-12 rounded-2xl px-4"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => removeListItem("teamMembers", index)}
                  className="size-12 rounded-2xl"
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
