import { Metadata } from "next";
import { Suspense } from "react";
import { generatePageMetadata } from "@/lib/seo-config";
import { launchHowToSchema, SchemaMarkup } from "@/lib/schema-markup";
import LaunchFormContent from "@/components/LaunchFormContent";

export const metadata: Metadata = generatePageMetadata('/launch');

export default function LaunchPage() {
  return (
    <>
      <SchemaMarkup schemas={launchHowToSchema} />
      <Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}>
        <LaunchFormContent />
      </Suspense>
    </>
  );
}
