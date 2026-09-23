export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return <span className={`brand-logo${compact ? ' brand-logo--compact' : ''}`} role="img" aria-label="GLAMRDIP+ nail atelier">
    <span className="brand-mark" aria-hidden="true"><span className="brand-initial">G</span><span className="brand-mark-plus">+</span></span>
    <span className="brand-type" aria-hidden="true"><span className="brand-wordmark">GLAMRDIP<span className="brand-plus">+</span></span>{!compact && <span className="brand-tagline">NAIL ATELIER</span>}</span>
  </span>;
}
