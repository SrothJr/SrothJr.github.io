export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
      <span className="text-primary">//</span> {children}
    </p>
  );
}
