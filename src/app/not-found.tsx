import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";
import { Container, buttonPrimary } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-28 text-center sm:py-36">
      <p className="text-gradient animate-in font-display text-8xl font-bold sm:text-9xl">404</p>
      <h1 className="animate-in mt-6 text-3xl font-bold sm:text-4xl" style={{ animationDelay: "80ms" }}>
        Page not found
      </h1>
      <p className="animate-in mx-auto mt-4 max-w-md text-lg text-muted" style={{ animationDelay: "160ms" }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="animate-in mt-10" style={{ animationDelay: "240ms" }}>
        <Link href="/" className={buttonPrimary}>
          <ArrowLeftIcon size={16} /> Back home
        </Link>
      </div>
    </Container>
  );
}
