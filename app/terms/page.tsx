import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Terms of Service"
        subtitle="Last updated: October 2023"
        centered={false}
      />
      <div className="prose prose-lg prose-gray max-w-none text-[var(--color-muted)] font-body">
        <p className="mb-4">
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity and Joshwires, concerning your access to and use of the website.
        </p>
        <h3 className="text-xl font-display font-bold text-[var(--color-primary)] mt-8 mb-4">Agreement to Terms</h3>
        <p className="mb-4">
          By accessing the Site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site.
        </p>
        <h3 className="text-xl font-display font-bold text-[var(--color-primary)] mt-8 mb-4">Products</h3>
        <p className="mb-4">
          We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors.
        </p>
        <h3 className="text-xl font-display font-bold text-[var(--color-primary)] mt-8 mb-4">Contact Us</h3>
        <p>
          In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at info@joshwires.co.zw.
        </p>
      </div>
    </div>
  );
}
