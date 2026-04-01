import Image from "next/image";
import type { Client } from "@/types";
import { Container, Section, SectionTitle } from "@/components/ui";

interface ClientLogosProps {
  clients: Client[];
}

export function ClientLogos({ clients }: ClientLogosProps) {
  return (
    <Section className="bg-pgi-black">
      <Container>
        <SectionTitle
          subtitle="Trusted Partners"
          title="Our Valued Clients"
          description="Building lasting relationships with industry leaders"
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
  const placeholderClients = [
    "Client 1",
    "Client 2",
    "Client 3",
    "Client 4",
    "Client 5",
    "Client 6",
  ];

  return (
    <Section className="bg-pgi-black">
      <Container>
        <SectionTitle
          subtitle="Trusted Partners"
          title="Our Valued Clients"
          description="Building lasting relationships with industry leaders"
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
