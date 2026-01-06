import React from "react";
import ThesisPDF from "@/assets/nutricycle-final-paper.pdf";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
          Get in Touch
        </h2>
        <p className="text-gray-700">
          Interested in learning more about NutriCycle or our research? Reach
          out via email or download our thesis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Email Button with Gmail Pre-fill */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nutricycle.bscs4a.2025@gmail.com&su=Inquiry%20about%20NutriCycle&body=Hello%20NutriCycle%20Team%2C%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20project.%0A%0ABest%20regards%2C%0A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm3.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5h-11zm0 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7z" />
            </svg>
            Let's have a talk!
          </a>

          {/* Download Thesis Button */}
          <button
            type="button"
            onClick={() => {
              const link = document.createElement("a");
              link.href = ThesisPDF;
              link.download = "NutriCycle_Thesis.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-green-600 text-green-600 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Thesis
          </button>
        </div>

        {/* Optional: Direct email display */}
        <p className="text-sm text-gray-500">
          Or email us directly at:{" "}
          <a
            href="mailto:nutricycle.bscs4a.2025@gmail.com"
            className="text-green-600 font-medium hover:underline"
          >
            nutricycle.bscs4a.2025@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
