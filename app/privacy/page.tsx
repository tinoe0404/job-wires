import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Privacy Policy"
        subtitle="Last updated: October 2023"
        centered={false}
      />
      <div className="prose prose-lg prose-gray max-w-none text-[var(--color-muted)] font-body">
        <p className="mb-4">
          At Joshwires, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        <h3 className="text-xl font-display font-bold text-[var(--color-primary)] mt-8 mb-4">Information We Collect</h3>
        <p className="mb-4">
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
        </ul>
        <h3 className="text-xl font-display font-bold text-[var(--color-primary)] mt-8 mb-4">Contact Us</h3>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at info@joshwires.co.zw.
        </p>
      </div>
    </div>
  );
}
