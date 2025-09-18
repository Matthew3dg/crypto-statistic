import type { Metadata } from "next";
import { Converter } from "@/src/widgets/converter/ui/Converter";

export const metadata: Metadata = {
  title: "Converter",
  description: "Convert crypto to fiat with live rates.",
};

export default function ConverterPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-6">
        <Converter />
      </div>
    </main>
  );
}
