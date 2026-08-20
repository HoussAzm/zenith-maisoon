import { whatsappLink } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Bonjour, je souhaite avoir plus d'informations sur vos services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2-.17-.3-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5h-.56c-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.2 3.02.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.7-.7 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.2-.55-.35z" />
        <path d="M12.02 2C6.5 2 2.03 6.44 2.03 11.9c0 1.88.52 3.63 1.42 5.14L2 22l5.13-1.34a10.05 10.05 0 004.89 1.24h.01c5.52 0 10-4.44 10-9.9 0-2.65-1.04-5.14-2.93-7.01A10.03 10.03 0 0012.02 2zm0 18.13h-.01a8.3 8.3 0 01-4.24-1.16l-.3-.18-3.05.8.82-2.94-.2-.3a8.15 8.15 0 01-1.28-4.45c0-4.5 3.7-8.16 8.27-8.16 2.21 0 4.28.86 5.84 2.4a8.05 8.05 0 012.42 5.75c0 4.5-3.71 8.24-8.27 8.24z" />
      </svg>
    </a>
  );
}
