import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Container, Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="bg-pgi-black min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <span className="font-display text-[150px] md:text-[200px] font-bold text-gradient-gold leading-none">
              404
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-pgi-gray-100 mb-4">
            Page Not Found
          </h1>

          <p className="text-lg text-pgi-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/">
              <Home size={20} />
              Back to Home
            </Button>
            <Button size="lg" variant="secondary" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
