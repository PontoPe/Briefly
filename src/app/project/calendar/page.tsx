"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { Icon } from "@/components/Icon";

/* ── Static data ─────────────────────────────────────────── */

type CalendarItem = {
  id: string;
  title: string;
  platform: string;
  platformIcon: string;
  type: string;
  status: "scheduled" | "draft" | "published" | "review";
  date: number;
  time?: string;
};

const statusColors: Record<string, string> = {
  scheduled: "bg-primary/10 text-primary",
  draft: "bg-outline-variant/20 text-on-surface-variant",
  published: "bg-secondary/10 text-secondary",
  review: "bg-tertiary-container/20 text-tertiary-container",
};

const statusLabels: Record<string, string> = {
  scheduled: "Scheduled",
  draft: "Draft",
  published: "Published",
  review: "In Review",
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const calendarItems: CalendarItem[] = [
  {
    id: "1",
    title: "Q3 Campaign Teaser — Carousel",
    platform: "Instagram",
    platformIcon: "photo_camera",
    type: "Carousel Post",
    status: "scheduled",
    date: 8,
    time: "10:00 AM",
  },
  {
    id: "2",
    title: "Behind the Scenes: Brand Shoot",
    platform: "TikTok",
    platformIcon: "videocam",
    type: "Short Video",
    status: "scheduled",
    date: 8,
    time: "2:00 PM",
  },
  {
    id: "3",
    title: "Weekly Newsletter — Issue #14",
    platform: "Email",
    platformIcon: "mail",
    type: "Newsletter",
    status: "draft",
    date: 9,
  },
  {
    id: "4",
    title: "Product Launch Announcement",
    platform: "LinkedIn",
    platformIcon: "business",
    type: "Article",
    status: "review",
    date: 10,
    time: "9:00 AM",
  },
  {
    id: "5",
    title: "Retargeting Ad Set — Summer Sale",
    platform: "Meta Ads",
    platformIcon: "campaign",
    type: "Paid Ad",
    status: "scheduled",
    date: 11,
    time: "12:00 PM",
  },
  {
    id: "6",
    title: "Customer Testimonial Reel",
    platform: "Instagram",
    platformIcon: "photo_camera",
    type: "Reel",
    status: "draft",
    date: 12,
  },
  {
    id: "7",
    title: "Brand Story Highlight Update",
    platform: "Instagram",
    platformIcon: "photo_camera",
    type: "Story",
    status: "published",
    date: 5,
  },
  {
    id: "8",
    title: "LinkedIn Thought Leadership Post",
    platform: "LinkedIn",
    platformIcon: "business",
    type: "Post",
    status: "published",
    date: 6,
  },
];

const upcomingDeadlines = [
  { label: "Social Kit — Final Review", date: "Apr 12", urgent: true },
  { label: "Newsletter Copy Due", date: "Apr 14", urgent: false },
  { label: "Campaign Launch", date: "Apr 18", urgent: false },
];

export default function ContentCalendarPage() {
  const [view, setView] = useState<"week" | "list">("week");

  /* Build a week grid (Mon-Sun) date → items map */
  const weekStart = 7; // Monday Apr 7
  const weekDates = Array.from({ length: 7 }, (_, i) => weekStart + i);
  const today = 9;

  const itemsByDate = (date: number) =>
    calendarItems.filter((item) => item.date === date);

  return (
    <>
      <Navbar />
      <ProjectSidebar />

      <main className="ml-64 pt-4 pb-20">
        <div className="max-w-300 mx-auto px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-label-lg font-bold uppercase tracking-widest text-tertiary mb-1">
                Content Planning
              </p>
              <h1 className="font-display text-display-sm font-extrabold text-on-surface tracking-tight">
                Content Calendar
              </h1>
              <p className="text-body-md text-on-surface-variant mt-1">
                April 2025 — Week 2
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex bg-surface-container rounded-full p-1">
                <button
                  onClick={() => setView("week")}
                  className={`px-4 py-2 rounded-full text-label-sm font-bold transition-colors ${
                    view === "week"
                      ? "bg-primary text-on-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`px-4 py-2 rounded-full text-label-sm font-bold transition-colors ${
                    view === "list"
                      ? "bg-primary text-on-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  List
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-tertiary-container text-on-tertiary rounded-full font-display font-bold text-body-sm hover:opacity-90 transition-all">
                <Icon name="add" size={20} />
                New Post
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Calendar Area */}
            <div className="lg:col-span-3">
              {view === "week" ? (
                /* ── Week Grid View ─────────────────────── */
                <div className="grid grid-cols-7 gap-3">
                  {weekDates.map((date, i) => {
                    const items = itemsByDate(date);
                    const isToday = date === today;
                    return (
                      <div key={date}>
                        {/* Day Header */}
                        <div className={`text-center mb-3 pb-2 ${isToday ? "" : ""}`}>
                          <p className="text-label-sm text-on-surface-variant">
                            {weekDays[i]}
                          </p>
                          <p
                            className={`text-title-md font-display font-bold ${
                              isToday
                                ? "w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center mx-auto"
                                : "text-on-surface"
                            }`}
                          >
                            {date}
                          </p>
                        </div>

                        {/* Day Column */}
                        <div className="space-y-2 min-h-48">
                          {items.map((item) => (
                            <div
                              key={item.id}
                              className="bg-surface-container-lowest rounded-xl p-3 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all cursor-pointer group"
                            >
                              <span
                                className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase mb-1.5 ${statusColors[item.status]}`}
                              >
                                {statusLabels[item.status]}
                              </span>
                              <p className="text-label-sm font-bold text-on-surface leading-tight mb-1 group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <div className="flex items-center gap-1 text-on-surface-variant">
                                <Icon name={item.platformIcon} size={12} />
                                <span className="text-[10px]">
                                  {item.platform}
                                </span>
                              </div>
                              {item.time && (
                                <p className="text-[10px] text-on-surface-variant mt-1">
                                  {item.time}
                                </p>
                              )}
                            </div>
                          ))}
                          {items.length === 0 && (
                            <div className="h-24 rounded-xl border border-dashed border-outline-variant/20 flex items-center justify-center">
                              <Icon
                                name="add"
                                size={16}
                                className="text-outline-variant"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* ── List View ──────────────────────────── */
                <div className="space-y-3">
                  {calendarItems
                    .sort((a, b) => a.date - b.date)
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-surface-container-lowest rounded-xl p-4 flex items-center gap-4 hover:shadow-[0_20px_40px_rgba(29,27,32,0.06)] transition-all cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                          <Icon
                            name={item.platformIcon}
                            size={24}
                            className="text-primary"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display text-title-sm font-bold text-on-surface truncate">
                            {item.title}
                          </p>
                          <p className="text-label-sm text-on-surface-variant">
                            {item.platform} · {item.type}
                            {item.time && ` · ${item.time}`}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-label-sm font-bold text-on-surface-variant">
                            Apr {item.date}
                          </span>
                          <span
                            className={`px-3 py-1 rounded-full text-label-sm font-bold ${statusColors[item.status]}`}
                          >
                            {statusLabels[item.status]}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Post Stats */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold text-on-surface mb-4">
                  This Week
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Scheduled", count: 3, color: "text-primary" },
                    { label: "In Review", count: 1, color: "text-tertiary-container" },
                    { label: "Drafts", count: 2, color: "text-on-surface-variant" },
                    { label: "Published", count: 2, color: "text-secondary" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="text-body-sm text-on-surface-variant">
                        {s.label}
                      </span>
                      <span className={`text-title-sm font-display font-bold ${s.color}`}>
                        {s.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Deadlines */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold text-on-surface mb-4">
                  Upcoming Deadlines
                </h3>
                <div className="space-y-3">
                  {upcomingDeadlines.map((d) => (
                    <div key={d.label} className="flex items-start gap-2">
                      <Icon
                        name={d.urgent ? "priority_high" : "event"}
                        size={18}
                        className={d.urgent ? "text-error mt-0.5" : "text-primary mt-0.5"}
                      />
                      <div>
                        <p className="text-body-sm font-bold text-on-surface">
                          {d.label}
                        </p>
                        <p className={`text-label-sm ${d.urgent ? "text-error font-bold" : "text-on-surface-variant"}`}>
                          {d.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connected Channels */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_20px_40px_rgba(29,27,32,0.04)]">
                <h3 className="font-display text-title-md font-bold text-on-surface mb-4">
                  Connected Channels
                </h3>
                <div className="space-y-2">
                  {[
                    { name: "Instagram", icon: "photo_camera", connected: true },
                    { name: "LinkedIn", icon: "business", connected: true },
                    { name: "TikTok", icon: "videocam", connected: true },
                    { name: "Email (Mailchimp)", icon: "mail", connected: false },
                  ].map((ch) => (
                    <div
                      key={ch.name}
                      className="flex items-center gap-3 p-2 rounded-lg"
                    >
                      <Icon name={ch.icon} size={18} className="text-primary" />
                      <span className="text-body-sm text-on-surface flex-1">
                        {ch.name}
                      </span>
                      {ch.connected ? (
                        <span className="text-label-sm font-bold text-secondary">
                          Active
                        </span>
                      ) : (
                        <span className="text-label-sm font-bold text-on-surface-variant">
                          Connect
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
