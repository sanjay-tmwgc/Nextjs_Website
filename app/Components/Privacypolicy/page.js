"use client";
import React from "react";
import "./privacy.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const back = () => {
    router.push("../");
  };
  return (
    <div className="privacypolicy">
      <div className="privacy-sub-one">
        <p>
          <button onClick={back}>Home</button>&#62; Privacy policy
        </p>
        <h1>
          Privacy & Other policies<span>.</span>
        </h1>
        <p>
          At <span>SKY FIANCIAL</span>, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy outlines how we collect, use, and safeguard your data
          when you visit our website or interact with our services.
        </p>
      </div>
      <div className="privacy-table">
        <div className="privacy-table-sec1">
          <div className="privacy-table-item1">
            <h3>Information Collection</h3>
            <p>
              We collect personal information such as name, contact details, and
              demographic data when you voluntarily provide it to us.
              Additionally, we may automatically collect certain information
              through cookies and similar technologies to enhance your browsing
              experience.
            </p>
          </div>
          <div className="privacy-table-item2">
            <h3>Use of Information</h3>
            <p>
              We use the information we collect to provide you with the products
              and services you request, personalize your experience, and
              communicate with you about relevant offers and updates. Your data
              may also be used for internal purposes such as analytics and
              improving our services.
            </p>
          </div>
        </div>
        <div className="privacy-table-sec2">
          <div className="privacy-table-item3">
            <h3>Data Security</h3>
            <p>
              We employ industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction. However, no method of transmission
              over the internet or electronic storage is completely secure, and
              we cannot guarantee absolute security.
            </p>
          </div>
          <div className="privacy-table-item4">
            <h3>Third-Party Disclosure</h3>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties without your consent, except as
              required by law or to trusted third parties who assist us in
              operating our website or servicing you.
            </p>
          </div>
        </div>
        <div className="privacy-table-sec3">
          <div className="privacy-table-item5">
            <h3>Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal
              information held by us. You may also opt out of receiving
              marketing communications from us at any time.
            </p>
          </div>
          <div className="privacy-table-item6">
            <h3>Policy Updates</h3>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. We encourage you to review
              this page regularly for any updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
