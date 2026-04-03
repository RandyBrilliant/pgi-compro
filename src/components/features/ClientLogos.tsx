import { useTranslations } from 'next-intl';
import Image from "next/image";
import type { Client } from "@/types";
import { Container, Section, SectionTitle, SectionBackground } from "@/components/ui";
import { clients as clientsData } from "@/lib/data/values";

interface ClientLogosProps {
  clients?: Client[];
}

export function ClientLogos({ clients = clientsData }: ClientLogosProps) {
  const t = useTranslations('home.clients');

  return (
    <Section className="bg-pgi-black relative overflow-hidden">
      {/* Subtle geometric pattern background */}
      <SectionBackground
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        alt="Abstract geometric pattern"
        opacity={4}
        overlayDirection="radial"
        grayscale
      />
      
      <Container className="relative z-10">
        <SectionTitle
          subtitle={t('subtitle')}
          title={t('title')}
          description={t('description')}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder for client logo - will show text until image is provided */}
              <div className="relative h-12 w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Placeholder version when no images are available
export function ClientLogosPlaceholder() {
  const t = useTranslations('home.clients');
  const placeholderClients = [
    "Client 1",
    "Client 2",
    "Client 3",
    "Client 4",
    "Client 5",
    "Client 6",
  ];

  return (
    <Section className="bg-pgi-black relative overflow-hidden">
      {/* Subtle geometric pattern background */}
      <SectionBackground
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        alt="Abstract geometric pattern"
        opacity={4}
        overlayDirection="radial"
        grayscale
      />
      
      <Container className="relative z-10">
        <SectionTitle
          subtitle={t('subtitle')}
          title={t('title')}
          description={t('description')}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {placeholderClients.map((name, index) => (
            <div
              key={`placeholder-${index}-${name}`}
              className="flex items-center justify-center h-16 rounded-lg bg-pgi-dark border border-pgi-charcoal text-pgi-gray-500 text-sm font-medium opacity-50 hover:opacity-100 hover:border-pgi-gold/30 transition-all duration-300"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
