import type { PropsWithChildren } from "react";
import CTASection from "@/components/sections/CTASection";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DiagnosticModal({ children }: PropsWithChildren) {
  return (
    <Dialog>
      {children}

      <DialogContent className="max-h-[calc(100vh-1rem)] w-[calc(100%-1rem)] gap-0 overflow-y-auto p-0 sm:max-w-6xl">
        <DialogTitle className="sr-only">Diagnóstico Gratuito</DialogTitle>
        <DialogDescription className="sr-only">
          Solicite um diagnóstico estratégico gratuito para sua empresa.
        </DialogDescription>
        <CTASection embedded />
      </DialogContent>
    </Dialog>
  );
}
